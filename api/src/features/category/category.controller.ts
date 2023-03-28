import { Response, Request, NextFunction } from 'express';
import { CategoriesModel } from './category.schema';

const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await CategoriesModel.find({});
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export { getCategories };
