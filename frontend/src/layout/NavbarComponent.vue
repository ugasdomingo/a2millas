<script setup lang="ts">
//Get props style required
defineProps({
    style: {
        type: String,
        required: true
    }
});

const paths = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' }
];
</script>

<template>
    <nav :class="style == 'normal' ? 'normal-menu' : 'responsive-menu'">
        <ul>
            <li v-for="path in paths" :key="path.name">
                <RouterLink :to="path.path">{{ path.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped lang="scss">
.normal-menu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;

    ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;

        li {
            list-style: none;
            font-size: 1.5rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
            color: var(--color-tertiary);
            transition: all 0.3s ease-in-out;

            &:hover {
                color: var(--color-primary);
            }
        }
    }
}

.responsive-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    transform: translateX(-100%);
    transition: all 0.3s ease-in-out;

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 1rem 0;
        box-sizing: border-box;

        li {
            list-style: none;
            font-size: 1.25rem;
            transition: all 0.3s ease-in-out;
        }

        a {
            color: var(--color-tertiary);
        }
    }
}
</style>
