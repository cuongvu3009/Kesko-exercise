import { Response, Request, NextFunction } from 'express';
import { productService } from './product.service';

class ProductController {
  public getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(await productService.getAll());
  };
}

export const productController = new ProductController();
