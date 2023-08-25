<script setup lang="ts">
//Import tools
import { productsInfo } from '@/static/productsInfo';
import DisplayProductosComponent from '@/common/DisplayProductosComponent.vue';
</script>

<template>
    <section class="products-container">
        <DisplayProductosComponent :products="productsInfo" />
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
}
</style>
