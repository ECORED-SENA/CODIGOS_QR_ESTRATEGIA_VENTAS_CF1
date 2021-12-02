<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Innovación y tecnología
    .row.justify-content-center.mb-4
      .col-lg-8
        p.text-center Las empresas innovadoras deben cambiar para evolucionar si no implementan nuevas tecnologías tienden a salir del mercado. Transformarse les permite crecer y atraer consumidores al negocio.

    .row.justify-content-center.mb-0
      .col-lg-4.tarjeta.color-gray-r.p-2(data-aos="fade-right")
        p.text-center.mb-0 Conozcamos algunas definiciones:

    .row.justify-content-center.mb-4
      .col-lg-8     
        SlyderF(columnas="col-12")
          .tarjeta.color-blue-gradient.p-4
            .h4.text-center El francés André Piatier (1987)
            p.mb-0 Define la innovación como “una idea transformada en algo vendido o usado”.
            <br><br>
          .tarjeta.color-blue-gradient.p-4
            .h4.text-center El americano Sherman Gee (1981)
            p.mb-0 Afirma que “la innovación es el proceso en el cual a partir de una idea, invención o reconocimiento de una necesidad se desarrolla un producto, técnica o servicio útil hasta que sea comercialmente aceptado”.
          .tarjeta.color-blue-gradient.p-4
            .h4.text-center Joseph A. Schumpeter, economista austríaco (1934)
            p.mb-0 Fue el primero en destacar la importancia de los fenómenos tecnológicos en el crecimiento económico, en un sentido más general que el de las innovaciones específicamente tecnológicas.
      .col-lg-10
        p.mb-4 Según Pere Escorsa & Jaume Valls (2003):
        .row.justify-content-center.tarjeta.color-violet-r(data-aos="fade-right")
          .col-lg-10.col-8.col-sm-12
            .row.p-4
              br
              p Basados en experiencias anteriores, la creatividad y la inspiración del modelo de innovación que se quiere aplicar tecnológico o comercial llevamos a la empresa a un proceso de transformación de sus productos. Con ayuda de la imaginación, aplicando tecnología y uso de la #[i web] y excelente un talento humano no solo se innova se pueden generar nuevas estrategias de comunicación, modelos de negocios, nuevas líneas de productos, alianzas, y punto de venta que permiten la expansión a nivel global.     
          .col-lg-2.col-4.col-sm-6.d-flex
            img(src='@/assets/curso/tema3/img01.png')(data-aos="fade-left")
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        p Como ejemplo de innovación tecnológica que pueden desarrollar las empresas para posicionarse en el mercado, tenemos: 
      .col-lg-3
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Nuevos empaques.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Nuevas materias primas.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Nuevos productos.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Nuevos procesos.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Nuevos materiales.
      .col-lg-7.d-flex
        .cajon.color-acento-contenido.p-4(data-aos="fade-left")
          br
          p En la innovación comercial encontramos: nueva presentación de producto, nueva moda de presentación, empaques, sistemas comerciales, nuevas tecnologías digitales, nuevos formatos de venta y pago.
    
    separador
    #t_3_1.titulo-segundo(data-aos="fade-right")
      .h3 3.1 Códigos QR
    
    p.mb-4 Como su sigla QR (#[i Quick Response]) lo dice, es una respuesta rápida. El código QR tiene la facilidad de acceder a productos y servicios desde su dispositivo móvil, y es la manera actual y eficiente para una campaña de promoción. El código es una idea que transforma su negocio. A continuación, presentamos un storyboard del código QR.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .tarjeta.color-gray-r.p-4
          p Por medio de los #[i smartphones] o teléfonos inteligentes, se pueden realizar varias acciones que permite utilizar el scanner. Para conocer un poco más del tema de los códigos QR lo invitamos a ver un ejemplo en el siguiente video #[i The Hointer Shopping Experience: Buying jeans from a robot-powered apparel startup], el cual se encuentra en el material complementario.
      .col-lg-10.mb-4
        .h4.mb-4
          <div style="color:#7714B7;"> ● Escáner QR y código de barras </div>
        p.mb-0 Los códigos QR llegaron para quedarse. Son una experiencia nueva para el cliente que permite el uso de un teléfono inteligente para realizar la lectura o escaneo de la imagen para obtener una información de un producto o servicio.
      .col-lg-10.mb-4
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img02.png')})`}"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left")
            p.mb-0 Existen escáner de mano y fijos, como los que se utilizan en las cajas de supermercados. La función del escáner es leer el símbolo del código de barras y proporcionar una salida eléctrica a la computadora, correspondiente a las barras y espacios del código de barras. Sin embargo, es el que reconoce la simbología del código, analiza el contenido del código de barras leído y transmite dichos datos a la computadora en un formato de datos tradicional.
      .col-lg-10
        p.text-center A continuación, estudiaremos cuáles son los tipos de códigos QR.
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
      h5 Tabla 1.
      span Tipos de códigos QR
    
    .tabla-a.color-primario.mb-5 
      table
        caption Nota: UNITAG QR, 2020.
        thead
          tr
            th.text-white Nombre
            th.text-white Observación
        tbody
          tr
            th Sitio #[i web]
            td Los usuarios serán dirigidos a una página #[i web] y descubrirán el contenido disponible.
          tr
            th Tarjeta comercial
            td Crea la tarjeta de contactos y puede introducir sus nombres, dirección, número de teléfono, correo electrónico, etc.
          tr
            th Realizar una llamada telefónica
            td Escriba un número de teléfono cuando se crea el código QR y escanea para llamar.
          tr
            th Añadir a la agenda un evento
            td Creado el código QR al añadir el evento a su calendario, se le recordará de la fecha correcta.
          tr
            th Red inalámbrica
            td QR que contienen las credenciales de red inalámbrica.
          tr
            th Enviar un MSM
            td Guarde el contenido y el número de teléfono del destinatario de un mensaje SMS.
          tr
            th Geolocalización
            td Al crear estos códigos QR, introducen las coordenadas de latitud y longitud de un lugar.
          tr
            th Texto sin formato
            td Un texto sin formato se codifica y se mostrará en la pantalla después de escanear
          tr
            th Dinámica QR
            td Muy similar al sitio #[i web] o de visita,  sino que ofrece nuevas características útiles.

    p.mb-4 Para afianzar sus conocimientos y crear códigos QR, lo invitamos a ver el video Código QR: Cómo crearlo y para qué sirve, el cual se encuentra en el material complementario.

    .tarjeta.color-blue-gradient.p-4.mb-4
      .row.justify-content-center.mb-4
        .col-lg-9
          .h4.mb-4
            <div style="color:#7714B7;"> ● Función y características del código de barras </div>
          p.mb-4 Los códigos de barras son un sistema estandarizado para identificar cualquier tipo de producto. Compuesto por números y simbolizado por barras claras y oscuras de ancho variable que pueden ser reconocidas por un computador a través de un lector óptico o escáner. Permite generar información instantánea en el punto de venta e identificar cada producto por medio de un código. En la siguiente figura se puede observar la nomenclatura de un código de barras.
          .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
            h5 Figura 5.
            span Nomenclatura de un código de barras
          img(src='@/assets/curso/tema3/img03.png')(data-aos="flip-up")  

    separador
    #t_3_2.titulo-segundo(data-aos="fade-right")
      .h3 3.2 Teléfonos inteligentes o #[i smartphones]

    .row.mb-4
      .col-lg-8.tarjeta.color-special.d-flex.align-items-center.p-4
        div
          p.mb-4 Un teléfono #[i smartphone] es un teléfono móvil (terminal, dispositivo) también llamado teléfono inteligente.
          p.mb-4 En inglés, Smart significa inteligente y #[i Phone] teléfono. Dispone de un sistema operativo propio capaz de realizar tareas y funciones parecidas a las realizadas por los ordenadores. 
          p.mb-0 El móvil funciona con una tarjeta (SIM) que nos facilita el operador o empresa con el que contratamos el servicio. En el contrato se especifican los servicios contratados: minutos de llamadas gratuitas, coste del resto de llamadas, coste de mensajes SMS, coste de la conexión a internet y otros servicios.
      .col-lg-4.BF01.p-0(data-aos="fade-left")
        img.position-relative(src='@/assets/curso/tema3/img04.svg')
    separador

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        p.mb-4 Según Zaragoza - ayuntamiento (2020):
        p.mb-0 El teléfono tiene una pantalla táctil. Si deslizamos el dedo por ella podemos pasar a otra serie de pantallas con diferentes contenidos como si fueran las páginas de un libro. En todas ellas aparecen iconos (dibujos) que corresponden con iconos del sistema y aplicaciones (app) determinadas. Por ejemplo, al tocar el icono de WhatsApp se abre la aplicación (app). Los teléfonos llevan de fábrica incluidos algunos de estos iconos del sistema, y otros se pueden añadir al teléfono descargándolos de internet. Descargar es “bajar” de la red un programa a nuestro teléfono móvil. El sitio de descarga de app más conocido es #[strong Playstore]. Para su uso debemos tener wifi o datos.
      .col-lg-8.mb-4
        .tarjeta.color-light-blue-r.p-1
          p.mb-0.text-center Por ejemplo, tomemos un iPhone13 y conozcamos sus principales características.
      .col-lg-10.mb-4
        img(src='@/assets/curso/tema3/img05.svg')(data-aos="flip-up")
      .col-lg-8.mb-4
        .cajon.color-primario.p-4(data-aos="fade-right") 
          .h4.mb-4
            <div style="color:#7714B7;"> ● ¿Para qué se utiliza el #[i smartphone]? </div>
          p.mb-0 Tanto el iOS como el Android son tecnología que nos facilita la comunicación instantánea en tiempo real a través de aplicaciones interactivas para realizar llamadas, compras, mensajes, correos, navegadores #[i web], videollamadas, videojuegos, manejo de las redes sociales.
      .col-lg-10.mb-4
        .h4.mb-4
          <div style="color:#7714B7;"> ● Sistemas operativos </div>
        p.mb-4 Los sistemas operativos que hemos visto fueron hechos para computadores de escritorio o computadores portátiles, pero los dispositivos móviles como teléfonos, tabletas y reproductores de mp3 son muy diferentes, por eso sus sistemas operativos son más simples, orientados hacia la conectividad inalámbrica y a necesidades específicas.
    
    .row.justify-content-center.bgImg02.mb-4  
      .col-lg-8.mb-4
        .tarjeta.color-light-blue-r.p-1
          p.text-center La siguiente imagen nos presenta cuáles son los sistemas operativos de los #[i smartphones].
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
          h5 Figura 6.
          span Sistemas operativos #[i smartphones]: Google Android, Apple iOS y Windows #[i Phone]
        figure(data-aos="flip-up")
          img(src='@/assets/curso/tema3/img06.png')
          figcaption Nota: GCF AprendeLibre, 2021.

    .row.justify-content-center.mb-4 
      .col-lg-10.mb-4
        .h4.mb-4
          <div style="color:#7714B7;"> ● Qué es el sistema operativo iOS </div>  
        p.mb-0 De acuerdo a  ZONE & García (2021):
      .col-lg-10.mb-4
        .tarjeta-avatar.mb-4
          img(src='@/assets/curso/tema3/img07.svg')
          .tarjeta.color-light-blue.p-4
            br
            p iOS es un sistema operativo lanzado y utilizado por Apple. Su nombre proviene de iPhone OS. Es decir, iPhone #[i Operative System] o Sistema Operativo de iPhone. Utilizando las siglas, iOS. Se lanzó originalmente para el teléfono de la marca, aunque también se ha utilizado durante años en otros dispositivos de la compañía como en algunos de los reproductores de música iPod o en las tabletas iPad (hasta la llegada de iPadOS)
      .col-lg-10.mb-3  
        p.mb-4 Se trata de un sistema cerrado que no puedes utilizar salvo en dispositivos de marca Apple. La gran diferencia con Android es esta: el sistema operativo de Google puede instalarse en infinidad de teléfonos de todas las marcas, pero iOS es un sistema cerrado y exclusivo para los aparatos de la marca de Cupertino. No para los demás. Al igual que otros sistemas operativos móviles, iOS nos permite instalar aplicaciones para añadir funciones a las que vienen por defecto en el #[i smartphone]. Es decir, más allá del teléfono o los mensajes puedes visitar la App Store en busca de aplicaciones que cumplan alguna función que necesitas, aprender inglés o hacer la compra.

    .row.justify-content-center.mb-4
      .col-lg-10.tarjeta.color-gray-gradient
        .row.justify-content-center
          .col-lg-12.mb-4
            br
          .col-lg-2.col-4.d-flex.mb-4
            img(src='@/assets/curso/tema3/img08.png')
          .col-8.mb-4
            .h4.mb-4
              <div style="color:#7714B7;"> ● Qué es el sistema operativo Android </div>  
            p.mb-4  “Muchas veces se piensa que Android es un teléfono o una tableta, pero no es así. Android es el sistema operativo que utilizan algunos dispositivos móviles para poder funcionar. Es decir, se trata de todo aquello que puedes ver y con lo que puedes interactuar desde la pantalla de su equipo. Antes de sumergirnos y profundizar sobre todo lo que puedes hacer en el fantástico mundo de Android, te mostraremos de una forma muy resumida cómo fue el origen de este sistema operativo”. (GCF AprendeLibre, 2020)
            .row
              .col-lg-6
                a.anexo.mb-4(:href="obtenerLink('/downloads/android.png')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-jpg.svg")
                  .anexo__texto
                    p #[strong Anexo]. ¿Que es Android?
          .col-lg-10.mb-4
            .h4.mb-4
              <div style="color:#7714B7;"> ● 6.	Diferencias entre Android y iOS </div>

            p.mb-4 Teniendo en cuenta ZONE & García (2021):
            p.mb-0  La principal diferencia entre los sistemas Android e iOS es que iOS es un sistema cerrado que sólo funciona en teléfonos de Apple y cuya marca controla. La marca de Cupertino ha sido siempre mucho más cerrada y rígida también en hardware con accesorios específicos, funciones exclusivas y aplicaciones propias. Android funciona en teléfonos de todas las marcas y eso hace que tenga una cuota de mercado mucho mayor gracias a que está instalado en teléfonos de todas las gamas, todas las marcas y todos los precios… iOS es exclusiva de Apple y para Apple. 
          .col-12.p-0
            img(src='@/assets/curso/tema3/img09.png')


</template>

<script>
export default {
  name: 'Tema3',
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
