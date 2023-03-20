import { Response, Request, NextFunction } from 'express';
import { OrderDetailsModel, OrderModel } from './order.schema';

const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
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

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getOrderDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderDetailsModel.aggregate([
      { $match: { OrderID: +req.params.OrderID } },
      {
        $lookup: {
          from: 'Products',
          localField: 'ProductID',
          foreignField: 'ProductID',
          as: 'ProductInfo'
        }
      }
    ]);

    res.send(result);
  } catch (error) {
    next(error);
  }
};

export { getOrders, getOrderDetails };
