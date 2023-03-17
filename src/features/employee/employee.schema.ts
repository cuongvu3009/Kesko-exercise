import mongoose, { model, Model, Schema } from 'mongoose';
import { IEmployeeDocument } from './employee.interface';

const employeeSchema: Schema = new Schema({
  EmployeeID: { type: String },
  LastName: { type: String, default: '' },
  FirstName: { type: String },
  Title: { type: String },
  TitleOfCourtesy: { type: String },
  BirthDate: { type: Date },
  HireDate: { type: Date },
  Address: { type: String },
  City: { type: String },
  Region: { type: String },
  PostalCode: { type: String },
  Country: { type: String },
  HomePhone: { type: String },
  Extension: { type: String },
  Photo: { type: Buffer },
  Notes: { type: String },
  ReportsTo: { type: String },
  PhotoPath: { type: String }
});

const EmployeeModel: Model<IEmployeeDocument> = model<IEmployeeDocument>('Employee', employeeSchema, 'Employee');
export { EmployeeModel };
