<script setup lang="ts"></script>

<template>
    <section class="about-container">
        <h2>Entregas en todo Perú</h2>
        <div class="about-content">
            <section class="left-content">
                <img src="../../public/img/tractorDiseno.webp" alt="about-tractor" />
                <h4>¡Calidad Europea!</h4>
            </section>
            <section class="right-content">
                <p>
                    Adquiere la mejor maquinaria europea especializada en operaciones agricolas.
                    Solicita una asesoría o una cotización para que obtengas los mejores beneficios
                    de tu inversión.
                </p>
                <a href="tel:">
                    <img src="../../public/phone-icon.svg" alt="phon-icon" class="icon" />
                    +51 912 213 456
                </a>
            </section>
        </div>
    </section>
</template>

<style scoped lang="scss">
.about-container {
    padding: 2rem 0;
    text-align: center;
    color: var(--color-primary);

    h2 {
        margin-bottom: 2rem;
    }
}

.about-content {
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    position: relative;

    .left-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 100%;
            max-width: 300px;
            border-radius: 2rem;
        }

        h4 {
            font-weight: 700;
            margin: 1rem 0;
        }
    }

    .right-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        padding: 0 4rem;

        p {
            margin: 0 0 1.5rem;
            font-size: 1.25rem;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 50%;
            font-weight: 700;
            text-decoration: none;
            margin-bottom: 1rem;
            padding: 0.5rem 2rem;
            border-radius: 2rem;
            color: var(--color-white);
            background: var(--color-primary);
        }
    }
}
.icon {
    width: 1.5rem;
    margin-right: 0.5rem;
}
</style>
