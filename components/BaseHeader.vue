<template>
  <nav class="nav">
        <div class="nav-logo"><NuxtLink to="/" class="link"><p>Roli</p></NuxtLink>
        </div>
        <div class="nav-menu" id="navMenu">
          <ul>
            <li>
              <MovieSearch></MovieSearch>
        </li>
            <li v-if=isLoggedIn><NuxtLink to="/" class="link" @click="logout">Cerrar sesión</NuxtLink></li>
            <li v-else><NuxtLink to="/login" class="link">Inicia sesión</NuxtLink></li>
            
          </ul>
        </div>
      </nav>
</template>

<script>
export default {
  data() {
    return {
      isResponsive: false,
      //lo inicio como falso
      isLoggedIn: false
    };
  },
  mounted() {
    // aca lo actualizo segun el valor actual de localStorage
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  },
  methods: {
    toggleResponsive() {
      this.isResponsive = !this.isResponsive;
    },
    //Deslogueo el usuario manteniendome en la misma pagina, cambio mi variable local y actualizo localStorage
    logout() {
      localStorage.setItem("isLoggedIn", false)
      this.isLoggedIn = false;
      console.log(localStorage.getItem("isLoggedIn"))
    }
  }
}
;
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  .nav {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100px;
    line-height: 100px;
    background: linear-gradient(rgba(39, 39, 39, 0.6), transparent);
    z-index: 100;
  }
  
  .nav-logo p {
    color: white;
    font-size: 25px;
    font-weight: 600;
  }
  
  .nav-menu ul {
    display: flex;
    align-items: center;
  }
  
  .nav-menu ul li {
    list-style-type: none;
  }
  
  .nav-menu ul li .link {
    text-decoration: none;
    font-weight: 500;
    color: #fff;
    padding-bottom: 15px;
    margin: 0 25px;
  }
  
  .link:hover,
  .active {
    border-bottom: 2px solid #fff;
  }
  /* Estilos para NuxtLinks */
  a.nuxt-link-exact-active {
    border-bottom: 2px solid #fff;
  }
  .search-box {
  display: flex;
  align-items: center;
}

.search-box input[type="text"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  width: 200px; /* Ancho del campo de búsqueda */
  height: 30px; /* Altura del campo de búsqueda */
  background-color: rgba(255, 255, 255, 0.9); /* Color de fondo ligeramente transparente */
}

.search-box input[type="text"]::placeholder {
  color: #999; /* Color del texto de marcador de posición */
}

.search-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.9); /* Color de fondo ligeramente transparente */
  cursor: pointer;
}

.search-button:hover {
  background-color: rgba(255, 255, 255, 0.7); /* Cambia el color de fondo al pasar el mouse */
}
  </style>