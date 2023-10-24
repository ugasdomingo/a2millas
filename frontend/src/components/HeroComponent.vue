<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <section class="hero-container">
        <!-- Hero Background Image -->
        <img src="../../public/img/hero.webp" alt="hero-image" class="hero-img-big" />

        <!-- Hero text -->
        <h1>Maquinaria<br />Agroindustrial</h1>
        <RouterLink to="/products">Catálogo de productos</RouterLink>

        <!-- Hero animation Image -->
        <img
            src="https://res.cloudinary.com/minteados/image/upload/v1698176937/a2milla/tractor1_e3elcd.webp"
            alt="truck1"
            class="truck-one"
        />
        <img
            src="https://res.cloudinary.com/minteados/image/upload/v1698176937/a2milla/tractor2_dxb55m.webp"
            alt="truck2"
            class="truck-two"
        />
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
        rgba(7, 58, 89, 1) 0%,
        rgba(7, 58, 89, 0.5) 60%,
        rgba(7, 58, 89, 0.2) 100%
    );
    color: var(--color-tertiary);
    overflow: hidden;

    h1 {
        font-size: 6rem;
        text-align: center;
        margin: 0 0 3rem;
    }

    a {
        padding: 1rem 2rem;
        border-radius: 2rem;
        background: var(--color-tertiary);
        color: var(--color-primary);
        font-weight: 700;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
            background: var(--color-primary);
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

@media (max-width: 768px) {
    .hero-container {
        box-sizing: border-box;
        max-height: 100vh;
        h1 {
            font-size: 3rem;
        }
    }

    .truck-one {
        max-width: 150px;
        left: 0.2rem;
    }

    .truck-two {
        max-width: 250px;
        right: -0.2rem;
    }

    @keyframes truck-one {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0%);
        }
    }

    @keyframes truck-two {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0%);
        }
    }
}
</style>
