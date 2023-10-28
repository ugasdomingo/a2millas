//Import tools
import jwt from 'jsonwebtoken';

//Generate token
export const generateToken = (uid: string) => {
    const expiresIn = '1h';

    try {
        const token = jwt.sign({ uid }, process.env.JWT_SECRET as string, {
            expiresIn,
        });
        return { token, expiresIn };
    } catch (error) {
        console.log(error);
    }
};

//Generate refresh token
export const generateRefreshToken = (uid: string) => {
    const expiresIn = '30d';

    try {
        const refreshToken = jwt.sign(
            { uid },
            process.env.JWT_REFRESH as string,
            {
                expiresIn,
            }
        );
        return { refreshToken, expiresIn };
    } catch (error) {
        console.log(error);
    }
};
