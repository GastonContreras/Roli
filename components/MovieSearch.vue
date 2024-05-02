<template>
    <div class="search-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Buscar películas..."
        class="search-input"
      >
      <button @click="searchMovies" class="search-button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      async searchMovies() {
        try {
          const response = await fetch(`http://www.omdbapi.com/?t=${this.searchQuery}&apikey=b1bc5133`);
          const data = await response.json();
          if (data.Response === 'True') {
            this.$router.push({ path: '/detail', query: { t: data.imdbID} });
            console.log(data.Title)
          } else {
            console.error('No se encontraron resultados');
          }
        } catch (error) {
          console.error('Error al buscar películas:', error);
        }
      }
    }
  };
  </script>
    
  <style scoped>
  .search-container {
    display: flex;
    align-items: center;
  }
  
  .search-input {
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.9); /* Color de fondo ligeramente transparente */
    width: 300px; /* Ancho del campo de búsqueda */
    font-size: 16px;
    color: #333; /* Color del texto */
    max-height: 50px; /* Altura máxima del campo de búsqueda */
  }
  
  .search-input:focus {
    outline: none; /* Quita el contorno al enfocar */
  }
  
  .search-button {
    margin-left: 10px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: gray; /* Color de fondo del botón */
    color: white; /* Color del ícono */
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: black; /* Cambia el color de fondo al pasar el mouse */
  }
  
  .fa-search {
    font-size: 18px;
  }
  </style>