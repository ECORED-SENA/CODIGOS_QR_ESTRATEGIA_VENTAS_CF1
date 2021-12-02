<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Publicidad
    
    .row.justify-content-center.bgImg01.mb-4
      .col-lg-10.mb-4
        .tarjeta.color-violet.p-4(data-aos="fade-right")

          h4.mb-2 La palabra publicidad, la cual significa “enfocar la mente hacía”, procede del latín ¨#[i advertere]¨, por lo que deben elegir muy bien la propagación que se realizarán en las empresas, por lo tanto, se mencionan algunas de ellas.
          span - Universidad del Istmo de Guatemala -UNIS-, 2004:

      .col-lg-8
        .tarjeta.tarjeta--azul.p-1.mb-5
          SlyderA(tipo="b")
            .row
              h2.text-center Publicidad global
              p.text-center Muestra la publicidad en diversas versiones de idiomas.
            .row
              h2.text-center Publicidad internacional
              p.text-center Cuando se dirige a varios países a la vez.
            .row
              h2.text-center Publicidad nacional
              p.text-center Alcanza todas las áreas geográficas de un país.
            .row
              h2.text-center Publicidad regional
              p.text-center Cuando se concentran en un área geográfica grande.
            .row
              h2.text-center Publicidad local
              p.text-center Se dirige al público de una sola área.
            .row
              h2.text-center Publicidad cooperativa
              p.text-center Cuando se da colaboración entre los anunciantes nacionales y los comerciantes locales.
      
        p.mb-4 La publicidad cumple un papel fundamental en las empresas, permite seducir o dar a conocer a una audiencia los productos y servicios por diferentes canales de comunicación de manera #[i offline u online].

    .row.justify-content-center
      .col-lg-1.col-md-3.col-sm-3(data-aos="fade-down")
        img.img-relative(src='@/assets/curso/tema2/img01.svg')
    .row.justify-content-center.mb-4
      .col-lg-4.tarjeta.color-gray.p-4(data-aos="fade-up")
        p.mb-4 Conozcamos algunas definiciones de publicidad:

    .row.justify-content-center.mb-4
      .col-lg-8
        SlyderF(columnas="col-12")(data-aos="fade-right")
          .tarjeta.color-white.p-4
            p.text-bold.text-center.mb-4 Según el profesor Eguizábal (2007)
            p “Fue sin duda la Psicología la primera disciplina en ocuparse con cierta seriedad de la publicidad con el libro #[i the psychology advertising]”. También nos dice que la publicidad no son solo anuncios es una actividad empresarial con carácter comunicativo que se manifiesta con esos mensajes llamados anuncios.
          .tarjeta.color-white.p-4
            p.text-bold.text-center.mb-4 Según Kotler
            p “La publicidad es cualquier forma pagada de presentación y promoción no personal de ideas bienes y servicios por un patrocinador identificado”.
          .tarjeta.color-white.p-4
            p.text-bold.text-center.mb-4 La AMA
            p “La publicidad en los años setentas era cualquier forma pagada de presentación y promoción no personal de ideas bienes y servicios por cuenta de alguien identificado”.
          .tarjeta.color-white.p-4
            p.text-bold.text-center.mb-4 Según Aaker y Myers
            p “La publicidad es conocida como un medio de comunicación masiva que involucra a un responsable, al anunciante, que normalmente contrata a una organización de medios para que transmita un anuncio que fue creado por una agencia”.
          .tarjeta.color-white.p-4
            p.text-bold.text-center.mb-4 Según Torres (2010)
            p “La publicidad es un conjunto de decisiones, preparadas de antemano, para el logro de un objetivo designado, teniendo en cuenta todas las posibles reacciones de los adversarios”.
          
    .row.justify-content-center.tarjeta.color-blue-gradient-r.p-4.mb-4
      .col-lg-10.mb-4
        .h4.mb-4
          <div style="color:#7714B7;"> ● Tipos de publicidad </div>
        p.mb-0 Para dar a conocer una empresa, se utilizan diferentes medios publicitarios que nos ayudarán a posicionar la marca en el mercado. Para poder desarrollarlo se emplea el material impreso físico que el cliente puede recibir y dedicarle el tiempo para su revisión o lectura. A continuación, podemos ver los tipos de publicidad empleados:
      .col-lg-8
        LineaTiempoD.color-secundario.mb-5
          .row.justify-content-center(numero="1" titulo="Publicidad impresa")
            .col-md-11.mb-4.mb-md-0
              p.mb-4 Es todo el material POP como son los folletos, volantes, revistas especializadas, plegables, insertos, cupones o bonos que nos ayudan a impulsar y generar la acción de ventas por lo general en la tienda física. Este material se le entrega al cliente con toda la información de los productos o una campaña especial de temporada con descuentos especiales.
              figure
                img(src='@/assets/curso/tema2/img02.png')
          .row.justify-content-center(numero="2" titulo="Publicidad <em>online</em>")
            .col-md-11.mb-4.mb-md-0
              p.mb-4 Es la que realizamos en internet como son páginas #[i web]. redes sociales, buscadores.
              p.mb-4 Está de moda por su bajo costo de inversión y permite una interacción en tiempo real por medio de las herramientas tecnológicas.
              figure
                img(src='@/assets/curso/tema2/img03.png')
          .row.justify-content-center(numero="3" titulo="Publicidad en medios de comunicación")
            .col-md-11.mb-4.mb-md-0
              p.mb-4 Las empresas deciden utilizar para realizar la publicidad de sus productos, medios tradicionales como la televisión, la cual es el medio favorito de los anunciantes y la radio que cada vez utilizan menos para pautar.
              figure
                img(src='@/assets/curso/tema2/img04.png')
          .row.justify-content-center(numero="4" titulo="Publicidad exterior")
            .col-md-11.mb-4.mb-md-0
              p.mb-4 Es uno de los tipos de publicidad que continuamente innova y genera tendencias con el material que crean las agencias como vallas publicitarias, avisos luminosos, poster, afiches publicitarios, entre otros.
              figure
                img(src='@/assets/curso/tema2/img05.png')
          .row.justify-content-center(numero="5" titulo="Webinar")
            .col-md-11.mb-4.mb-md-0
              p.mb-4 Todo tipo de eventos digitales los podemos realizar de manera sincrónica con los clientes en horarios cómodos para ellos. Permite intervenir con varias personas y siempre se encuentra un moderador a cargo.
              figure
                img(src='@/assets/curso/tema2/img06.png')
          .row.justify-content-center(numero="6" titulo="Experiencia cliente IA")
            .col-md-11.mb-4.mb-md-0
              p.mb-4 Crear actividades para que el cliente interactúe con la marca es una opción. Estos pueden ser juegos, retos o actividades.
              figure
                img(src='@/assets/curso/tema2/img07.png')
          .row.justify-content-center(numero="7" titulo="Redes sociales")
            .col-md-11.mb-4.mb-md-0
              p.mb-4 Permite por medio de la internet crear contenido de la marca para ser cargado a las diferentes plataformas digitales generando relación entre clientes y usuarios con intereses  comunes.
              figure
                img(src='@/assets/curso/tema2/img08.png')

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4
        .h4.mb-4
          <div style="color:#7714B7;"> ● Tendencias de innovación </div>

        .cajon.color-primario.p-4.mb-4(data-aos="fade-right")
          p La pandemia que inició en el año 2020 aceleró las tendencias empresariales tecnológicas a pasos agigantados y la transformación digital tomó el liderazgo en las estrategias de mercadeo. Para las organizaciones es necesario contar con plataformas digitales que faciliten al consumidor las compras, ventas y pagos de manera digital de los productos o servicios que adquieren de manera #[i online] o en la tienda física.
        
        p La practicidad es lo que busca el cliente para realizar las actividades diarias, y la innovación tecnológica, logra cumplir este objetivo con aplicaciones que, desde su teléfono, sin importar el lugar donde esté, pueda tener información rápida y efectiva. 
      .col-lg-6.tarjeta.color-light-blue-r.mb-4
        p.text-center.mb-0 Las tendencias innovadoras actuales para empresas son:
      .col-lg-10.tarjeta.color-gradient-bottom.mb-4
        LineaTiempoB.mb-4(:datos="datosLineaTiempoB")
        figure.mb-4 
          img(src='@/assets/curso/hr.svg')
        p Y las herramientas tecnológicas que se están implementados en esta nueva era digital son:
      .col-lg-10.mb-4
        SlyderC.p-0(:datos="datosSlyder")
      .col-lg-10
        img(src='@/assets/curso/hr.svg')
    
    .h4.mb-4
      <div style="color:#7714B7;"> ● Piezas publicitarias y material de promoción </div>
    
    p.mb-4 Las piezas publicitarias nos permiten recrear la mente del público, llamar la atención como se dice en merchandising, seducirlos, lograr que lo primero en la mente del cliente sea la marca de la empresa. A continuación, podemos observar el siguiente video donde se presentan las piezas publicitarias más conocidas:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.color-gray-r.p-4.mb-4
          p Ahora bien, la publicidad digital utiliza técnicas de difusión, comunicación y promoción de pago de una empresa o marca que son lanzadas en un entorno digital, colocando canales y plataformas que ayudan a poder llegar a un público potencial, además es presentada en varios formatos de publicidad.
      .col-lg-8
        ImagenInfografica.color-secundario.mb-5(data-aos="flip-down")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img19.png')

          .tarjeta.color-gray.p-3(x="16%" y="35%" numero="+")
            figure.mb-4
              img(src='@/assets/curso/tema2/img20.png')
            p Se ubica en la #[i web] y en redes sociales, se integra el contenido a la plataforma donde se publica para promocionar la marca.
          .tarjeta.color-gray.p-3(x="38%" y="35%" numero="+")
            figure.mb-4
              img(src='@/assets/curso/tema2/img21.png')
            p Conocidos como #[i banner] , es un elemento publicitario por clic en internet que colocamos en portales o en la #[i web].
          .tarjeta.color-gray.p-3(x="62%" y="35%" numero="+")
            figure.mb-4
              img(src='@/assets/curso/tema2/img22.png')
            p Campañas digitales apoyadas por buscadores integrando anuncios digitales.
          .tarjeta.color-gray.p-3(x="84%" y="35%" numero="+")
            figure.mb-4
              img(src='@/assets/curso/tema2/img23.png')
            p Mensajes que son enviados por la empresa con la finalidad de adquirir nuevos clientes.
          .tarjeta.color-gray.p-3(x="16%" y="82%" numero="+")
            figure.mb-4
            img(src='@/assets/curso/tema2/img27.png')
            p Los consumidores pasan horas navegando y las campañas se deben  hacer pensando en los dispositivos móviles.
          .tarjeta.color-gray.p-3(x="38%" y="82%" numero="+")
            figure.mb-4
              img(src='@/assets/curso/tema2/img26.png')
            p Segmentaciones precisas con millones de usuarios  para llegar a un público objetivo.
          .tarjeta.color-gray.p-3(x="62%" y="82%" numero="+")
            figure.mb-4
              img(src='@/assets/curso/tema2/img25.png')
            p Anuncios display  personalizados en #[i website] de forma inteligente.
          .tarjeta.color-gray.p-3(x="84%" y="82%" numero="+")
            figure.mb-4
                img(src='@/assets/curso/tema2/img24.png')
            p Fortalece las campañas tradicionales y es más efectivo para llegar a la audiencia.
              
    separador
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Globalización empresarial',
        texto: 'Tener presencia física y también <em>online</em>.',
        icono: require('@/assets/curso/tema2/img09.svg'),
      },
      {
        titulo: 'La transformación cultural',
        texto:
          'Aprovecha las herramientas digitales para posicionar marcas desde casa.',
        icono: require('@/assets/curso/tema2/img10.svg'),
      },
      {
        titulo: 'Teletrabajo',
        texto:
          'Con las personas pasando tiempo en casa por trabajo, la tendencia a comprar en línea ha aumentado significativamente.',
        icono: require('@/assets/curso/tema2/img11.svg'),
      },
      {
        titulo: 'Inteligencia artificial',
        texto:
          'Permite con la tecnología ofrecer soluciones a situaciones a veces complejas como atender en un horario extendido chat o mensajes.',
        icono: require('@/assets/curso/tema2/img12.svg'),
      },
      {
        titulo: 'Asistentes digitales con voz',
        texto:
          'Apoyo en los negocios con asistentes digitales disponibles en todos los horarios y días de la semana así el cliente siempre tendrá rápida respuesta.',
        icono: require('@/assets/curso/tema2/img13.svg'),
      },
      {
        titulo: 'Internet de las cosas',
        texto: 'Gestionar información y soluciones tecnológicas basadas en 5G.',
        icono: require('@/assets/curso/tema2/img14.svg'),
      },
      {
        titulo: 'Realidad virtual y realidad aumentada',
        texto:
          'Los clientes quieren vivir experiencias únicas con sus productos y esta tendencia lo lleva a un entorno similar para que el cliente pueda disfrutar de una experiencia antes de adquirir el producto.',
        icono: require('@/assets/curso/tema2/img15.svg'),
      },
      {
        titulo: 'Automatización de los procesos',
        texto:
          'Cada día se requiere de procesos menos complejos y más prácticos al momento de realizar un negocio.',
        icono: require('@/assets/curso/tema2/img16.svg'),
      },
    ],
    datosSlyder: [
      {
        titulo: 'Código de barras',
        texto:
          'Identificación rápida del producto en cualquier tienda como son sus especificaciones, disponibilidad y precio. Es Universal porque se puede encontrar en los países donde la marca haga presencia en los diferentes formatos comerciales. Se identifica por barras o líneas paralelas blancas y negras de diferente forma o grosor. Se utiliza por medio de un lector óptico que hace las funciones de escáner.',
        imagen: require('@/assets/curso/tema2/img17.png'),
      },
      {
        titulo: 'Códigos QR',
        texto:
          'Contiene información digital de los productos y servicios, es más fácil su uso y no se limita como el código de barras, porque permite descargar la información desde cualquier teléfono celular, iPad, o Tablet. <br><br>Es una combinación de letras o de números que identifican un producto o a una persona, y permiten realizar determinadas operaciones o manejar algunos aparatos. <br><br>También se define como una combinación de barras y cuadros que acompaña a un producto o unidad de consumo para que pueda ser leído y descifrado mediante un lector óptico que transmite los datos a una máquina o una computadora. <br><br>Para obtener esta aplicación se puede descargar gratuitamente del Play Store (Google) App Store (Apple) o BlackBerry World (Blackberry) AppGallery (plataforma oficial para Huawei)',
        imagen: require('@/assets/curso/tema2/img17.png'),
      },
    ],
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
