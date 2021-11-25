<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 Las estrategias de mercadeo para desarrollar venta de productos y servicios en las empresas, es uno de los desafíos más importantes para la reactivación de los sectores del país, encontrando las herramientas tecnológicas con aplicaciones ágiles y sencillas que le genere valor agregado y facilite el servicio a los consumidores creando posicionamiento a la marca.
    
    .row.justify-content-center.mb-4
      .col-lg-6.tarjeta.color-gray.p-1
        p.text-center.mb-0 Se invita a ver el video introductorio a este componente:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
