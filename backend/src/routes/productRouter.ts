//Import tools
import { Router } from 'express';
import { adminAuth } from '../middlewares/adminAuth';
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from '../controllers/ProductControllers';

//Define router
const productRouter = Router();

//Routes
productRouter.post('/', adminAuth, createProduct);

productRouter.get('/all', getProducts);

productRouter.get('/one/:id', getProductById);

productRouter.put('/:id', adminAuth, updateProduct);

productRouter.delete('/:id', adminAuth, deleteProduct);

//Export router
export default productRouter;
