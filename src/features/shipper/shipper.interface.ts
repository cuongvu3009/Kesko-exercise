import { Document, ObjectId } from 'mongoose';

export interface IShipperDocument extends Document {
  ShipperID: number | ObjectId;
  CompanyName: string;
  Phone: string;
}
