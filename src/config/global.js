export default {
  global: {
    componenteFormativo: 'Ataques y vulnerabilidades',
    descripcionCurso:
      'En este componente formativo se tratarán los temas de clasificación de ataques, mitigación de riesgos informáticos y buenas prácticas de ciberseguridad en una organización.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1.',
        titulo: 'Ataques informáticos ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2.',
        titulo: 'Vulnerabilidades ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3.',
        titulo: 'La ingeniería social ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4.',
        titulo: 'Diagnóstico de seguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5.',
        titulo: 'Códigos de ética ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: false,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Europapress.com (2021). El precio medio pagado por los rescates de "ransomware" subió un 171% en 2020. PortalTic. ',
      link:
        'https://www.europapress.es/portaltic/ciberseguridad/noticia-precio-medio-pagado-rescates-ransomware-subio-171-2020-20210317152040.html',
    },
    {
      referencia:
        'Pastor, J. (2018). Kevin Mitnick, genio o figura de uno de los hackers más famosos de la historia. Xataka. ',
      link:
        'https://www.xataka.com/seguridad/kevin-mitnick-genio-o-figura-de-uno-de-los-hackers-mas-famosos-de-la-historia',
    },

    {
      referencia:
        'Silva, N. & Espina, J. (2011). Ética Informática en la Sociedad de la Información. Revista venezonala de gerencia, 11(36). ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_crossref_primary_10_31876_revista_v11i36_10441',
    },
  ],
  glosario: [
    {
      termino: 'Ataque informático',
      significado:
        'Es una actividad realizada por vándalos informáticos para aprovechar vulnerabilidades en los sistemas informáticos y robar información.',
    },
    {
      termino: 'Ataque <i>Man in the middle</i>',
      significado:
        'Es un tipo de ataque informático que aprovecha la ingenuidad del usuario para que este acceda a una red desprotegida y que está siendo monitoreada para posteriormente robar su información.',
    },
    {
      termino: 'Denegación de servicio distribuido (DDoS)',
      significado:
        'Es un ataque informático que bloquea el correcto acceso a los recursos de un sistema informático. Este más que todo limita al usuario a utilizar legítimamente un sistema de información o servicio que puede brindar una empresa.',
    },
    {
      termino: '<i>Hacking</i> ético',
      significado:
        'Se conoce como la forma de realizar diagnóstico y verificación de los componentes de seguridad de un sistema informático con la finalidad de mejorar sus sistemas de seguridad.',
    },
    {
      termino: 'Ingeniería social',
      significado:
        'Es el estudio y análisis detallado de un usuario, conocer sus puntos débiles y rutinas, para luego encontrar el momento adecuado, con las preguntas indicadas, para empezar a realizar un perfil de la posible víctima.',
    },
    {
      termino: 'lastpass.com',
      significado:
        'Es un sitio <i>web</i> que tiene un <i>software</i> que permite, mediante la combinación de diferentes caracteres, crear contraseñas seguras.',
    },
    {
      termino: '<i>Malware</i>',
      significado:
        'El malware es un tipo de <i>software</i> que tiene la capacidad de ser ejecutado bajo líneas de comandos oculta o invisible para la víctima y realizar operaciones como apertura de puertos, brindar acceso a otros programas y en el peor de los casos brindar acceso remoto al dispositivo.',
    },
    {
      termino: '<i>Phishing</i>',
      significado:
        'Es una técnica utilizada para capturar datos e información aprovechando el descuido y desconocimiento del usuario.',
    },
    {
      termino: 'Virus',
      significado:
        'Es un programa que tiene la capacidad de modificar funciones del sistema y colocar en riesgo la información que este almacena.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Es un estado de los sistemas informáticos el cual carece de medidas de seguridad que garanticen su correcto funcionamiento.',
    },
  ],
  complementario: [
    {
      texto:
        'Olivares Serrano, J. & Oncins Rodríguez, A. (2015). Seguridad Informática - Hacking ético: conocer el ataque para una mejor defensa. (3a. Ed.) Barcelona: Ediciones ENI. 1. Ataques informáticos',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000096342',
    },
    {
      texto:
        'Ramírez, J., Villao, K., Orrala, O. & Garcés, J. (2016) Seguridad informática o seguridad personal, evolucionando con la tecnología. Revista Científica y Tecnológica UPSE 3.2, 3(2), 113-17. 2. Vulnerabilidades',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_crossref_primary_10_26423_rctu_v3i2_163',
    },
    {
      texto:
        'Escuela Europea de Excelencia. (2019). Listado de amenazas y vulnerabilidades en ISO 27001. 2. Vulnerabilidades ',
      tipo: 'Artículo',
      link:
        'https://www.escuelaeuropeaexcelencia.com/2019/11/listado-de-amenazas-y-vulnerabilidades-en-iso-27001/',
    },
    {
      texto:
        'Castellanos H, L. R. (2012). Seguridad en informática: seguridad, auditoría, cortafuegos, ingeniería social, iso 27000. Saarbrücken, Alemania: Editorial Académica Española. 3. La ingeniería social',
      tipo: 'Libro',
      link: [
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000083567',
      ],
    },
    {
      texto:
        'DOITSMART. (2019). Así se hace la ingeniería social. [Archivo de video] YouTube. 3. La ingeniería social',
      tipo: 'Video',
      link: ['https://www.youtube.com/watch?v=Xy3QD0baCco'],
    },
    {
      texto:
        'Gómez Vieites, Á. (2013). Auditoría de seguridad informática. Bogotá: Ediciones de La U. 4. Diagnóstico de seguridad',
      tipo: 'Libro',
      link: [
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000063745',
      ],
    },
    {
      texto:
        'Silva, N. & Espina, J. (2011). Ética Informática en la Sociedad de la Información. Revista venezonala de gerencia, 11(36). 5. Códigos de ética',
      tipo: 'Artículo',
      link: [
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_crossref_primary_10_31876_revista_v11i36_10441',
      ],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Edison Eduardo Mantilla Cuadros'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Mauricio Valencia Martinez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
