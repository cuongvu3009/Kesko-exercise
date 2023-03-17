import mongoose, { model, Model, Schema } from 'mongoose';
import { ITerritoryDocument } from './territory.interface';

const territorySchema: Schema = new Schema({
  TerritoryID: { type: String },
  RegionID: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', index: true },
  TerritoryDescription: { type: String }
});

const TerritoryModel: Model<ITerritoryDocument> = model<ITerritoryDocument>('Territory', territorySchema, 'Territory');
export { TerritoryModel };
