import { Document, ObjectId } from 'mongoose';

export interface ISupplierDocument extends Document {
  SupplierID: number | ObjectId;
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
