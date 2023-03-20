import { IOrderDetails, IOrderDocument, ISaveOrderToCache } from '@root/features/order/order.interface';
import { ServerError } from '@root/shared/global/helpers/error-handler';
import Logger from 'bunyan';
import { config } from '@root/config';
import { BaseCache } from './base.cache';

const log: Logger = config.createLogger('OrderCache');

export type OrderCacheMultiType = string | number | Buffer | IOrderDocument | IOrderDetails[];

export class OrderCache extends BaseCache {
  constructor() {
    super('postCache');
  }

  public async saveOrderToCache(data: ISaveOrderToCache): Promise<void> {
    const { key, createdOrder } = data;
    const {
      _id,
      OrderID,
      CustomerID,
      EmployeeID,
      OrderDate,
      RequiredDate,
      ShippedDate,
      Freight,
      ShipName,
      ShipAddress,
      ShipCity,
      ShipRegion,
      ShipPostalCode,
      ShipCountry,
      CustomerInfo
    } = createdOrder;

    const dataToSave = {
      _id: `${_id}`,
      OrderID: `${OrderID}`,
      CustomerID: `${CustomerID}`,
      EmployeeID: `${EmployeeID}`,
      OrderDate: `${OrderDate}`,
      RequiredDate: `${RequiredDate}`,
      ShippedDate: `${ShippedDate}`,
      Freight: `${Freight}`,
      ShipName: `${ShipName}`,
      ShipAddress: `${ShipAddress}`,
      ShipCity: `${ShipCity}`,
      ShipRegion: `${ShipRegion}`,
      ShipPostalCode: `${ShipPostalCode}`,
      ShipCountry: `${ShipCountry}`,
      CustomerInfo: JSON.stringify(CustomerInfo)
    };

    try {
      if (!this.client.isOpen) {
        await this.client.connect();
      }

      const multi: ReturnType<typeof this.client.multi> = this.client.multi();
      for (const [itemKey, itemValue] of Object.entries(dataToSave)) {
        multi.HSET(`orders:${key}`, `${itemKey}`, `${itemValue}`);
      }
      multi.exec();
    } catch (error) {
      log.error(error);
      throw new ServerError('Server error. Try again.');
    }
  }

  public async getOrderFromCache(key: string, start: number, end: number): Promise<IOrderDocument[]> {
    try {
      if (!this.client.isOpen) {
        await this.client.connect();
      }

      const reply: string[] = await this.client.ZRANGE(key, start, end, { REV: true });
      const multi: ReturnType<typeof this.client.multi> = this.client.multi();
      for (const value of reply) {
        multi.HGETALL(`orders:${value}`);
      }
      const replies: OrderCacheMultiType = (await multi.exec()) as unknown as OrderCacheMultiType;
      const orderReplies: IOrderDocument[] = [];
      for (const order of replies as unknown as IOrderDocument[]) {
        orderReplies.push(order);
      }

      return orderReplies;
    } catch (error) {
      log.error(error);
      throw new ServerError('Server error. Try again.');
    }
  }
}
