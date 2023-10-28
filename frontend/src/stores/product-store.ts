//Import tools
import { defineStore } from 'pinia';
import { api } from '../services/axios';
import { ref } from 'vue';
import { IProducts } from '../interface/IProducts';
import { useUserStore } from './user-store';
import { useUtilStore } from './util-store';

//Define store
export const useProductStore = defineStore('product', () => {
    const userStore = useUserStore();
    const utilStore = useUtilStore();

    const AllProducts = ref<IProducts[]>([]);
    const product = ref<IProducts | null>(null);

    //Define actions
    const createProduct = async (formData: FormData) => {
        try {
            await api.post('/product', formData, {
                headers: {
                    Authorization: `Bearer ${userStore.token}`
                }
            });

            utilStore.displayAlert('Producto creado correctamente', 'success');
        } catch (error) {
            utilStore.displayAlert('Error al subir el producto', 'error');
            console.log(error);
        }
    };

    const getProducts = async (showNumber: number) => {
        try {
            const res = await api.get('/product/all', {
                headers: {
                    Authorization: `Bearer ${userStore.token}`
                }
            });

            if (showNumber <= 0) {
                AllProducts.value = res.data.products;
                return;
            }

            AllProducts.value = res.data.products.slice(-showNumber);
        } catch (error) {
            console.log(error);
        }
    };

    const getProduct = async (id: string) => {
        try {
            const res = await api.get(`/product/one/${id}`, {
                headers: {
                    Authorization: `Bearer ${userStore.token}`
                }
            });

            product.value = res.data.product;
        } catch (error) {
            console.log(error);
        }
    };

    const updateProduct = async (id: string, formData: FormData) => {
        try {
            await api.put(`/product/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${userStore.token}`
                }
            });

            utilStore.displayAlert('Producto actualizado correctamente', 'success');
        } catch (error) {
            utilStore.displayAlert('Error al actualizar el producto', 'error');
            console.log(error);
        }
    };

    const deleteProduct = async (id: string) => {
        try {
            await api.delete(`/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${userStore.token}`
                }
            });

            utilStore.displayAlert('Producto eliminado correctamente', 'success');
        } catch (error) {
            utilStore.displayAlert('Error al eliminar el producto', 'error');
            console.log(error);
        }
    };

    //Return
    return {
        AllProducts,
        product,
        createProduct,
        getProducts,
        getProduct,
        updateProduct,
        deleteProduct
    };
});
