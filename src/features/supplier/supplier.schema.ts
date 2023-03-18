import { model, Model, Schema } from 'mongoose';
import { ISupplierDocument } from './supplier.interface';

const supplierSchema: Schema = new Schema({
  SupplierID: { type: Number },
  CompanyName: { type: String },
  ContactName: { type: String },
  ContactTitle: { type: String },
  Address: { type: String },
  City: { type: String },
  Region: { type: String },
  PostalCode: { type: String },
  Phone: { type: String },
  Fax: { type: String },
  HomePage: { type: String }
});

const SupplierModel: Model<ISupplierDocument> = model<ISupplierDocument>('Suppliers', supplierSchema, 'Suppliers');
export { SupplierModel };
