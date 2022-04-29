<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p Este componente formativo pretende brindar los conocimientos iniciales para realizar una adecuada comprensión sobre la caracterización de los distintos ataques informáticos que se pueden presentar contra la infraestructura tecnológica de una empresa. En el siguiente video se comprende, de manera genérica, las temáticas a tratar y la importancia de las mismas, aplicadas a cualquier sector en el que la tecnología está inmersa:

    figure.mb-5(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/img1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        <br><br>
        p Se busca entonces, con este componente lograr desarrollar competencias en clasificación de ataques informáticos, ingeniería social, como herramienta de persuasión, vulnerabilidades de la infraestructura tecnológica de una organización y códigos de ética aplicados. 
        <br><br><br>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
