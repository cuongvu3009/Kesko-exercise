import { Application } from 'express';
import { orderRoutes } from './features/order/order.route';
import { productRoutes } from './features/product/product.route';

const BASE_PATH = '/api/v1';

export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, orderRoutes.routes());
    app.use(BASE_PATH, productRoutes.routes());
  };
  routes();
};
