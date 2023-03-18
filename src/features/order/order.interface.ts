import { Date, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface IOrderDocument extends Document {
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
}

export interface IOrderDetails extends Document {
  OrderID: number | ObjectId;
  ProductID: number | ObjectId;
  UnitPrice: number;
  Quantity: number;
  Discount: number;
}
