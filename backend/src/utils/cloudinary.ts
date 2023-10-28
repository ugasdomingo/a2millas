import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME as string,
    api_key: process.env.CLOUD_API_KEY as string,
    api_secret: process.env.CLOUD_API_SECRET as string,
    secure: true,
});

export async function deleteImage(imageUrl: string) {
    return await cloudinary.uploader.destroy(imageUrl);
}
