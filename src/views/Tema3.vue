<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 La ingeniería social 
    p La ingeniería social se ha vuelto una práctica común dentro de los ámbitos informáticos. Aunque se piensa que es una práctica nueva, en realidad se remonta a muchos años atrás. Este concepto nace en 1894 en un artículo escrito por el empresario holandés Jacob Cornelis Van Marken y con el pasar del tiempo, penetraría otras áreas hasta llegar a la informática. Esta técnica consiste en ganarse la confianza de la víctima e ir persuadiendo hasta lograr el objetivo de dar información y así poder realizar un ataque informático posteriormente.
    img.mb-4(src='@/assets/curso/tema3/img1.svg', alt='Texto que describa la imagen')
    .row.bg5 
      p.mt-5 La ingeniería social requiere de mucho estudio y análisis del usuario, conocer sus puntos débiles y rutinas. Comprende realizar un seguimiento detallado y luego encontrar el momento adecuado, con las preguntas indicadas, para empezar a realizar un perfil de la posible víctima y luego proceder a realizar el ataque, teniendo en cuenta sus puntos débiles. Es importante destacar que para que esto suceda con un grado de efectividad amplio se deben tener en cuenta las siguientes consideraciones:
      .row.justify-content-center.mt-5
        .col-lg-1
        .col-lg-11.mt-5
          img.mb-5(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
    .row.bg6.mt-2(data-aos="zoom-in-left")
      p.text-center.mt-5 <strong>Ahora se explicará cada uno de los anteriores pasos.</strong>
      .row.mt-5
        .col-lg-8
          TabsA.color-acento-botones.mb-5

            .tarjeta.color-acento-botones--borde.p-4(titulo="1. Identificar a la víctima")
              h5 1. Identificar a la víctima
              p La identificación de la víctima es un proceso que constituye varios momentos; el primero es el contacto inicial que permite establecer la confianza y luego, empezar a generar algún tipo de vínculo que permita poder sacar información valiosa para luego usarla y cometer delitos.
              p En el ámbito académico, como en la mayoría de actividades que desarrollamos de forma cotidiana, debe existir el factor de la confianza esto permite un cierto grado de acercamiento entre las personas y por ende también genera aspectos de inseguridad en algunos sentidos, ya que se puede utilizar este factor para sustraer información de las víctimas y así luego utilizarla en su contra.
           
            .tarjeta.color-acento-botones--borde.p-4(titulo="2. Ganarse su confianza")
              h5 2. Ganarse su confianza
              p Este proceso implica una continuación del factor anteriormente mencionado puesto que realizando la identificación y monitoreo de la víctima se puede determinar qué necesidades este puede presentar y aprovecharlas para ofrecerle ayuda o un servicio. 

              p Por ejemplo, una víctima publica en redes sociales que necesita ayuda con su equipo, alguién se ofrece a ayudarle con malas intenciones, y esta persona puede instalar un  software malicioso para luego robar información o espiar a la víctima posteriormente; aunque parezca algo muy poco probable sucede con mucha frecuencia.
           
            .tarjeta.color-acento-botones--borde.p-4(titulo="3. Establecer patrones de rutinas")
              h5 3. Establecer patrones de rutinas
              p Este factor es una combinación de los anteriores pasos, pero de una manera específica, pues en este punto se en la fase de recopilación de información la cual podrá ser utilizada posteriormente para cometer el delito; aunque es importante tener en cuenta que en ocasiones la víctima solo es un eslabón más de la cadena para llegar a personas o datos de mayor rango.

              p Por ejemplo, un delincuente informático puede hacerle seguimiento a un niño y persuadirlo para que entregue información de las tarjetas de crédito o contraseñas de su padre, eso es aprovechar la vulnerabilidad escalando en un delito mayor.
           
            .tarjeta.color-acento-botones--borde.p-4(titulo="4. Instalar software espía")
              h5 4. Instalar 
                span.it software 
                | espía
              p Este paso transforma la idea y la materializa al utilizar un software para realizar un proceso de monitoreo y probablemente el mismo delito. En esta fase ya se debe establecer una relación de confianza y conocer algunos aspectos de la víctima, que hasta en algunas ocasiones, puede terminar en el acceso físico o remoto del atacante en el dispositivo de la víctima.
           

        .col-lg-4
          img(src='@/assets/curso/tema3/img3.png', alt='Texto que describa la imagen')
      .titulo-segundo.color-acento-contenido.mt-5
        h2 Ingeniería Social
    p Se sugiere visualizar el video «Así se hace la ingeniería social», el cual encontrará en el material complementario, en el que se puede evidenciar cómo conseguir acceso a datos personales no es tan complicado y por ello es una práctica de alto cuidado.
    figure.mb-5.mt-4(data-aos="zoom-in-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pvv9D2GNAVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.p-3.bgfa.mt-5
      .col-sm-1
        img.mt-4(src='@/assets/curso/tema1/ico1.svg', alt='Texto que describa la imagen')
      .col-sm-11
        h5.mb-0.mt-4 Para recordar
        p Es importante tener presente que los delincuentes informáticos aprovechan el desconocimiento, la mayoría de veces, por parte de los usuarios; tal es el caso del 
          span.it hacker 
          | más famoso del mundo, iniciador de la técnica de ingeniería social y considerado el más buscado por el FBI, Kevin Mitnick.
    
</template>

<script>
import Muestras from '../components/Muestras'
export default {
  name: 'Tema3',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
