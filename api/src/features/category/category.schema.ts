import { model, Model, Schema } from 'mongoose';
import { ICategoryDocument } from '@category/category.interface';

const categorySchema: Schema = new Schema({
  CategoryID: { type: Number },
  CategoryName: { type: String },
  Description: { type: String },
  Picture: { type: Buffer } // casted to MongoDB's BSON type: binData
});

const CategoriesModel: Model<ICategoryDocument> = model<ICategoryDocument>('Categories', categorySchema, 'Categories');
export { CategoriesModel };
