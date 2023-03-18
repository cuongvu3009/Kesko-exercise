import mongoose from 'mongoose';
import { config } from '@root/config';
import Logger from 'bunyan';

//  Models import
import { CategoriesModel } from '@category/category.schema';
import { CustomerModel } from '@customer/customer.schema';
import { EmployeeModel } from '@root/features/employee/employee.schema';
import { OrderDetailsModel } from '@root/features/order/order.schema';
import { OrderModel } from '@root/features/order/order.schema';
import { ProductModel } from '@root/features/product/product.schema';
import { RegionModel } from '@root/features/territory/territory.schema';
import { ShipperModel } from '@root/features/shipper/shipper.schema';
import { SupplierModel } from '@root/features/supplier/supplier.schema';
import { TerritoryModel } from '@root/features/territory/territory.schema';
import { EmployeeTerritoryModel } from '@root/features/employee/employee.schema';

//  Data import
import Categories from './data/documents/Categories.json';
import Customers from './data/documents/Customers.json';
import Employees from './data/documents/Employees.json';
import OrderDetails from './data/documents/Order Details.json';
import Orders from './data/documents/Orders.json';
import Products from './data/documents/Products.json';
import Regions from './data/documents/Regions.json';
import Shippers from './data/documents/Shippers.json';
import Suppliers from './data/documents/Suppliers.json';
import Territories from './data/documents/Territories.json';
import EmployeeTerritories from './data/documents/EmployeeTerritories.json';

const log: Logger = config.createLogger('populate');

const populate = async () => {
  try {
    mongoose
      .connect(config.DATABASE_URL)
      .then(async () => {
        await CategoriesModel.deleteMany();
        await CategoriesModel.create(Categories);

        await CustomerModel.deleteMany();
        await CustomerModel.create(Customers);

        await ShipperModel.deleteMany();
        await ShipperModel.create(Shippers);

        await SupplierModel.deleteMany();
        await SupplierModel.create(Suppliers);

        await RegionModel.deleteMany();
        await RegionModel.create(Regions);

        await TerritoryModel.deleteMany();
        await TerritoryModel.create(Territories);

        await EmployeeTerritoryModel.deleteMany();
        await EmployeeTerritoryModel.create(EmployeeTerritories);

        await EmployeeModel.deleteMany();
        await EmployeeModel.create(Employees);

        await ProductModel.deleteMany();
        await ProductModel.create(Products);

        await OrderModel.deleteMany();
        await OrderModel.create(Orders);

        await OrderDetailsModel.deleteMany();
        await OrderDetailsModel.create(OrderDetails);

        log.info('populated successfully');
        process.exit(0);
      })
      .catch((err) => {
        log.error(err);
        return process.exit(1);
      });
  } catch (error: unknown) {
    log.error(error);
    process.exit(1);
  }
};

populate();
