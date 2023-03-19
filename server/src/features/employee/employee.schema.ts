import { model, Model, Schema } from 'mongoose';
import { IEmployeeDocument, IEmployeeTerritoryDocument } from './employee.interface';

const employeeSchema: Schema = new Schema({
  EmployeeID: { type: Number },
  LastName: { type: String },
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

const employeeTerritoriesSchema: Schema = new Schema({
  EmployeeID: { type: Number },
  TerritoryID: { type: String }
});

const EmployeeModel: Model<IEmployeeDocument> = model<IEmployeeDocument>('Employees', employeeSchema, 'Employees');
const EmployeeTerritoryModel: Model<IEmployeeTerritoryDocument> = model<IEmployeeTerritoryDocument>(
  'EmployeeTerritories',
  employeeTerritoriesSchema,
  'EmployeeTerritories'
);
export { EmployeeModel, EmployeeTerritoryModel };
