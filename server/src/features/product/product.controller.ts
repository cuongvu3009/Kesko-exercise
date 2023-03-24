import { BadRequestError } from '@root/shared/error-handler';
import { Response, Request, NextFunction } from 'express';
import { productService } from './product.service';

class ProductController {
  public getByName = async (req: Request, res: Response, next: NextFunction) => {
    const { keyWords } = req.params;
    if (!keyWords) {
      throw new BadRequestError('Please provide key words');
    }

    if (typeof keyWords !== 'string') {
      throw new BadRequestError('Keywords must be string');
    }

    const result = await productService.getProductsByName(keyWords);

    res.status(200).json(result);
  };
}

export const productController = new ProductController();
