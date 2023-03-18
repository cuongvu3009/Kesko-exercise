import { Document, ObjectId } from 'mongoose';

export interface ITerritoryDocument extends Document {
  TerritoryID: string | ObjectId;
  TerritoryDescription: string;
  RegionID: number;
}

export interface IRegionDocument extends Document {
  RegionID: number | ObjectId;
  RegionDescription: string;
}
