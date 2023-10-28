//Import tools
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { UserModel, IUser } from '../models/UserModel';
import { generateToken, generateRefreshToken } from '../utils/tokenManager';

// Register --> Line 14
// Login --> Line 56
// Refresh --> Line 96
// oneUser --> Line 143
// allUsers --> Line 165

//Register
export const register = async (req: Request, res: Response) => {
    const { userName, email, password, role } = req.body;

    try {
        //Check if user exists and unique
        const userExist: IUser | null = await UserModel.findOne({ email });
        if (userExist) {
            return res.status(400).json({
                msg: 'El usuario ya existe',
            });
        }

        //Create user
        const user: IUser = new UserModel({
            userName,
            email,
            password,
            role,
        });

        await user.save();

        //Generate token and refresh token
        const refreshToken = generateRefreshToken(user._id);

        const response = {
            ...generateToken(user._id),
            refreshToken,
            role: user.role,
            userName: user.userName,
        };

        return res.status(201).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al crear el usuario',
        });
    }
};

//Login
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        //Check if user exists
        const user: IUser | null = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: 'El usuario no existe',
            });
        }

        //Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({
                msg: 'Credenciales incorrectas',
            });
        }

        //Generate token and refresh token
        const refreshToken = generateRefreshToken(user._id);

        const response = {
            ...generateToken(user._id),
            refreshToken,
            role: user.role,
            userName: user.userName,
        };

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al iniciar sesión',
        });
    }
};

//Refresh
export const refresh = async (req: Request, res: Response) => {
    interface JwtPayload {
        uid: string;
    }

    try {
        let refreshToken = req.headers.authorization;
        refreshToken = refreshToken?.split(' ')[1];

        if (!refreshToken) {
            return res.status(400).json({
                msg: 'Debes hacer login para ver esta página',
            });
        }

        const { uid } = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH as string
        ) as JwtPayload;

        const user: IUser | null = await UserModel.findById(uid);

        if (!user) {
            return res.status(400).json({
                msg: 'El usuario no existe',
            });
        }

        const newRefreshToken = generateRefreshToken(user._id);

        const response = {
            ...generateToken(user._id),
            refreshToken: newRefreshToken,
            role: user.role,
            userName: user.userName,
        };

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al refrescar el token',
        });
    }
};

//allUsers
export const allUsers = async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await UserModel.find();

        return res.status(200).json(users);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Error al obtener los usuarios',
        });
    }
};
