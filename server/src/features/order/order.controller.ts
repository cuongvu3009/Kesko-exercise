import { Response, Request, NextFunction } from 'express';
import { OrderDetailsModel } from './order.schema';
import orderService from './order.service';

const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(await orderService.getAll());
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
