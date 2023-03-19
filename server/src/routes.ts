import { categoryRoutes } from '@category/category.route';
import { Application } from 'express';
import { orderRoutes } from './features/order/order.route';

const BASE_PATH = '/api/v1';

export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, orderRoutes.routes());
  };
  routes();
};
