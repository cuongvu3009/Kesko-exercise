import { model, Model, Schema } from 'mongoose';
import { IOrderDocument, IOrderDetails } from './order.interface';

const orderSchema: Schema = new Schema({
  OrderID: { type: String },
  CustomerID: { type: String },
  EmployeeID: { type: Schema.Types.ObjectId, ref: 'Employees' },
  OrderDate: { type: Date },
  RequiredDate: { type: Date },
  ShippedDate: { type: Date },
  Freight: { type: Number },
  ShipName: { type: String },
  ShipAddress: { type: String },
  ShipCity: { type: String },
  ShipRegion: { type: String },
  ShipPostalCode: { type: String },
  ShipCountry: { type: String }
});

const orderDetailsSchema: Schema = new Schema({
  OrderID: { type: Number },
  ProductID: { type: Schema.Types.ObjectId, ref: 'Products' },
  UnitPrice: { type: Number },
  Quantity: { type: Number },
  Discount: { type: Number }
});

const OrderModel: Model<IOrderDocument> = model<IOrderDocument>('Orders', orderSchema, 'Orders');
const OrderDetailsModel: Model<IOrderDetails> = model<IOrderDetails>('OrderDetails', orderDetailsSchema, 'OrderDetails');
export { OrderModel, OrderDetailsModel };
