<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.position-relative.justify-content-center.align-items-center
      .col-lg-7.col-xxl-6.py-4.py-sm-5.banner-principal__info.ps-5
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .col-lg-12
          .banner-principal__descripcion
            p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        img(:src="globalData.imagenBannerPrincipal" style="width: 481px")
    .imagen_flotante_1: img(src="@/assets/curso/banner/img01.svg")
    .imagen_flotante_2: img(src="@/assets/curso/banner/img04.svg")
    .imagen_flotante_3: img(src="@/assets/curso/banner/img03.svg")
    .imagen_flotante_5.d-none.d-xl-block: img(src="@/assets/curso/banner/img07.svg")
    .imagen_flotante_6.d-none.d-xl-block: img(src="@/assets/curso/banner/img02.svg")
    .imagen_flotante_7: img(src="@/assets/curso/banner/img06.svg")
    .imagen_flotante_8: img(src="@/assets/curso/banner/img05.svg")
    .imagen_flotante_9: img(src="@/assets/curso/banner/img08.svg")


</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  padding-left: 80px  !important
  z-index: 3


.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    animation: scale 5s ease-in-out infinite alternate
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important


.imagen_flotante
  &_1
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 170px
    bottom: 120px
    left: 53%
  &_2
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 40px
    top: 150px
    left: 54%
  &_3
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 100px
    top: 350px
    left: 85%
  &_4
    animation: float1 4s ease-in-out infinite alternate
    position: absolute
    width: 90px
    bottom: 50%
    left: 30%
    z-index: 99
  &_5
    animation: float1 3.9s ease-in-out infinite alternate
    position: absolute
    width: 135px
    top: 10%
    left: 82%
    z-index: 99
  &_6
    animation: float1 2.7s ease-in-out infinite alternate
    position: absolute
    width: 200px
    top: 290px
    right: 280px
    z-index: 99
  &_7
    animation: float1 2.5s ease-in-out infinite alternate
    position: absolute
    width: 100px
    bottom: 85%
    right: 20%
    z-index: 99
  &_8


    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 30px
    bottom: 50%
    right: 8%
    z-index: 99
  &_9
    animation: float1 2.5s ease-in-out infinite alternate
    position: absolute
    width: 75px
    bottom: 70%
    right: 2%
    z-index: 99
@keyframes float1
  0%
    transform: translateY(20px)

  100%
    transform: translateY(0px)
@keyframes scale
  0%
    transform: scale(1)

  100%
    transform: scale(1)


@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
</style>
