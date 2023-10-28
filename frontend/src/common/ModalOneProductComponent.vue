<script setup lang="ts">
//Import tools
import { useUtilStore } from '../stores/util-store';
import { onBeforeMount, onUnmounted, ref } from 'vue';
import { productsInfo } from '../static/productsInfo';

//Activate tools
const utilStore = useUtilStore();
const product = ref();
const showImage = ref(0);
const totalImages = ref(0);

//Next and prev image
const nextImage = () => {
    if (showImage.value < totalImages.value - 1) {
        showImage.value++;
    } else {
        showImage.value = 0;
    }
};

const prevImage = () => {
    if (showImage.value > 0) {
        showImage.value--;
    } else {
        showImage.value = totalImages.value - 1;
    }
};
//Get producto to show onMuont
onBeforeMount(() => {
    product.value = productsInfo.find((product) => product.id === utilStore.showModal);
    totalImages.value = product.value.image.length;

    //Close modal on click outside
    window.addEventListener('click', (e) => {
        if (e.target === document.querySelector('.modal')) {
            closeModal();
        }
    });
});

//onUnmounted
onUnmounted(() => {
    window.removeEventListener('click', (e) => {
        if (e.target === document.querySelector('.modal')) {
            closeModal();
        }
    });
});

//Close modal
const closeModal = () => {
    utilStore.showModal = 0;
};
</script>

<template>
    <div class="modal">
        <div class="modal-content">
            <div class="modal-content-header">
                <h3>{{ product.name }}</h3>
                <a href="tel:+51912213456">
                    <img src="../../public/phone-icon.svg" alt="phon-icon" class="icon" />
                    Contactar
                </a>
                <button @click="closeModal">X</button>
            </div>
            <div class="modal-content-body">
                <!-- Display galley -->
                <div class="gallery">
                    <button @click="prevImage">Prev</button>
                    <img :src="product.image[showImage]" :alt="product.name" />
                    <button @click="nextImage">Next</button>
                </div>
                <p>{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    box-sizing: border-box;

    .modal-content {
        width: 80%;
        height: 80%;
        background-color: var(--color-white);
        border-radius: 0.5rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        box-sizing: border-box;

        .modal-content-header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3 {
                font-weight: 500;
                margin: 0;
            }

            a {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                text-decoration: none;
                color: var(--color-white);
                background-color: var(--color-tertiary);
                padding: 0.5rem 1rem;
                border-radius: 1.5rem;
            }

            button {
                background-color: transparent;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
            }
        }

        .modal-content-body {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            .gallery {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;

                button {
                    background-color: var(--color-primary);
                    color: var(--color-white);
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    cursor: pointer;
                }

                img {
                    width: 350px;
                    height: 350px;
                    object-fit: contain;
                    border-radius: 0.5rem;
                }
            }
        }
    }
}
.icon {
    width: 1.5rem;
    margin-right: 0.5rem;
}

@media screen and (max-width: 768px) {
    .modal {
        .modal-content {
            width: 90%;
            height: 90%;
        }

        .modal-content-header {
            h3 {
                font-size: 1rem;
            }

            a {
                display: none;
            }
        }

        .modal-content-body .gallery {
            img {
                width: 100px;
                height: 100px;
            }
        }
    }
}
</style>
