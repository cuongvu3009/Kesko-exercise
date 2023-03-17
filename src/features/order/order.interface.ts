import mongoose, { Date, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface IOrderDocument extends Document {
  OrderID: string | number | ObjectId;
  CustomerID: string | number | ObjectId;
  EmployeeID: string | number | ObjectId;
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
}

export interface IOrderDetails extends Document {
  OrderID: string | number | ObjectId;
  ProductID: string | number | ObjectId;
  UnitPrice: number;
  Quantity: number;
  Discount: number;
}
