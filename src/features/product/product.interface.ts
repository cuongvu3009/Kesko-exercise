import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface IProductDocument extends Document {
  ProductID: number | ObjectId;
  SupplierID: number | ObjectId;
  CategoryID: number | ObjectId;
  ProductName: string;
  Phone: string;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReoderLevel: number;
  Discountinued: string;
}
