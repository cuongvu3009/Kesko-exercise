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
  // _id: '64161bb3ae82a79dfbfd9c2d',
  Discount: 0,
  OrderID: 12345,
  ProductID: 11,
  Quantity: 12,
  UnitPrice: 14
});
