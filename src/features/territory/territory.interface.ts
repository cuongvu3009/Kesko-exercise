import mongoose, { Date, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface ITerritoryDocument extends Document {
  TerritoryID: string | number | ObjectId;
  TerritoryDescription: string;
  RegionID: number | string | ObjectId;
}

export interface IRegionDocument extends Document {
  RegionID: string | number | ObjectId;
  RegionDescription: string;
}
