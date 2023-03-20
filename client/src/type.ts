export interface IOrderDocument extends Document {
  _id?: string;
  OrderID?: number;
  CustomerID?: string;
  EmployeeID?: number;
  OrderDate?: Date;
  RequiredDate?: Date;
  ShippedDate?: Date;
  Freight?: number;
  ShipName?: string;
  ShipAddress?: string;
  ShipCity?: string;
  ShipRegion?: string;
  ShipPostalCode?: string;
  ShipCountry?: string;
  CustomerInfo?: ICustomerDocument[];
  ordersData: any;
}

export interface IOrderDetails extends Document {
  OrderID?: number;
  ProductID?: number;
  UnitPrice?: number;
  Quantity?: number;
  Discount?: number;
  ProductInfo?: IProductDocument[];
}

export interface ICustomerDocument extends Document {
  CustomerID?: string;
  CompanyName?: string;
  ContactName?: string;
  ContactTile?: string;
  Address?: string;
  City?: string;
  Region?: string;
  PostalCode?: string;
  Country?: string;
  Phone?: string;
  Fax?: string;
}

export interface IProductDocument extends Document {
  ProductID?: number;
  SupplierID?: number;
  CategoryID: number;
  ProductName?: string;
  Phone?: string;
  QuantityPerUnit?: string;
  UnitPrice?: number;
  UnitsInStock?: number;
  UnitsOnOrder?: number;
  ReoderLevel?: number;
  Discountinued?: string;
}
