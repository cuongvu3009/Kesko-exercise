import mongoose, { model, Model, Schema } from 'mongoose';
import { ITerritoryDocument, IRegionDocument } from './territory.interface';

const territorySchema: Schema = new Schema({
  TerritoryID: { type: String },
  RegionID: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', index: true },
  TerritoryDescription: { type: String }
});

const regionSchema: Schema = new Schema({
  RegionID: { type: String },
  RegionDescription: { type: String }
});

const TerritoryModel: Model<ITerritoryDocument> = model<ITerritoryDocument>('Territory', territorySchema, 'Territory');
const RegionModel: Model<IRegionDocument> = model<IRegionDocument>('Region', regionSchema, 'Region');

export { TerritoryModel, RegionModel };
