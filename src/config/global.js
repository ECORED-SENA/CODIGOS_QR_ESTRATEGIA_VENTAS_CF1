export default {
  global: {
    componenteFormativo:
      'La experiencia de venta omnicanalidad en las empresas',
    descripcionCurso:
      'Este componente formativo se desarrolla con el propósito que las empresas faciliten experiencias digitales de venta, uso de teléfonos inteligentes y portafolio de productos y servicios por medio de códigos QR a sus clientes.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
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
        numero: '1',
        titulo: 'Definición y conceptos del plan promocional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Publicidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Innovación y tecnología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Códigos QR',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Teléfonos inteligentes o smartphones',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Valor de marca',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
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
      referencia: 'Adobe Stock. (2020). ',
      link:
        'https://stock.adobe.com/es/search?as_audience=srp&as_campaign=Freepik&get_facets=1&order=relevance&safe_search=1&as_content=popup&k=codigo+de+barras&tduid=32b409811ff10fc557a6dc41189ec2a6&as_channel=affiliate&as_campclass=redirect&as_source=arvato&asset_i',
    },
    {
      referencia:
        'Conexionesan. (30 de junio de 2015). Consideraciones para realizar una promoción de ventas exitosa. ',
      link:
        'https://www.esan.edu.pe/apuntes-empresariales/2015/06/consideraciones-para-realizar-una-promocion-ventas-exitosa/',
    },
    {
      referencia:
        'Freepik. (2021). Dispositivos e iconos tecnológicos conectados al planeta tierra digital. Foto Premium. ',
      link:
        'https://www.freepik.es/fotos-premium/dispositivos-e-iconos-tecnologicos-conectados-al-planeta-tierra-digital_5074433.htm',
    },
    {
      referencia:
        'GCF AprendeLibre. (2020). ¿Cómo usar Android? - Qué es Android. ',
      link: 'https://edu.gcfglobal.org/es/como-usar-android/que-es-android/1/',
    },
    {
      referencia:
        'GCF AprendeLibre. (2021). Sistemas operativos para móviles. ',
      link:
        'https://edu.gcfglobal.org/es/informatica-basica/sistemas-operativos-para-dispositivos-moviles/1/',
    },
    {
      referencia:
        'Martínez, I. (03 de junio de 2015). ¿Qué es y cómo se realiza un plan promocional? ',
      link:
        'https://blog.comunicae.es/que-es-y-como-se-realiza-un-plan-promocional/',
    },
    {
      referencia:
        'Omnicanalidad & Logística en concepto logístico. (2020). youtube.com. ',
      link: 'https://www.youtube.com/watch?v=6XZcSbYZ1Vg&t=10s',
    },
    {
      referencia:
        'Pere Escorsa , C., & Jaume Valls , P. (Septiembre de 2003). Tecnología e innovación en la empresa. ',
      link:
        'https://www.researchgate.net/profile/Jaume-Valls-Pasola/publication/260210824_Tecnologia_e_innovacion_en_la_empresa/links/5eecb559299bf1faac629d11/Tecnologia-e-innovacion-en-la-empresa.pdf',
    },
    {
      referencia:
        'Samsing, C. (2021). HubSpot. Omnicanalidad: 12 ejemplos excepcionales de estrategias omnicanal. ',
      link:
        'https://blog.hubspot.es/service/ejemplos-excepcionales-experiencia-omnicanal',
    },
    {
      referencia:
        'UNITAG QR. (2020). ¿Cuáles son los diferentes tipos de códigos QR? ',
      link:
        'https://www.unitag.io/es/qrcode/what-are-the-different-types-of-qrcodes',
    },
    {
      referencia:
        'Universidad del Istmo de Guatemala -UNIS-. (2004). La publicidad. Tesis de grado. ',
      link: 'http://glifos.unis.edu.gt/digital/tesis/2004/10394.pdf',
    },
    {
      referencia:
        'Zaragoza - ayuntamiento. (2020). Manual Básico de Smartphone. ',
      link:
        'https://www.zaragoza.es/contenidos/sectores/mayores/smartphone.pdf',
    },
    {
      referencia:
        'ZONE, A. a., & García, R. (11 de junio de 2021). AZ adsl Zone. ¿Qué es iOS? Todo sobre el sistema operativo de Apple. ',
      link: 'https://www.adslzone.net/reportajes/software/que-es-ios/',
    },
  ],
  glosario: [
    {
      termino: 'Aplicación',
      significado:
        'Son herramientas diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia informática de las personas.',
    },
    {
      termino: 'Código',
      significado:
        'Se le conoce al lenguaje por el cual funcionan las computadoras, comprende un conjunto de instrucciones y datos a ser procesados automáticamente.',
    },
    {
      termino: 'Digital',
      significado:
        'Conjunto de dispositivos que son destinados a la generación, transmisión, manejo, procesamiento y almacenamiento de señales digitales.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Referencia al procedimiento a través del cual se toman las decisiones en un escenario determinado con el objetivo de conseguir metas.',
    },
    {
      termino: 'Marketing',
      significado:
        'Conjunto de técnicas y estudios que tienen como objeto mejorar la comercialización de un producto.',
    },
    {
      termino: 'Publicidad',
      significado:
        'Difusión o divulgación de información, ideas u opiniones de carácter político, religioso, o comercial, con la intención de que alguien actúe de una determinada manera, adquiera un determinado producto.',
    },
    {
      termino: 'Practicidad',
      significado:
        'Que piensa y actúa ajustándose a la realidad simplificando las acciones.',
    },
    {
      termino: 'QR',
      significado:
        '<em>”Quick Response”</em> es un código de respuesta rápida.',
    },
    {
      termino: 'Smartphone',
      significado:
        'Teléfono celular que funciona con un sistema operativo móvil y funciona como una minicomputadora, reproductores multimedia, portátiles, cámaras digitales, videocámara y dispositivos de navegación.',
    },
    {
      termino: 'Tecnología',
      significado:
        'Arte, oficio o destreza. capacidad de transformar o combinar algo ya existente para construir algo nuevo o bien darle otra función.',
    },
    {
      termino: 'Transformación',
      significado:
        'cambio de forma. Sucede cuando una cosa, hecho o idea es convertida en otra.',
    },
  ],
  complementario: [
    {
      texto:
        'MasContainer. (2020). Omnicanalidad & Logística en concepto logístico (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6XZcSbYZ1Vg&t=10s',
    },
    {
      texto:
        'GeekWire. (2012). The Hointer Shopping Experience: Buying jeans from a robot-powered apparel startup (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2ZjWwlzRYBM',
    },
    {
      texto: 'Meneses & Gutierrez & Álvarez – 2014. Revista INNOVAR Journal',
      tipo: 'Documento en línea',
      link: 'https://revistas.unal.edu.co/index.php/innovar/issue/view/2371',
    },
    {
      texto:
        'Xataka. (2020). CÓDIGO QR: Cómo crearlo y para qué sirve | Xataka Basics (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kLhSmNYAJNA',
    },
    {
      texto:
        'Manual realizado por las personas mayores dinamizadoras de las Aulas de Informática de los Centros de Convivencia Municipales, Ayuntamiento de Zaragoza',
      tipo: 'Documento en línea',
      link:
        'https://www.zaragoza.es/contenidos/sectores/mayores/smartphone.pdf',
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
      {
        nombre: 'Larisa Parra Carrillo',
        cargo: 'Instructora',
        centro:
          'Norte de Santander centro de la empresa la industria y los servicios',
      },
      {
        nombre: 'Gloria Lida Álzate Suárez',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Distrito capital',
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
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
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
