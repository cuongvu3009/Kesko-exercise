import { IOrderDocument } from './order.interface';
import { OrderDetailsModel, OrderModel } from './order.schema';

class OrderService {
  public getAll = async (): Promise<IOrderDocument[]> => {
    const result = await OrderModel.aggregate([
      {
        $lookup: {
          from: 'Customers',
          localField: 'CustomerID',
          foreignField: 'CustomerID',
          as: 'CustomerInfo'
        }
      }
    ]);
    return result;
  };

  public getDetails = async (OrderID: number) => {
    const result = await OrderDetailsModel.aggregate([
      { $match: { OrderID } },
      {
        $lookup: {
          from: 'Products',
          localField: 'ProductID',
          foreignField: 'ProductID',
          as: 'ProductInfo'
        }
      }
    ]);
    return result;
  };
}

export const orderService = new OrderService();
