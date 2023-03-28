import express, { Router } from 'express';
import { orderController } from './order.controller';

class OrderRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/orders', orderController.getOrders);
    this.router.get('/orders/findbyid/:OrderID', orderController.getOrderDetails);
    this.router.get('/orders/findbyproduct/:ProductID', orderController.getOrderByProductId);
    return this.router;
  }
}

export const orderRoutes: OrderRoutes = new OrderRoutes();
