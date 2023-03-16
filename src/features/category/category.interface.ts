import mongoose, { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface ICategoryDocument extends Document {
  CategoryID: string | number | ObjectId;
  CategoryName: string;
  Description: string;
  Picture: string;
}
