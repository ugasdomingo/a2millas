<template>
    <main>
        <h1>A2 MILLAS S.A.C. - Transformando la Agricultura en Perú</h1>
        <p>
            Bienvenidos a A2 MILLAS S.A.C., su socio de confianza en la importación de maquinaria
            agrícola desde España para el floreciente sector agrícola de Perú. Fundada en [año de
            fundación] con el RUC 20611062924, nuestra empresa se ha consolidado como un actor
            destacado en el suministro de equipos de alta calidad, tecnológicamente avanzados y
            eficientes para agricultores peruanos.
        </p>
        <br />
        <h3>Nuestra Historia</h3>
        <p>
            Desde nuestros humildes comienzos, hemos recorrido un largo camino en la industria de la
            maquinaria agrícola. A2 MILLAS S.A.C. fue fundada con la visión de mejorar la
            productividad y la sostenibilidad en la agricultura peruana al proporcionar acceso a
            maquinaria de vanguardia. A lo largo de los años, hemos cultivado relaciones sólidas con
            fabricantes en España, estableciendo una cadena de suministro eficiente que nos permite
            ofrecer productos de calidad a precios competitivos.
        </p>
        <br />
        <h3>Nuestros Misión</h3>
        <p>
            En A2 MILLAS S.A.C., nuestra misión es ser el socio de elección para los agricultores
            peruanos, brindando soluciones de maquinaria agrícola de alta calidad y contribuyendo al
            desarrollo sostenible del sector. Nos esforzamos por impulsar la innovación y la
            eficiencia en la agricultura, apoyando a nuestros clientes en su búsqueda de cosechas
            abundantes y rentables.
        </p>
        <br />
        <h3>Nuestros Visión</h3>
        <p>
            Nos vemos como líderes en el mercado peruano de maquinaria agrícola, impulsando la
            modernización de la agricultura y fomentando la adopción de prácticas sostenibles.
            Aspiramos a ser un catalizador del crecimiento agrícola en Perú, conectando a los
            agricultores con tecnologías de vanguardia y soluciones que optimicen sus operaciones.
        </p>
        <br />
        <h3>Nuestros Valores</h3>
        <ul>
            <li>
                <strong>Calidad:</strong>Nos comprometemos a ofrecer maquinaria de primera calidad
                que cumpla con los estándares más exigentes.
            </li>
            <li>
                <strong>Integridad:</strong>Operamos con honestidad, transparencia y ética en todas
                nuestras relaciones comerciales.
            </li>
            <li>
                <strong>Innovación:</strong>Estamos constantemente buscando las últimas innovaciones
                para mejorar la productividad agrícola.
            </li>
            <li>
                <strong>Servicio al Cliente:</strong>Nuestro compromiso es brindar un servicio
                excepcional y apoyo continuo a nuestros clientes.
            </li>
            <li>
                <strong>Sostenibilidad:</strong>Promovemos prácticas agrícolas respetuosas con el
                medio ambiente y la comunidad.
            </li>
        </ul>
        <br />
        <h3>Nuestros Productos</h3>
        <p>
            En A2 MILLAS S.A.C., ofrecemos una amplia gama de maquinaria agrícola que incluye
            tractores, cosechadoras, implementos agrícolas y equipos de riego, todos seleccionados
            cuidadosamente para adaptarse a las necesidades específicas de los agricultores
            peruanos. Nuestra asociación con destacados fabricantes españoles garantiza productos de
            calidad y durabilidad.
        </p>
        <p>
            En resumen, en A2 MILLAS S.A.C., nos enorgullece ser su socio en la transformación de la
            agricultura en Perú. Trabajamos incansablemente para brindar soluciones que permitan a
            los agricultores prosperar y contribuir al crecimiento sostenible de este vital sector.
            Juntos, estamos sembrando el futuro de la agricultura peruana.
        </p>
        <RouterLink to="/products"
            >¡Descubra cómo podemos ayudar a su negocio a alcanzar nuevos horizontes en la
            agricultura!</RouterLink
        >
    </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
main {
    padding: 6rem 4rem;
    margin: 0 auto;

    h1 {
        font-size: 3rem;
        margin-bottom: 2rem;
    }
}

@media screen and (max-width: 768px) {
    main {
        padding: 6rem 2rem;
        h1 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.25rem;
        }
    }
}
</style>
