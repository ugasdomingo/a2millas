<script setup lang="ts">
import { PropType } from 'vue';
import { IProducts } from '@/interface/IProducts';

defineProps({
    products: {
        type: Array as PropType<IProducts[]>,
        required: true
    }
});
</script>

<template>
    <div class="products-list">
        <div class="products-list-item" v-for="product in products" :key="product.id">
            <img :src="product.image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
        </div>
    </div>
</template>

<style scoped lang="scss">
.products-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.products-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 300px;
    position: relative;
    background-color: var(--color-tertiary);
    padding: 1rem;

    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 2rem;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.7) 80%,
            rgba(255, 255, 255, 0) 100%
        );
    }
}
</style>
