//Import tools
import { body } from 'express-validator';
import { errorAuthValidation } from './errorAuthValidation';

export const dataAuthValidation = [
    body('email', 'El email es obligatorio').trim().isEmail().normalizeEmail(),
    body('password', 'La contraseña es obligatoria')
        .trim()
        .isLength({ min: 6 }),
    errorAuthValidation,
];
