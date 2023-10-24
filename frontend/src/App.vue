<script setup lang="ts">
//Import tools
import { RouterView } from 'vue-router';

//Import components
import HeaderComponent from './layout/HeaderComponent.vue';
</script>

<template>
    <HeaderComponent />
    <main>
        <RouterView />
    </main>
</template>

<style scoped>
main {
    width: 100%;
    box-sizing: border-box;
}

@media (min-width: 768px) {
    main {
        margin: 0 auto;
    }
}
</style>
