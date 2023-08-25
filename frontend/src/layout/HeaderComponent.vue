<script setup lang="ts">
//Import tools
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

//Variables
const backgroundWhite = ref(false);

//Functions
const changeBackground = () => {
    if (window.scrollY > 10) {
        backgroundWhite.value = true;
    } else {
        backgroundWhite.value = false;
    }
};

//Hooks
onMounted(() => {
    window.addEventListener('scroll', changeBackground);
});

onUnmounted(() => {
    window.removeEventListener('scroll', changeBackground);
});

const paths = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' }
];
</script>

<template>
    <header class="header" :class="{ 'background-white': backgroundWhite }">
        <RouterLink to="/">
            <img class="logo" src="/logo.png" alt="logo" />
        </RouterLink>
        <nav>
            <ul>
                <li v-for="path in paths" :key="path.name">
                    <RouterLink :to="path.path">{{ path.name }}</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
.header {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    padding: 0.5rem;
    margin: 0 auto;
    position: fixed;
    top: 0;
    z-index: 20;

    nav {
        ul {
            display: flex;
            list-style: none;
            gap: 1rem;
            font-size: 1.2rem;
            font-weight: 500;
            color: var(--color-primary);

            li {
                a {
                    text-decoration: none;
                    color: inherit;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    transition: background-color 300ms;

                    &:hover {
                        background-color: var(--color-primary);
                        color: var(--color-white);
                    }
                }
            }
        }
    }
}
.logo {
    height: 6rem;
    padding: 0.5rem;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2rem #646cffaa);
}
.background-white {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 0 1em var(--color-tertiary);
}
</style>
