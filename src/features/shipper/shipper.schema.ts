import mongoose, { model, Model, Schema } from 'mongoose';
import { IShipperDocument } from './shipper.interface';

const shipperSchema: Schema = new Schema({
  ShipperID: { type: String },
  Phone: { type: String },
  CompanyName: { type: String }
});

const ShipperModel: Model<IShipperDocument> = model<IShipperDocument>('Shipper', shipperSchema, 'Shipper');
export { ShipperModel };
