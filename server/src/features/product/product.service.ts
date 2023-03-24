import { IProductDocument } from './product.interface';
import { ProductModel } from './product.schema';

class ProductService {
  public getProductsByName = async (keyWords: string): Promise<IProductDocument[]> => {
    return ProductModel.find({ ProductName: { $regex: keyWords, $options: 'i' } });
  };
}

export const productService = new ProductService();
