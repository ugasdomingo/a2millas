//Import tools
import { validationResult } from 'express-validator';

export const errorAuthValidation = (req: any, res: any, next: any) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        });
    }

    next();
};
