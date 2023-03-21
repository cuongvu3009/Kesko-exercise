import { OrderModel } from './order.schema';

const getAll = async () => {
  try {
    const result = await OrderModel.aggregate([
      {
        $lookup: {
          from: 'Customers',
          localField: 'CustomerID',
          foreignField: 'CustomerID',
          as: 'CustomerInfo'
        }
      }
    ]);
    return result;
  } catch (e: any) {
    throw new Error(e);
  }
};

export default { getAll };
