//Import Tools
import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

//Define Schema
const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        politiquesAccepted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

//Schema methods
userSchema.pre<IUser>('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        next();
    } catch (error) {
        console.log(error);
        throw new Error('Falló hash de contraseña');
    }
});

userSchema.methods.comparePassword = async function (
    password: string
): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

//Export model
export interface IUser extends Document {
    userName: string;
    email: string;
    password: string;
    role: string;
    politiquesAccepted: boolean;
    createdAt: Date;
    updatedAt: Date;
    comparePassword: (password: string) => Promise<boolean>;
}

export const UserModel = model<IUser>('User', userSchema);
