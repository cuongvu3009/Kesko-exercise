import express, { Router } from 'express';
import { productController } from './product.controller';

class ProductRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/products', productController.getAllProducts);
    return this.router;
  }
}

export const productRoutes: ProductRoutes = new ProductRoutes();
