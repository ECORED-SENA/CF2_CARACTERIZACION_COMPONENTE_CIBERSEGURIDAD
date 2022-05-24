<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="zoom-in-left")
        span 1
      h1 Ataques informáticos
  
    p Cuando se hace referencia al evento de «ataques informáticos», a gran parte a las personas esto les genera pánico, debido a sucesos presentados en años actuales. Ahora bien, aunque no es un secreto que la seguridad de la información ha generado ciertos problemas en la sociedad actual (en la cual se concibe la seguridad como algo de suprema delicadeza), no se puede decir que esta no existe, solo por la carencia sistemas de autenticación o de seguridad.
    p Es así como las empresas prestadoras de servicios tecnológicos realizan grandes esfuerzos por garantizar que los datos se encuentren seguros y que la información pueda ser utilizada de manera correcta, a través de la implementación de los pilares de la información: integridad, confidencialidad, disponibilidad.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.PT1(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        
        p.margen1 Un ataque informático, según muchos expertos, es un intento en el cual se desea acceder a un sistema violando los esquemas de seguridad y autenticación que este posee con la finalidad de apoderarse de su información.
    .row.justify-content-center.bg2
      .col-lg-10.margin1
        .titulo-sexto.color1
          h5 Figura 1.
          span.it Propósitos de un ataque informático
        img.mt-4(src='@/assets/curso/tema1/img2.svg', alt='Texto que describa la imagen')
    p.mt-4 Estas finalidades tienen particularidades en la forma en la que se llevan a cabo y por ende sus efectos, dentro de un sistema de información o infraestructura tecnológica, también son muy distintos. Exploremos dos tipos de ataques: Ataque Man in the Middle y Ataque por Ransomware:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in-left")
      .row(titulo="Man in the Middle ")
        .col-md-1.wis
        .col-md-5.mb-4.mb-md-0
          p Ataque 
            span.it Man in the Middle
            | , también conocido como mono en medio o hombre en medio, es un ataque informático que consiste en aprovechar una conexión legítima, que normalmente presta el servicio de Internet y luego crear una conexión con características parecidas para engañar a posibles víctimas para que estas accedan a conectarse sin percatarse que es una red que está siendo espiada por un atacante informático, quien puede utilizar un software de monitoreo para capturar la información que está siendo digitada por la víctima y después hacer uso de esta para cometer diferentes delitos informáticos contemplados en la Ley 1273 del 2009.
          p Adicional a ello, cabe destacar que la red que se utiliza para la conexión de la víctima está sin ninguna medida de seguridad, por lo que brinda mayor facilidad de conexión y, cómo esta red no utiliza un algoritmo de cifrado, los datos que viajan de manera plana pueden ser leídos sin necesidad de realizar ningún proceso de descifrar, tal como se puede observar en la figura.
      
        .col-md-6
          .titulo-sexto.color1
            h5 Figura 2.
            span.it Metodología del ataque
          figure
            img(src='@/assets/curso/tema1/img3.svg', alt='Texto que describa la imagen')

      .row(titulo="Ransomware ")(data-aos="zoom-in-left")
        .col-md-1.wis
        .col-md-8.mb-4.mb-md-0.wii
          p Tipo de ataque que utilizan los delincuentes informáticos, el cual está más enfocado en el secuestro y legítimo acceso de la información, por parte de las víctimas. Tiene como propósito, que una vez la información o el sistema ha sido secuestrado, exigir sumas de dinero por la recuperación o acceso al sistema. 

          p Es una práctica que se ha vuelto muy común, actualmente en la red. La mayoría de las víctimas se encuentran en redes sociales y corporaciones financieras. Se han presentado varios ataques de este tipo en los últimos años dejando pérdidas millonarias entre las víctimas. 
      
        .col-md-2
          figure
            img(src='@/assets/curso/tema1/img4.svg', alt='Texto que describa la imagen')
        .col-md-1
    p Según algunos sitios como el portal europapress.es (2021), existe un incremento de este tipo de ataques y la frecuencia en que estos se cometen. En el año 2020 se incrementó en un 171%, teniendo en cuenta que los precios cobrados por el rescate de su información fue 312.493 dólares, siendo esta una suma bastante considerable, o, en algunos casos, dependiendo de la organización y la información secuestrada, se llegaron a realizar pedidos de suma que rondaban los 10 millones de dólares.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img5.svg')})`}"
      )
      .bloque-texto-g__texto.p-5

        p De igual forma, se están presentando de forma frecuente, la extorsión a víctimas a través de redes sociales por fotografías o información que si sale a la luz pública destruiría su imagen y reputación, causando un daño irremediable.

    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-primario.p-4.mb-4(data-aos="zoom-in-left")
          p.mt-2 Esta práctica está convirtiéndose en un problema mucho más grave, puesto que los intereses van cambiando, ya que en algunos casos la información puede causar problemas aún de mayor impacto.
    p La lista de ataques informáticos es incontable, pero en este segmento se ha querido ilustrar aquellos que por su denominación causan un daño bastante significativo, veámoslos:
    .fondo1.py-5
      .col-lg-3
        p.mb-4.text-white(data-aos="fade-left") Haga clic en cada uno de los íconos y conozca los ataques comunes.
      .row.justify-content-center(data-aos="fade-right")
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial(v-on:click="click(1)")
          img.mb-3(src="@/assets/curso/tema1/img12.svg" ref="img1" v-show="seleccion!=1")      
          img.mb-3(src="@/assets/curso/tema1/img21.svg" ref="img1b" v-show="seleccion==1")      
          h3.text-center.text-white <i>Malware</i>
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial(v-on:click="click(2)")
          img.mb-3(src="@/assets/curso/tema1/a.svg" ref="img2" v-show="seleccion!=2")      
          img.mb-3(src="@/assets/curso/tema1/aa.svg" ref="img2b" v-show="seleccion==2")      
          h3.text-center.text-white Virus
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial(v-on:click="click(3)")
          img.mb-3(src="@/assets/curso/tema1/b.svg" ref="img3" v-show="seleccion!=3")      
          img.mb-3(src="@/assets/curso/tema1/bb.svg" ref="img3b" v-show="seleccion==3")      
          h3.text-center.text-white Gusanos
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial(v-on:click="click(4)")
          img.mb-3(src="@/assets/curso/tema1/c.svg" ref="img4" v-show="seleccion!=4")      
          img.mb-3(src="@/assets/curso/tema1/cc.svg" ref="img4b" v-show="seleccion==4")      
          h3.text-center.text-white <i>Troyanos</i> 
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial(v-on:click="click(5)")
          img.mb-3(src="@/assets/curso/tema1/d.svg" ref="img5" v-show="seleccion!=5")      
          img.mb-3(src="@/assets/curso/tema1/dd.svg" ref="img5b" v-show="seleccion==5")      
          h3.text-center.text-white <i>Spyware</i>
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial(v-on:click="click(6)")
          img.mb-3(src="@/assets/curso/tema1/e.svg" ref="img6" v-show="seleccion!=6")      
          img.mb-3(src="@/assets/curso/tema1/ee.svg" ref="img6b" v-show="seleccion==6")      
          h3.text-center.text-white <i>Phishing</i>
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial(v-on:click="click(7)")
          img.mb-3(src="@/assets/curso/tema1/f.svg" ref="img7" v-show="seleccion!=7")      
          img.mb-3(src="@/assets/curso/tema1/ff.svg" ref="img7b" v-show="seleccion==7")      
          h3.text-center.text-white DDoS

      .row.justify-content-center
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial.p-0
          img(src="@/assets/curso/tema1/img29.svg" ref="img8" v-show="seleccion==1")              
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial
          img(src="@/assets/curso/tema1/img29.svg" ref="img8" v-show="seleccion==2")              
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial
          img(src="@/assets/curso/tema1/img29.svg" ref="img8" v-show="seleccion==3")              
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial
          img(src="@/assets/curso/tema1/img29.svg" ref="img8" v-show="seleccion==4")              
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial
          img(src="@/assets/curso/tema1/img29.svg" ref="img8" v-show="seleccion==5")              
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial
          img(src="@/assets/curso/tema1/img29.svg" ref="img8" v-show="seleccion==6")              
        .col-xl.col-lg-2.col-md-3.col-sm-6.col-6.contenedor-especial
          img(src="@/assets/curso/tema1/img29.svg" ref="img8" v-show="seleccion==7")              

      .fondo2.div.p-0(v-if="seleccion!=0" v-bind:data-aos="seleccion!=0?'fade-in':''" )
        div.p-4(style="background-color: #FFFFFF")
          div.p-0(v-show="seleccion==1")
            p.mb-4 Tipo de <i>software</i> que tiene la capacidad de ser ejecutado bajo líneas de comandos oculta o invisible para la víctima. Realiza operaciones como apertura de puertos, brinda acceso a otros programas y, en el peor de los casos, brinda acceso remoto al dispositivo.
          div.p-0(v-show="seleccion==2")
            p.mb-4 Es un programa que tiene la capacidad de modificar funciones del sistema y colocar en riesgo la información que este almacena.
          div.p-0(v-show="seleccion==3")
            p.mb-4 Es un tipo de malware que tiene la capacidad de propagarse en una red de computadoras afectando un gran número de ellas.
          div.p-0(v-show="seleccion==4")
            p.mb-0 Es un tipo de malware que se copia en una computadora y luego espera una orden, regularmente desde un equipo por fuera de la red, para realizar acciones que colocan en riesgo la información que se maneja en un sistema informático.
          div.p-0(v-show="seleccion==5")
            p.mb-4 Tipo de virus informático cuya finalidad es permitir realizar acciones de espionaje y seguimiento a sistemas informáticos para ver los movimientos que realiza el usuario en el sistema informático.
          div.p-0(v-show="seleccion==6")
            p.mb-0 Es una técnica utilizada para capturar datos e información aprovechando el descuido y desconocimiento del usuario.
          div.p-0(v-show="seleccion==7")
            p.mb-4 Denegación de servicio distribuido (DDoS) es un ataque informático que bloquea el correcto acceso a los recursos de un sistema informático. Este más que todo limita al usuario a utilizar legítimamente un sistema de información o servicio que puede brindar una empresa.
        .row.justify-content-center
          .col-10(style="background-color: #F24DC3; height: 8px !important")
            p.mb-0 
    .row.p-3.bgfa.mt-5
      .col-sm-1
        img.mt-4(src='@/assets/curso/tema1/ico1.svg', alt='Texto que describa la imagen')
      .col-sm-11
        h5.mb-0.mt-4 Para recordar
        p En esta temática se abordó la tipología de ataques informáticos perpetrados por terceros, en donde es importante siempre tener presente que la capacitación y el conocimiento son las herramientas fundamentales que permiten mantener alertas ante cualquier circunstancia que se pueda presentar.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    seleccion: 0,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    click: function(val) {
      this.seleccion = val
    },
  },
}
</script>

<style lang="sass"></style>
