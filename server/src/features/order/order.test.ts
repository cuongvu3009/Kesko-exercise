import { OrderModel } from './order.schema';
import { order1, order2 } from './order.fixture';
import connect, { MongodHelper } from '../../shared/db-helper';
import { orderService } from './order.service';

let mongodHelper: MongodHelper;

beforeAll(async () => {
  mongodHelper = await connect();
});

beforeEach(async () => {
  await OrderModel.insertMany([order1, order2]);
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
  });
});
