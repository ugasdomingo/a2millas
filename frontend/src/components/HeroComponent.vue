<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="hero-container">
        <!-- Hero Background Image -->
        <img src="../../public/img/hero.webp" alt="hero-image" class="hero-img-big" />

        <!-- Hero text -->
        <h1>Maquinaria<br />Agroindustrial</h1>
        <RouterLink to="/products">Ver productos</RouterLink>

        <!-- Hero animation Image -->
        <img src="../../public/img/tractor1.webp" alt="truck1" class="truck-one" />
        <img src="../../public/img/tractor2.webp" alt="truck2" class="truck-two" />
    </section>
</template>

<style scoped lang="scss">
.hero-container {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 0, 0.7) 0%,
        rgba(255, 255, 0, 0.8) 60%,
        rgba(255, 255, 0, 1) 100%
    );
    color: var(--color-primary);
    overflow: hidden;

    h1 {
        font-size: 6rem;
        text-align: center;
        margin: 0 0 3rem;
    }

    a {
        padding: 1rem 2rem;
        border-radius: 2rem;
        background: var(--color-primary);
        color: var(--color-white);
        font-weight: 700;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
            background: var(--color-accent);
        }
    }
}

.hero-img-big {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
}

.truck-one {
    position: absolute;
    bottom: 2rem;
    left: 4rem;
    max-width: 300px;
    object-fit: cover;
    object-position: center;
    z-index: 1;
    animation: truck-one 3s linear;
}

.truck-two {
    position: absolute;
    bottom: 0;
    right: 2rem;
    max-width: 500px;
    object-fit: cover;
    object-position: center;
    z-index: 1;
    animation: truck-two 3s linear;
}

//animations
@keyframes truck-one {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(10%);
    }
}

@keyframes truck-two {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-10%);
    }
}
</style>
