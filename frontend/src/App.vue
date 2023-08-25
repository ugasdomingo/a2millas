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
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
