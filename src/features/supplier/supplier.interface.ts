import mongoose, { Date, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface ISupplierDocument extends Document {
  SupplierID: string | number | ObjectId;
  CompanyName: string;
  ContactName: string;
  ContactTitle: string;
  Address: string;
  City: string;
  Region: string;
  PostalCode: string;
  Phone: string;
  Fax: string;
  HomePage: string;
}
