<template>
    <div class="full-size-container">
      <BaseHeader></BaseHeader>
      <div class="movie-details">
    <div v-if="movie === null"></div>
    <div v-else class="container">
      <div class="banner">
        <img :src="movie.Poster" alt="Movie Banner">
      </div>
      <div class="details">
        <h2>{{ movie.Title }}</h2>
        <p><strong>Género:</strong> {{ movie.Genre }}</p>
        <p><strong>Fecha de lanzamiento:</strong> {{ movie.Released }}</p>
        <p><strong>Director:</strong> {{ movie.Director }}</p>
        <p><strong>Puntuación:</strong> {{ movie.imdbRating }}/10</p>
        <p><strong>Escritores:</strong> {{ movie.Writer }}</p>
        <p><strong>Actores:</strong> {{ movie.Actors }}</p> 
        <p v-if="movie.Awards"><strong>Premiaciones:</strong> {{ movie.Awards }}</p>
      </div>
    </div>
  </div>
    </div>
    </template>
  
  <style> 
  .full-size-container {
  width: 100vw; /* Ancho al 100% del viewport */
  height: 100vh; /* Altura al 100% del viewport */
  margin: 0;
  padding: 0;
  background-image: url('/public/1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Imagen de fondo fija */
  background-position: center;
  overflow-y: auto; /* Permitir el desplazamiento vertical si el contenido excede la altura */
}
.movie-details {
  margin-top: 20px;
}

.container {
  display: flex;
  margin-top: 100px;
  padding-left: 100px;
  align-items: center;
}

.banner {
  flex: 1;
  margin-right: 20px;
}

.banner img {
  width: 80%;
  height: auto;
  border-radius: 8px;
}

.details {
  position: center;
  flex: 2;
  color: #fff;
}
.details h2 {
  font-size: 24px;
}

.details p {
  font-size: 18px;
}

.details h3 {
  font-size: 20px;
}

.details ul {
  list-style: none;
  padding: 0;
}

.details li {
  margin-bottom: 5px;
}
</style>

<script>
import detail from "../script/detail.js"

export default {
  mixins : [detail],
}
</script>