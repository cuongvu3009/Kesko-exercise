import { Document, ObjectId } from 'mongoose';

export interface ICategoryDocument extends Document {
  CategoryID: number | ObjectId;
  CategoryName: string;
  Description: string;
  Picture: Buffer;
}
