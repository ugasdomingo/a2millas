//Import tools
import jwt from 'jsonwebtoken';
import { UserModel, IUser } from '../models/UserModel';

interface JwtPayload {
    uid: string;
}

export const adminAuth = async (req: any, res: any, next: any) => {
    try {
        //Get token
        const token = req.header.authorization.split(' ')[1];

        //Verify token
        if (!token) {
            return res.status(401).json({
                msg: 'Debes hacer login para ver este contenido',
            });
        }

        const { uid } = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as JwtPayload;

        //Get user
        const user: IUser | null = await UserModel.findById(uid);

        if (!user) {
            return res.status(401).json({
                msg: 'Token not valid',
            });
        }

        if (user.role !== 'Admin') {
            return res.status(401).json({
                msg: 'No tienes permisos para ver este contenido',
            });
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Error verifying token',
        });
    }
};
