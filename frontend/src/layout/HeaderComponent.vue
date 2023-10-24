<script setup lang="ts">
//Import tools
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

//Import components
import NavbarComponent from './NavbarComponent.vue';

//Variables
const backgroundWhite = ref(false);
const showMenu = ref(false);

//Functions
const openMenu = () => {
    showMenu.value = !showMenu.value;
};
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
</script>

<template>
    <header class="header" :class="{ 'background-white': backgroundWhite }">
        <RouterLink to="/">
            <img class="logo" src="../assets/logo.png" alt="logo" />
        </RouterLink>
        <div class="normal-menu">
            <NavbarComponent :style="'normal'" />
        </div>
        <div class="hamburguer-menu">
            <img src="../assets/menu-icon.svg" alt="hamburguer-menu" @click="openMenu" />

            <NavbarComponent :style="'responsive'" class="menu-responsive" v-if="showMenu" />
        </div>
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
    box-sizing: border-box;

    .hamburguer-menu {
        display: none;
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
    padding: 0;

    .logo {
        filter: drop-shadow(0 0 2rem #646cffaa);
        padding: 0;
        margin: 0;
    }
}

@media (max-width: 768px) {
    .header {
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        padding: 0.5rem 1rem;

        .hamburguer-menu {
            display: block;
            position: relative;

            img {
                height: 3rem;
            }

            .menu-responsive {
                position: absolute;
                top: 100%;
                width: 250px;
                height: fit-content;
                border-radius: 0.5rem;
            }
        }

        .normal-menu {
            display: none;
        }
    }
}
</style>
