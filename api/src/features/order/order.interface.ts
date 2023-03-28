import { Date, Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { ICustomerDocument } from '@customer/customer.interface';
import { IProductDocument } from '../product/product.interface';

export interface IOrderDocument extends Document {
  _id: ObjectId;
  OrderID: number | ObjectId;
  CustomerID: string | ObjectId;
  EmployeeID: number | ObjectId;
  OrderDate: Date;
  RequiredDate: Date;
  ShippedDate: Date;
  Freight: number;
  ShipName: string;
  ShipAddress: string;
  ShipCity: string;
  ShipRegion: string;
  ShipPostalCode: string;
  ShipCountry: string;
  CustomerInfo?: ICustomerDocument[];
}

export interface IOrderDetails extends Document {
  OrderID: number | ObjectId;
  ProductID: number | ObjectId;
  UnitPrice: number;
  Quantity: number;
  Discount: number;
  ProductInfo: IProductDocument[];
}

export interface ISaveOrderToCache {
  key: ObjectId | string;
  currentUserId: string;
  uId: string;
  createdOrder: IOrderDocument;
}
