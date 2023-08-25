<script setup lang="ts"></script>

<template>
    <section class="provider-carousel">
        <div class="carousel-container">
            <div class="carousel">
                <div class="carousel-item">
                    <img src="public/img/logo1.webp" alt="tractor" />
                </div>
                <div class="carousel-item">
                    <img src="public/img/logo2.webp" alt="tractor" />
                </div>
                <div class="carousel-item">
                    <img src="public/img/logo3.webp" alt="tractor" />
                </div>
                <div class="carousel-item">
                    <img src="public/img/logo4.webp" alt="tractor" />
                </div>
                <div class="carousel-item">
                    <img src="public/img/logo5.webp" alt="tractor" />
                </div>
                <div class="carousel-item">
                    <img src="public/img/logo6.webp" alt="tractor" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.provider-carousel {
    padding: 2rem 0;
    text-align: center;
    color: var(--color-primary);
    background: linear-gradient(
        0deg,
        rgba(255, 255, 0, 0.7) 0%,
        rgba(255, 255, 0, 0.8) 60%,
        rgba(255, 255, 0, 1) 100%
    );
}

.carousel-container {
    width: 100%;
    margin: 0;
}

.carousel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    scrollbar-width: none;
    padding: 1rem 0;
    margin: 0 auto;

    .carousel-item {
        flex: 0 0 auto;
        width: 180px;
        height: 100px;
        margin: 0 1rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}

//animacion
</style>
