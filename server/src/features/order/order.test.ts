import { OrderDetailsModel, OrderModel } from './order.schema';
import { order1, order2, orderDetails1, product1 } from './order.fixture';
import connect, { MongodHelper } from '../../shared/db-helper';
import { orderService } from './order.service';

let mongodHelper: MongodHelper;

beforeAll(async () => {
  mongodHelper = await connect();
});

beforeEach(async () => {
  await OrderModel.insertMany([order1, order2]);
  await OrderDetailsModel.insertMany([orderDetails1]);
  await OrderDetailsModel.insertMany([product1]);
});

afterEach(async () => {
  await mongodHelper.clearDatabase();
});

afterAll(async () => {
  await mongodHelper.closeDatabase();
});

describe('Test orderService', () => {
  test('Get all orders', async () => {
    const orders = await orderService.getAll();

    expect(orders?.length).toBe(2);
    expect(orders[0]['CustomerID']).toBe('VINET');
    expect(orders[1]['CustomerID']).toBe('TOMSP');
  });

  test('Get orderDetails', async () => {
    const orders = await orderService.getDetails(12345);

    expect(orders?.length).toBe(1);
    expect(orders[0]['OrderID']).toBe(12345);
    expect(orders[0]['Quantity']).toBe(12);
    expect(orders[0]['UnitPrice']).toBe(14);
  });

  test('Get order by productId', async () => {
    const products = await orderService.getOrderByProductId(99);

    expect(products?.length).toBe(1);
    expect(products[0]['ProductID']).toBe(99);
  });
});
