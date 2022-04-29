<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span S
      h1 Síntesis
    p De acuerdo con las temáticas trabajadas en este componente formativo se pueden resaltar las diferentes vulnerabilidades a las cuales está expuesto un sistema de información y los usuarios que con este interactúan, también los efectos de los ataques informáticos en las víctimas y cómo se perpetúan aprovechando la ingenuidad del usuario, a través de la ingeniería social. El siguiente esquema presenta a modo visual la información aquí desarrollada:

    .row.justify-content-center.mt-5
      .col-lg-8.mb-5
        figure
          img(src="@/assets/curso/sintesis.png", alt="alt")
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.png')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
