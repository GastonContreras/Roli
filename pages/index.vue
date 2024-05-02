<template>
  <div class="full-size-container">
    <BaseHeader></BaseHeader>
         <div v-if="items==null"></div>
        <div v-else>
          <section class="movie-grid">
        <MovieCard v-for="item in items" :title="item.title" :imageUrl="item.image" :id="item.id"></MovieCard>
      </section>
      </div>
  </div>
  </template>


  <style> 
  .full-size-container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url('/public/1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Imagen de fondo fija para poder scrolear sin drama */
  background-position: center;
  overflow-y: auto; 
}
  .movie-grid {
    margin-top: 100px;
    min-height:100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
</style>

<script setup>
import movies from '../script/index.js';
const items = movies
</script>
