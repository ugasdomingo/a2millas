//Import tools
import { Schema, model, Document } from 'mongoose';

//Define Schema
const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

//Export model
export interface IProduct extends Document {
    name: string;
    category: string;
    description: string;
    price: number;
    imageUrl: string;
    crestedAt?: Date;
    updatedAt?: Date;
}

export const ProductModel = model<IProduct>('Product', productSchema);
