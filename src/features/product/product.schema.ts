import { model, Model, Schema } from 'mongoose';
import { IProductDocument } from './product.interface';

const productSchema: Schema = new Schema({
  ProductID: { type: Number },
  SupplierID: { type: Schema.Types.ObjectId, ref: 'Suppliers' },
  CategoryID: { type: Number },
  ProductName: { type: String },
  Phone: { type: String },
  QuantityPerUnit: { type: String },
  UnitPrice: { type: String },
  UnitsInStock: { type: Number },
  UnitsOnOrder: { type: Number },
  ReoderLevel: { type: Number },
  Discountinued: { type: String }
});

const ProductModel: Model<IProductDocument> = model<IProductDocument>('Products', productSchema, 'Products');
export { ProductModel };
