<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Diagnóstico de seguridad
    p En este apartado se abordarán los diferentes tipos de elementos a tener en cuenta para realizar un diagnóstico de seguridad, entendiendo qué se debe priorizar de acuerdo a las necesidades que tiene una empresa.
    p Es por esto que para la realización de un correcto diagnóstico es pertinente elaborar una lista de chequeo donde se coloquen los aspectos a evaluar, su nivel de importancia, los tiempos y, adicional a ello, la justificación del porqué se debe realizar ese proceso de diagnóstico.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.PT1(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/4.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        
        p.margen1 La lista de chequeo es una herramienta utilizada para identificar y priorizar los aspectos que se deben verificar o diagnosticar de algún proceso de la organización. En nuestra vida cotidiana se utilizan estos aspectos muy a menudo; por ejemplo, si se va a realizar una compra en algún supermercado creamos una lista dando prioridad a los elementos más necesarios y luego los menos relevantes, así se puede controlar mejor los procesos y es más fácil identificarlos.
    

    .row.bg7.justify-content-center(data-aos="zoom-in-left")
      p.text-center.mt-5 Este proceso empieza con la identificación en la infraestructura en la cual se deben generar ítems para atender a cada uno de ellos de manera particular. En la siguiente figura interactiva se puede apreciar un ejemplo:
      p.text-center.mt-4 <strong>Ejemplo para iniciar un diagnóstico</strong>
      .col-lg-8.mt-5
        .titulo-sexto.color1
          h5 Figura 7
          span.it Ejemplo para iniciar un diagnóstico
        .row.justify-content-center
          .col-lg-6
            .row.mt-4
              .col-lg-2
                img(src='@/assets/curso/tema4/1.svg', alt='Texto que describa la imagen')
              .col-lg-10
                p.mb-0 <strong> Manejo y gestión de contraseñas</strong>
                p.mt-2 Esto evaluaría la frecuencia en que se realiza el cambio de contraseña y también el mecanismo utilizado para realizar la creación de las mismas.
          .col-lg-6
            img(src='@/assets/curso/tema4/img2.svg', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-5
          .col-lg-6
            img(src='@/assets/curso/tema4/img3.svg', alt='Texto que describa la imagen')

          .col-lg-6
            .row.mt-4
              .col-lg-2
                img(src='@/assets/curso/tema4/2.svg', alt='Texto que describa la imagen')
              .col-lg-10
                p.mb-0 <strong> Actualización de <i>software</i> preventivo y correctivo</strong>
                p.mt-2 Dentro de estos procesos entran los antivirus, <i>antispyware</i>, <i>firewalls</i>, entre otros. Se debe garantizar que estos se encuentren debidamente instalados y comprobar que funcionan de manera correcta.
        .row.justify-content-center.mt-5
          .col-lg-6
            .row.mt-4
              .col-lg-2
                img(src='@/assets/curso/tema4/3.svg', alt='Texto que describa la imagen')
              .col-lg-10
                p.mb-0 <strong> Redes y conexiones</strong>
                p.mt-2 Se debe verificar la configuración de los dispositivos de conexión de la organización. Un aspecto importante es el manejo legítimo de acceso de los mismos, los cuales  deben estar configurados con sistemas de autenticación que solo permitan a los empleados, o personas que requieren el acceso a los recursos. Se debe evitar conexiones no deseadas en los mismos.
          .col-lg-6
            img(src='@/assets/curso/tema4/img4.svg', alt='Texto que describa la imagen')
        .row
          .col-lg-1
          .col-lg-11
            p <strong>Acciones para prevenir</strong>
            p En el aspecto de redes y conexiones, se pueden realizar algunas acciones para prevenir. Un ejemplo, es el <i>software netstumbler</i>. Este aplicativo puede detectar redes <i>wifi</i> y mostrar información sobre su configuración, la cual  puede ser utilizada para luego cometer un delito por parte de un delincuente informático.
            p En este caso se debe proceder a deshabilitar una opción en nuestro dispositivo de conexión la cual se llama “Difundir nombre del SSID de la red”, el SSID de la red es el nombre que recibe la red y que le permite a los usuarios conectarse a la misma. Lo que se hace al momento de ocultarla, es que un posible atacante no puede visualizarla y menos acceder a ella. Solo se registran los usuarios que queremos que sí puedan utilizar la red.
          
      .row.justify-content-center.mt3
        .col-lg-10
          .cajon.color-primario.p-4.mb-4
            p.mt-2 Aunque en muchas ocasiones el diagnóstico se puede confundir con una auditoría, este solo se dedica a realizar funciones de monitoreo para verificar que la infraestructura esté funcionando de manera óptima. La auditoría es un proceso que comprende aspectos mucho más profundos tales como un diagnóstico detallado de los componentes y su interacción entre sí, esto involucra tanto tecnología, procesos, personas, entre otros.
    .row.mt-5
    .row.mt-5
    p.mt-5 Para la realización de un correcto diagnóstico se deben seguir algunas reglas que permitan establecer la continuidad de los procesos y determinar los cambios o funciones que se deben realizar en cada uno de ellos. Es así como el ciclo PHVA es un estándar para la valoración de objetivos en los procesos empresariales, pues permite evaluar un componente en diferentes tiempos y garantizar su correcto funcionamiento. El ciclo PHVA comprende las siguientes fases: Planear, Hacer, Verificar y Actuar.
    .row.justify-content-center.mt-5(data-aos="zoom-in-left")
      .col-lg-4.mt-5
          
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/img5.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="49.3%" y="4.5%" numero="")

            p En la planeación se determina el alcance que tendrá el proceso y, adicional a ello, las actividades que se desean realizar y los tiempos que esta llevará. También, se debe tener en cuenta las personas involucradas en dichos procesos, permitiendo garantizar el correcto funcionamiento de la planeación.

          .tarjeta.color-acento-botones.p-3(x="3%" y="51%" numero="")
            p Se establecen las correcciones de acuerdo a los hallazgos encontrados. Este proceso debe tener una vigilancia que garantice que se realiza de manera correcta. Adicional a ello, se debe entregar un informe de lo corregido y encontrado.


          .tarjeta.color-acento-botones.p-3(x="93%" y="51%" numero="")
            p Se ejecutan las acciones que previamente se planearon, respetando los tiempos negociados y las actividades y compromisos establecidos.

          .tarjeta.color-acento-botones.p-3(x="49.3%" y="95%" numero="")
            p Se establecen las acciones de comprobación alrededor de la realización de las acciones de corrección de los hallazgos encontrados en el proceso. Se realizan planes de mejora de los mismos y estas acciones deben ir encaminadas a encontrar fallos o futuros problemas con la infraestructura. <strong>Es importante tener en cuenta que los factores de riesgo son la finalidad principal de este proceso.</strong>
    .row.p-3.bgfa.mt-5
      .col-sm-1
        img.mt-4(src='@/assets/curso/tema1/ico1.svg', alt='Texto que describa la imagen')
      .col-sm-11
        h5.mb-0.mt-4 Para recordar
        p El diagnóstico de la seguridad implica esfuerzos y procesos que garanticen que la infraestructura y elementos tecnológicos, que hacen parte de una empresa, funcionen de manera óptima, teniendo en cuenta el ciclo PHVA para determinar, en cada una de sus fases, las actividades y procedimiento a realizar.



</template>

<script>
export default {
  name: 'Tema4',
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
