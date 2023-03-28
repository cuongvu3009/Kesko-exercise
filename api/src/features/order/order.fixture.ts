import { ProductModel } from '../product/product.schema';
import { OrderDetailsModel, OrderModel } from './order.schema';

export const order1 = new OrderModel({
  OrderID: 10248,
  CustomerID: 'VINET',
  ShipAddress: 'Kannelmaki 15',
  ShipCity: 'Helsinki',
  ShipRegion: 'Uusimaa',
  ShipPostalCode: '00940',
  ShipCountry: 'Finland',
  CustomerInfo: [
    {
      ContactName: 'Test Customer'
    }
  ]
});

export const order2 = new OrderModel({
  OrderID: 10249,
  CustomerID: 'TOMSP',
  ShipAddress: 'Spellinintie 15',
  ShipCity: 'Helsinki',
  ShipRegion: 'Uusimaa',
  ShipPostalCode: '00940',
  ShipCountry: 'Finland',
  CustomerInfo: [
    {
      ContactName: 'Test Customer 2'
    }
  ]
});

export const orderDetails1 = new OrderDetailsModel({
  Discount: 0,
  OrderID: 12345,
  ProductID: 11,
  Quantity: 12,
  UnitPrice: 14
});

export const product1 = new ProductModel({
  Discount: 0.2,
  OrderID: 10000,
  ProductID: 99,
  Quantity: 45,
  UnitPrice: 14.4,
  Products: [
    {
      CategoryID: 1,
      Discontinued: '0',
      ProductID: 99,
      ProductName: 'Product Test',
      QuantityPerUnit: '10 boxes x 20 bags',
      ReorderLevel: 10,
      SupplierID: 1,
      UnitPrice: 18,
      UnitsInStock: 39,
      UnitsOnOrder: 0
    }
  ]
});
