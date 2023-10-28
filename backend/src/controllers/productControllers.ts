//Import tools
import { Request, Response } from 'express';
import { ProductModel, IProduct } from '../models/ProductModel';
import { deleteImage } from '../utils/cloudinary';

// Create product
export const createProduct = async (req: Request, res: Response) => {
    const { name, category, description, price, imageUrl } = req.body;

    try {
        const product: IProduct = new ProductModel({
            name,
            category,
            description,
            price,
            imageUrl,
        });

        await product.save();

        return res.status(201).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al crear el producto',
        });
    }
};

// Get products
export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductModel.find();

        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al obtener los productos',
        });
    }
};

// Get product by id
export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const product = await ProductModel.findById(id);

        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al obtener el producto',
        });
    }
};

// Update product
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, category, description, price, imageUrl } = req.body;

    try {
        const product = await ProductModel.findByIdAndUpdate(
            id,
            {
                name,
                category,
                description,
                price,
                imageUrl,
            },
            { new: true }
        );

        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al actualizar el producto',
        });
    }
};

// Delete product
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const product = await ProductModel.findByIdAndDelete(id);

        if (product?.imageUrl) {
            await deleteImage(product.imageUrl);
        }

        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al eliminar el producto',
        });
    }
};
