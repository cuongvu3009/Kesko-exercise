import express, { Router } from 'express';
import { getOrderDetails, getOrders } from './order.controller';

class OrderRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/orders', getOrders);
    this.router.get('/orders/:OrderID', getOrderDetails);
    return this.router;
  }
}

export const orderRoutes: OrderRoutes = new OrderRoutes();
