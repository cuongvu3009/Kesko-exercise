import { model, Model, Schema } from 'mongoose';
import { ICustomerDocument } from '@customer/customer.interface';

const customerSchema: Schema = new Schema({
  CustomerID: { type: String },
  CompanyName: { type: String },
  ContactName: { type: String },
  ContactTile: { type: String },
  City: { type: String },
  Address: { type: String },
  Region: { type: String },
  PostalCode: { type: String },
  Country: { type: String },
  Phone: { type: String },
  Fax: { type: String }
});

const CustomerModel: Model<ICustomerDocument> = model<ICustomerDocument>('Customers', customerSchema, 'Customers');
export { CustomerModel };
