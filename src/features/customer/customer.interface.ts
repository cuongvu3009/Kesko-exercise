import mongoose, { Document } from 'mongoose';

export interface ICustomerDocument extends Document {
  CustomerID: string | mongoose.Types.ObjectId;
  CompanyName: string;
  ContactName: string;
  ContactTile: string;
  Address: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
  Phone: string;
  Fax: string;
}
