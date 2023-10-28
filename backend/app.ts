//Import Tools
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//Import Routes
import userRouter from './src/routes/userRouter';
import productRouter from './src/routes/productRouter';

//Define app
const app = express();

const allowedOrigins = [
    process.env.ORIGIN1 as string,
    process.env.ORIGIN2 as string,
    process.env.ORIGIN3 as string,
];

//Middleware
app.use(
    cors({
        origin: function (origin: any, callback: any) {
            if (allowedOrigins.includes(origin)) {
                return callback(null, origin);
            }
            return callback(
                'Error CORS, origin: ' + origin + ', No autorizado'
            );
        },
        credentials: true,
    })
);
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/v1', userRouter);
app.use('/api/v1/product', productRouter);

//Export app
export default app;
