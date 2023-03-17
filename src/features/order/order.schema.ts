import mongoose, { model, Model, Schema } from 'mongoose';
import { IOrderDocument, IOrderDetails } from './order.interface';

const orderSchema: Schema = new Schema({
  OrderID: { type: String },
  CustomerID: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', index: true },
  EmployeeID: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', index: true },
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
  OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', index: true },
  ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', index: true },
  UnitPrice: { type: Number },
  Quantity: { type: Number },
  Discount: { type: Number }
});

const OrderModel: Model<IOrderDocument> = model<IOrderDocument>('Order', orderSchema, 'Order');
const OrderDetailsModel: Model<IOrderDetails> = model<IOrderDetails>('OrderDetails', orderDetailsSchema, 'OrderDetails');
export { OrderModel, OrderDetailsModel };
