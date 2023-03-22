import { Response, Request, NextFunction } from 'express';
import { orderService } from './order.service';

class OrderController {
  public getOrders = async (req: Request, res: Response, next: NextFunction) => {
    const result = await orderService.getAll();
    res.status(200).json(result);
  };

  public getOrderDetails = async (req: Request, res: Response, next: NextFunction) => {
    const OrderID = +req.params.OrderID;
    const result = await orderService.getDetails(OrderID);

    res.status(200).json(result);
  };
}

export const orderController = new OrderController();
