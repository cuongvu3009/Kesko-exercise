import { Date, Document, ObjectId } from 'mongoose';

export interface IEmployeeDocument extends Document {
  EmployeeID: number | ObjectId;
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

export interface IEmployeeTerritoryDocument extends Document {
  EmployeeID: number | ObjectId;
  TerritoryID: string | ObjectId;
}
