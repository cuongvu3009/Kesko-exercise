import mongoose, { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface IProductDocument extends Document {
  ProductID: string | number | ObjectId;
  SupplierID: string | number | ObjectId;
  CategoryID: string | number | ObjectId;
  ProductName: string;
  Phone: string;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReoderLevel: number;
  Discountinued: string;
}
