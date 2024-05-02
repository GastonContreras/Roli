export default {
    data() {
      return {
        //Inicializo todos los datos que puede ingresar el usuario
        loginLeft: '4px',
        registerRight: '-520px',
        loginEmail: '',
        loginPassword: '',
        registerFirstName: '',
        registerLastName: '',
        registerEmail: '',
        registerPassword: '',
        isLoggedIn: false,
      };
    },
    methods: {
      //desplazo formularios segun elija el usuario
      login() {
        this.loginLeft = '4px';
        this.registerRight = '-520px';
      },
      register() {
        this.loginLeft = '-510px';
        this.registerRight = '5px';
      },
      //Cambio mi variable local y actualizo localStorage
      loginUser() {
        this.isLoggedIn= true;
        localStorage.setItem("isLoggedIn", true)
      }
    }
  };
  