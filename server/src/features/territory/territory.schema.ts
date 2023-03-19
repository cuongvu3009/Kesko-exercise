import { model, Model, Schema } from 'mongoose';
import { ITerritoryDocument, IRegionDocument } from './territory.interface';

const territorySchema: Schema = new Schema({
  TerritoryID: { type: String },
  RegionID: { type: Schema.Types.ObjectId, ref: 'Regions' },
  TerritoryDescription: { type: String, trim: true }
});

const regionSchema: Schema = new Schema({
  RegionID: { type: Number },
  RegionDescription: { type: String }
});

const TerritoryModel: Model<ITerritoryDocument> = model<ITerritoryDocument>('Territories', territorySchema, 'Territories');
const RegionModel: Model<IRegionDocument> = model<IRegionDocument>('Regions', regionSchema, 'Regions');

export { TerritoryModel, RegionModel };
