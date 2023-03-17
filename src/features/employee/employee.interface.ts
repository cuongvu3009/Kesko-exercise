import mongoose, { Date, Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface IEmployeeDocument extends Document {
  EmployeeID: string | number | ObjectId;
  LastName: string;
  FirstName: string;
  Title: string;
  TitleOfCourtesy: string;
  BirthDate: Date;
  HireDate: Date;
  Address: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
  HomePhone: string;
  Extension: string;
  Photo: Buffer;
  Notes: string;
  ReportsTo: number;
  PhotoPath: string;
}
