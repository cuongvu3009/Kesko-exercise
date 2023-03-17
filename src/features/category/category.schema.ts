import mongoose, { model, Model, Schema } from 'mongoose';
import { ICategoryDocument } from '@category/category.interface';

const categorySchema: Schema = new Schema({
  CategoryID: { type: String },
  CategoryName: { type: String, default: '' },
  Description: { type: String },
  Picture: { type: Buffer } // casted to MongoDB's BSON type: binData
});

const CategoriesModel: Model<ICategoryDocument> = model<ICategoryDocument>('Category', categorySchema, 'Category');
export { CategoriesModel };
