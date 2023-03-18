import express, { Router } from 'express';
import { getCategories } from './category.controller';

class CategoryRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.get('/categories', getCategories);

    return this.router;
  }
}

export const categoryRoutes: CategoryRoutes = new CategoryRoutes();
