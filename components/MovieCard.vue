<template>
    <NuxtLink class="mr-2" :to="{path:'detail', query: { t : `${id}`}}">
    <div class="movie-card">
      <img :src="imageUrl" alt="Movie Poster" class="movie-poster">
      <div class="movie-title">{{ title }}</div>
    </div>
    </NuxtLink>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      id: {
        required: true
      }
    }
  };
  </script>
  
  <style>
  .movie-card {
    position: relative;
    width: 200px; /* Ancho de la tarjeta */
    margin: 10px; /* Espacio entre tarjetas */
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .movie-card:hover {
    transform: scale(1.05); /* Efecto de escala al pasar el mouse */
  }
  
  .movie-poster {
    width: 100%;
    border-radius: 8px; /* Bordes redondeados */
  }
  
  .movie-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
    color: #fff; /* Color del texto */
    font-size: 14px; /* Tamaño de la fuente */
    font-weight: bold; /* Negrita */
    border-bottom-left-radius: 8px; /* Bordes redondeados en la esquina inferior izquierda */
    border-bottom-right-radius: 8px; /* Bordes redondeados en la esquina inferior derecha */
  }
  </style>