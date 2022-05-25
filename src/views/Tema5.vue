<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Códigos de ética
    p La ética informática es una disciplina que ha estado tomando fuerza en los años presentes, este aspecto involucra tres ejes fundamentales que son: las personas, la tecnología y los procesos.
    .row.justify-content-center.mt-4(data-aos="zoom-in-left")

      .col-lg-8
        .titulo-sexto.color1
          h5 Figura 8
          span.it Ética informática
        img(src='@/assets/curso/tema5/img1.svg', alt='Texto que describa la imagen')
    p.mt-5 La regulación de los aspectos éticos del profesional responsable de los sistemas de información debe generar un alto compromiso con la manipulación y despliegue de la infraestructura tecnológica; el no cumplir con estos lineamientos incurre en delitos sancionables por la Ley 1273 de 2009 en los que puede llegar a tener también problemas legales y suspensión de su tarjeta profesional.
    p A continuación, se nombran algunos que están estrechamente relacionados con estos aspectos y se denominan, en el campo de los sistemas, los mandamientos de la ética informática:
    .row.bg8.justify-content-center(data-aos="zoom-in-left")
      .col-lg-10.bgtext.mt-5.mb-4
        h4.text-center.text-white.mb-4.mt-4 Mandamientos de la ética informática
        .row.mt-5
          .col-lg-6
            img(src='@/assets/curso/tema5/1.svg', alt='Texto que describa la imagen')

          .col-lg-6
            img(src='@/assets/curso/tema5/2.svg', alt='Texto que describa la imagen')
        .row.mt-5
          .col-lg-6
            img(src='@/assets/curso/tema5/3.svg', alt='Texto que describa la imagen')

          .col-lg-6
            img(src='@/assets/curso/tema5/4.svg', alt='Texto que describa la imagen')
        .row.mt-5
          .col-lg-6
            img(src='@/assets/curso/tema5/5.svg', alt='Texto que describa la imagen')

          .col-lg-6
            img(src='@/assets/curso/tema5/6.svg', alt='Texto que describa la imagen')
        .row.mt-5
          .col-lg-6
            img(src='@/assets/curso/tema5/7.svg', alt='Texto que describa la imagen')

          .col-lg-6
            img(src='@/assets/curso/tema5/8.svg', alt='Texto que describa la imagen')
        .row.mt-5
          .col-lg-6
            img(src='@/assets/curso/tema5/9.svg', alt='Texto que describa la imagen')

          .col-lg-6
            img(src='@/assets/curso/tema5/10.svg', alt='Texto que describa la imagen')
    p.mt-5 El artículo “Ética Informática en la Sociedad de la Información”, escrito por Silva & Espina (2011), destaca esta labor de la ética informática en la sociedad actual donde el establecimiento de reglas y normas para el uso de la información es indispensable, teniendo en cuenta, aún más, el hecho de que diariamente se está usando y algunas prácticas en la sociedad depende de ella. 
    p Los códigos de ética, entonces, permiten crear una cultura de buen uso y cuidado de la información en las organizaciones y personas en particular; pues no es un secreto que muchas personas utilizan los sistemas de información para cometer delitos y fraudes, los cuales pueden tener severas sanciones y repercusiones en la vida de las personas, como se ha mencionado.
    .row.p-3.bgfa(data-aos="zoom-in-left")
      .col-sm-1
        img.mt-4(src='@/assets/curso/tema1/ico1.svg', alt='Texto que describa la imagen')
      .col-sm-11
        h5.mb-0.mt-4 Para recordar
        p En esta última temática se ha abordado la importancia de la ética profesional de las personas encargadas de velar por el correcto uso de la información, no obstante es importante aclarar que también es responsabilidad del usuario el manejo de la información y los sistemas que estos utilizan.


</template>

<script>
export default {
  name: 'Tema5',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
