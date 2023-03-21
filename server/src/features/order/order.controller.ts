import { Response, Request, NextFunction } from 'express';
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
    const OrderID = +req.params.OrderID;
    const result = await orderService.getDetails(OrderID);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export { getOrders, getOrderDetails };
