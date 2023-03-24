import express, { Router } from 'express';
import { productController } from './product.controller';

class ProductRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/orders/find/:keyWords', productController.getByName);
    return this.router;
  }
}

export const productRoutes: ProductRoutes = new ProductRoutes();
