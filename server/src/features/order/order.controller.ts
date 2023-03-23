import { BadRequestError, NoFoundError } from '@root/shared/error-handler';
import { Response, Request, NextFunction } from 'express';
import { orderService } from './order.service';

class OrderController {
  public getOrders = async (req: Request, res: Response, next: NextFunction) => {
    const result = await orderService.getAll();

    if (result.length === 0) {
      throw new NoFoundError('No data found');
    }

    res.status(200).json(result);
  };

  public getOrderDetails = async (req: Request, res: Response, next: NextFunction) => {
    //  OrderID must be type of number
    const OrderID = +req.params.OrderID;

    if (!OrderID) {
      throw new BadRequestError('Please provide Order ID');
    }
    if (typeof OrderID !== 'number') {
      throw new BadRequestError('Please provide correct Order ID which is a number series of 5 characters');
    }

    const result = await orderService.getDetails(OrderID);

    res.status(200).json(result);
  };
}

export const orderController = new OrderController();
