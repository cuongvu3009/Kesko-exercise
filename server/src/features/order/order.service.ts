import { OrderDetailsModel, OrderModel } from './order.schema';

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

const getDetails = async (OrderID: any) => {
  try {
    const result = await OrderDetailsModel.aggregate([
      { $match: { OrderID } },
      {
        $lookup: {
          from: 'Products',
          localField: 'ProductID',
          foreignField: 'ProductID',
          as: 'ProductInfo'
        }
      }
    ]);
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default { getAll, getDetails };
