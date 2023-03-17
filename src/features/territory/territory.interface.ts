import mongoose, { Date, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface ITerritoryDocument extends Document {
  TerritoryID: string | number | ObjectId;
  TerritoryDescription: string;
  RegionID: number | ObjectId;
}