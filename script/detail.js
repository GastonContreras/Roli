export default {
  data() {
    return {
      movie: null
    };
  },
  async mounted() {
    const id = this.$route.query.t;
    if (id) {
      await this.fetchMovieDetails(id);
    }
  },
  watch: {
    '$route.query.t'(nuevoId) {
      this.fetchMovieDetails(nuevoId);
    }
  },
  methods: {
    async fetchMovieDetails(id) {
      const url = `http://www.omdbapi.com/?i=${id}&apikey=b1bc5133`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la película');
        }
        const movieData = await response.json();
        this.movie = movieData;
      } catch (error) {
        console.error(error);
      }
    }
  }
}