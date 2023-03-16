import mongoose, { Date, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface IShipperDocument extends Document {
  ShipperID: number | ObjectId;
  CompanyName: string;
  Phone: string;
}
