import { Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  quantity: number;
  price: number;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

declare const Product: Model<IProduct>;
export default Product;