<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Vulnerabilidades 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.PT1(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/2.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        
        p.margen1 Las vulnerabilidades de los sistemas informáticos son muchas pero la principal amenaza es un usuario desprevenido y no capacitado. Como se evidenció, en la temática anterior, existen muchos ataques informáticos que colocan en riesgo la información de los usuarios y corporaciones a lo largo del mundo. Sin embargo, esto sucede en la mayoría de veces por un desconocimiento, por parte de los usuarios, sobre las vulnerabilidades que se presentan en los sistemas informáticos.
    
    .row.bg4
      .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
        h2 Contraseñas
      p Aunque existen muchas teorías con respecto a este tipo de riesgo, es una gran realidad en tiempos actuales. El debate empieza desde la cantidad de datos hasta el tipo de datos a utilizar, lo cierto es que la combinación de diferentes tipos de caracteres ayuda mucho a prevenir cuando un delincuente intenta descifrar una contraseña. La siguiente figura presenta algunas recomendaciones fundamentales para la creación de una contraseña que permita garantizar un nivel óptimo de acceso:
      .row.justify-content-center.mt-4
        .col-lg-10
          .titulo-sexto.color1
            h5 Figura 3 
            span Creación de contraseña segura
          img.mb-4(src='@/assets/curso/tema2/img2.svg', alt='Texto que describa la imagen')
      p.mt-5 Otra opción que se puede utilizar en la construcción de contraseñas es utilizando un 
        span.it software 
        | de encriptación y que este, mediante un algoritmo, genere la clave teniendo en cuenta las características antes mencionadas.
      p En el portal de lastpass.com se tiene un generador de contraseñas a partir de una combinación de opciones como se ilustra en la imagen.
      .titulo-sexto.color1.mt-4(data-aos="zoom-in-left")
        h5 Figura 4
        span.it Generador de contraseñas seguras
      .row(data-aos="zoom-in-left")
        .col-lg-7
          img.mb-4(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
        .col-lg-5.p-5.bgfa2
          p.mt-4 Este generador de contraseñas permite parametrizar los valores que se desea en nuestra contraseña desde la longitud, combinación de caracteres y dificultad de escritura.
          p Esta es una posibilidad que se puede tener a la mano por parte de aquellos usuarios que quieren generar una contraseña con características de seguridad y teniendo en cuenta las recomendaciones expresadas anteriormente.
      
      .titulo-segundo.color-acento-contenido.mt-5
        h2 Almacenamiento de Contraseñas
      p Otra vulnerabilidad que se presenta en los usuarios del sistema es el almacenamiento de las contraseñas en la memoria del navegador de internet. Esta es una práctica común por las personas para no tener necesidad de volver a colocar la contraseña al momento de autenticarse en el sistema; así que si una persona solicita el ingreso al sistema y los datos están grabados primero, puede ingresar al sistema sin restricción y estos datos pueden ser obtenidos desde la memoria del navegador.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img4.svg')})`}"
      )
      .bloque-texto-g__texto.p-5

        p Es importante también tener en cuenta que algunos sitios dejan grabada en la caché o memoria del navegador los datos que se suministran al momento de registrarse en algún portal de internet o sitio para obtener o usar servicios que estos prestan.

    p.mt-5 Una manera de prevenir este tipo de problemas es, primero que todo, no guardar contraseñas dentro del navegador a menos que sea el equipo personal y que nadie más tenga acceso al mismo, aunque no se recomienda igualmente esta práctica, y lo segundo es utilizar el navegador en modo seguro o incógnito.
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-lg-10
        .titulo-sexto.color1
          h5 Figura 5
          span.it Modo incógnito
        .row
          .col-lg-8
            img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')
          .col-lg-4.p-5.bgfa2
            p.mt-4 El modo incógnito permite realizar un manejo seguro de los datos.
            p.mb-0 Ahora bien, aunque existen muchos tipos de vulnerabilidades se han mostrado estas como las comunes que cometen los usuarios en Internet. Este tipo de vulnerabilidades desatan en la mayoría de veces en otros tipos de prácticas como secuestro de información, uso de datos para fines delictivos, entre otros.
    .row.bg4.mt-5(data-aos="zoom-in-left")
      p A continuación, se entrega un listado de las diferentes vulnerabilidades a las cuales se encuentran expuestos los usuarios al utilizar sistemas de información:     
      .row.justify-content-center
        .col-lg-6
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Contraseñas predeterminadas no modificadas")
              .col-md-2
                figure
                  img(src='@/assets/curso/tema2/ico1.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p Las contraseñas predeterminadas son aquellas que se colocan con datos de registro del usuario; por ejemplo, en algunas ocasiones, se coloca el número de identificación del usuario como contraseña para que este cambie esa información pero este proceso no es llevado a cabo por el usuario.
              .col-md-1


            .row(titulo="Inadecuada gestión y protección de contraseñas")
              .col-md-2
                figure
                  img(src='@/assets/curso/tema2/ico2.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p Contraseñas que no contienen una combinación de caracteres que permitan generar una fortaleza de acceso.
              .col-md-1
            .row(titulo="Falta de política de acceso")
              .col-md-2
                figure
                  img(src='@/assets/curso/tema2/ico3.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p Esta medida más que todo está reflejada al acceso de usuarios desde sistemas con acceso desde una red protegida o a través de Internet y regularmente se realiza con credenciales de acceso.
              .col-md-1
            .row(titulo="Ausencia de política de escritorio limpio y pantalla clara")
              .col-md-2
                figure
                  img(src='@/assets/curso/tema2/ico4.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p Este componente se refiere a que no se debe colocar información en el puesto de trabajo y menos en la pantalla del equipo que muestre información o que coloque en riesgo la información o acceso a los datos de la empresa.
              .col-md-1
            .row(titulo="Falta de políticas para el uso de la criptografía")
              .col-md-2
                figure
                  img(src='@/assets/curso/tema2/ico5.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p Este aspecto se comprende en el uso de mecanismos que permitan generar, por ejemplo, contraseñas a través de software especializado.
              .col-md-1
        .col-lg-6
          img(src='@/assets/curso/tema2/img6.png', alt='Texto que describa la imagen')
      .row.justify-content-center(data-aos="zoom-in-left")
        .col-lg-6.mt-4.mb-4
          img(src='@/assets/curso/tema2/img7.png', alt='Texto que describa la imagen')

        .col-lg-6
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Copia no controlada de datos")
              .col-md-2
                figure
                  img(src='@/assets/curso/tema2/ico6.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p Este aspecto es bastante delicado debido a que las copias de seguridad, o en términos técnicos se refiere a backups, solo debe ser realizadas por personal entrenado y en unos equipos específicos llamados servidores. Se debe colocar como política que está prohibido realizar copias en otros equipos o dispositivos.
              .col-md-1


            .row(titulo="Descarga no controlada de Internet")
              .col-md-2
                figure
                  img(src='@/assets/curso/tema2/ico7.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p Esta práctica es común en la mayoría de empresas y equipos personales, pero en este caso se debe controlar que la información que se almacena en los equipos de la empresa no coloque en riesgo la información de la misma; para ello, es importante tener una política clara de acceso a Internet y copia de archivos, por ejemplo.
              .col-md-1
            .row(titulo="Uso incontrolado de sistemas de información")
              .col-md-2
                figure
                  img(src='@/assets/curso/tema2/ico8.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p Se debe controlar que el software instalado y utilizado en la empresa se encuentre debidamente licenciado. No se debe permitir instalar programas que puedan colocar en riesgo la información de la empresa.
              .col-md-1
            .row(titulo="Conexiones a red pública desprotegida")
              .col-md-2
                figure
                  img(src='@/assets/curso/tema2/ico9.svg', alt='Texto que describa la imagen')
              .col-md-8.mb-4.mb-md-0
                p Este aspecto es de vital importancia debido a que al permitir el acceso a redes de acceso público o sin medidas de seguridad, se puede monitorear la información que viaja por la misma y así un atacante puede aprovechar estos datos para luego cometer un delito.
              .col-md-1
    .row.p-3.bgfa.mt-5(data-aos="zoom-in-left")
      .col-sm-1
        img.mt-4(src='@/assets/curso/tema1/ico1.svg', alt='Texto que describa la imagen')
      .col-sm-11
        h5.mb-0.mt-4 Para recordar
        p Las vulnerabilidades son aspectos que se deben tratar con mucho cuidado en las organizaciones debido al impacto que esto puede generar en la infraestructura de las empresas. Estas vulnerabilidades están consideradas en la norma ISO 27001 la cual regula todo lo referente a la seguridad de la información y buenas prácticas.




</template>

<script>
export default {
  name: 'Tema2',
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
