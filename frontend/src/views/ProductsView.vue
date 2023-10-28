<script setup lang="ts">
//Import tools
import { productsInfo } from '../static/productsInfo';
import DisplayProductosComponent from '../common/DisplayProductosComponent.vue';
</script>

<template>
    <main class="products-container">
        <DisplayProductosComponent :products="productsInfo" />
    </main>
</template>

<style scoped lang="scss">
.products-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    min-height: 100vh;
    padding: 6rem 0 0;
    background-color: var(--color-gray);
    box-sizing: border-box;
}
</style>
