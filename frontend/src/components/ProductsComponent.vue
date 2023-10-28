<script setup lang="ts">
//Import tools
import { productsInfo } from '../static/productsInfo';
import DisplayProductosComponent from '../common/DisplayProductosComponent.vue';
</script>

<template>
    <section class="products-container">
        <DisplayProductosComponent :products="productsInfo.slice(0, 6)" />
        <RouterLink to="/products">Ver más</RouterLink>
    </section>
</template>

<style scoped lang="scss">
.products-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 8rem 0;
    background-color: var(--color-gray);

    a {
        color: var(--color-tertiary);
        font-size: 1.5rem;
        font-weight: 700;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;

        &:hover {
            color: var(--color-white);
            background-color: var(--color-tertiary);
        }
    }
}
</style>
