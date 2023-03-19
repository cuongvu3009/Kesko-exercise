import { model, Model, Schema } from 'mongoose';
import { IShipperDocument } from './shipper.interface';

const shipperSchema: Schema = new Schema({
  ShipperID: { type: Number },
  Phone: { type: String },
  CompanyName: { type: String }
});

const ShipperModel: Model<IShipperDocument> = model<IShipperDocument>('Shippers', shipperSchema, 'Shippers');
export { ShipperModel };
