import mongoose, { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface ICustomerDocument extends Document {
  CustomerID: string | number | ObjectId;
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
