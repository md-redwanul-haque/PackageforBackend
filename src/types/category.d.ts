import { Document, Model } from 'mongoose';

export interface ICategory extends Document {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

declare const Category: Model<ICategory>;
export default Category;s