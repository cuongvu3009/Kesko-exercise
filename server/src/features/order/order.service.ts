import { IProductDocument } from '../product/product.interface';
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
      {
        $lookup: {
          from: 'Products',
          localField: 'ProductID',
          foreignField: 'ProductID',
          as: 'ProductInfo'
        }
      },
      { $match: { OrderID } }
    ]);
    return result;
  };

  public getOrderByProductId = async (ProductID: number): Promise<IProductDocument[]> => {
    return OrderDetailsModel.aggregate([
      {
        $lookup: {
          from: 'Products',
          localField: 'ProductID',
          foreignField: 'ProductID',
          as: 'Products'
        }
      },
      {
        $lookup: {
          from: 'Orders',
          localField: 'OrderID',
          foreignField: 'OrderID',
          as: 'OrderInfo'
        }
      },
      { $match: { ProductID } }
    ]);
  };
}

export const orderService = new OrderService();
