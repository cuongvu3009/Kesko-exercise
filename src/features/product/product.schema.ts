import mongoose, { model, Model, Schema } from 'mongoose';
import { IProductDocument } from './product.interface';

const productSchema: Schema = new Schema({
  ProductID: { type: String },
  SupplierID: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', index: true },
  CategoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', index: true },
  ProductName: { type: String },
  Phone: { type: String },
  QuantityPerUnit: { type: String },
  UnitPrice: { type: String },
  UnitsInStock: { type: Number },
  UnitsOnOrder: { type: Number },
  ReoderLevel: { type: Number },
  Discountinued: { type: String }
});

const ProductModel: Model<IProductDocument> = model<IProductDocument>('Product', productSchema, 'Product');
export { ProductModel };
