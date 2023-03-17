import mongoose, { model, Model, Schema } from 'mongoose';
import { ICustomerDocument } from '@customer/customer.interface';

const customerSchema: Schema = new Schema({
  CustomerID: { type: String },
  CompanyName: { type: String, default: '' },
  ContactName: { type: String }, // casted to MongoDB's BSON type: binData
  ContactTile: { type: String },
  City: { type: String },
  Address: { type: String },
  Region: { type: String },
  PostalCode: { type: String },
  Country: { type: String },
  Phone: { type: String },
  Fax: { type: String }
});

const CustomerModel: Model<ICustomerDocument> = model<ICustomerDocument>('Customer', customerSchema, 'Customer');
export { CustomerModel };
