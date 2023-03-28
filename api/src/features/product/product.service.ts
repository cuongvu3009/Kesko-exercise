import { IProductDocument } from './product.interface';
import { ProductModel } from './product.schema';

class ProductService {
  public getAll = async (): Promise<IProductDocument[]> => {
    return ProductModel.find({});
  };
}

export const productService = new ProductService();
