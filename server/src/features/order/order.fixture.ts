import { OrderModel } from './order.schema';

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
