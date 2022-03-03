<template>
  <div class="login">
    <div class="login__header">
      <router-link to="/">
        <button class="inicioLogin">
          <img class="iconocasa" src="@/assets/fondos/casa.png" alt="home" />
          <h2 class="letrasesionLogin">inicio</h2>
        </button>
      </router-link>
    </div>

    <div class="is-grid">
      <div class="login__phone">
        <img class="phone" src="@/assets/fondos/celu.png" alt="phone" />
        <div class="field">
          <label for="tab-1" class="label">Correo</label>
          <input
            type="text"
            id="tab-1"
            v-model.trim="usuario.user"
            class="input"
          />
        </div>
        <div class="field">
          <label for="tab-2" class="label">Contraseña</label>
          <input
            type="password"
            id="tab-2"
            v-model.trim="usuario.pass"
            class="input"
          />
        </div>

        <button @click="ingresar" class="entrar">Entrar</button>
      </div>

      <img class="people" src="@/assets/fondos/login-muñecoooo1.png" />
    </div>

    <img class="piso" src="@/assets/fondos/tabla piso2.png" />
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      usuario: {
        user: null,
        pass: null,
      },
    };
  },
  methods: {
    ingresar() {
      const self=this
      axios
        .post(`usuario/login`, {
          email: this.usuario.user,
          password: this.usuario.pass,
        })
        .then(function (response) {
          console.log("Entrando");
          console.log(response);
          self.$store.dispatch("setToken", response.data.token);
          console.log(response.data.token);
          // console.log("Token 1"+ this.$store.state.token)
          self.$router.push("/menu");
        })
        .catch(function ({ error }) {
          Swal.fire({
            icon: "error",
            backdrop: `
            rgba(0, 0, 0, 0.445)
            left top
            no-repeat
          `,
            title: "USUARIO NO AUTORIZADO",
            text: "Usuario y contraseña incorrectos",
            confirmButtonText: "Aceptar",
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger",
            },
          });
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
/*tipografía*/
/* @import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"); */

.login {
  background-image: url("../assets/fondos/Fondo_solo_ 1.png");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 600px;
  .is-grid {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
  }
  .people {
    position: absolute;
    right: 120px;
    top: 90px;
  }
  &__header {
    display: flex;
    justify-content: end;
    padding: 1rem;
  }
  &__phone {
    position: relative;
    .phone {
      position: absolute;
    }
    .field {
      position: relative;
      top: 5rem;
      left: 180px;
      z-index: 2;
      display: flex;
      flex-direction: column;
    }
  }
}
.piso {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.label {
  font-family: "Kaushan Script", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 52px;

  color: #000000;
}
.input {
  padding-left: 5px;
  padding-right: 5px;
  width: 210px;
  height: 46px;

  background: rgba(0, 121, 71, 0.5);
  border-radius: 30px;
}
a {
  text-decoration: none;
}
.inicioLogin {
  display: flex;
  align-items: center;
  padding-left: 7px;
  background: #266439;
  border-radius: 25px;
}
.letrasesionLogin {
  padding-right: 2px;
  margin: 0;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
  color: #FFFFFF;
}
.iconocasa {
  float: left;
}
.entrar {
  position: absolute;
  width: 150px;
  height: 50px;
  left: 210px;
  top: 330px;
  background: #266439;
  border-radius: 25px;
  color: white;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
  font-size: 20px;
}


@media screen and (max-width:768px) {
  .login {
    overflow: hidden;
    background-position: top;
    min-height: 740px;
    .is-grid {
      justify-content: start;
      grid-template-columns: 1fr;
      padding-top: 5rem;
    }
    .people {
      display: none;
    }
    &__phone {
      .phone {
        left: -104px;
      }
      .field {
        left: 75px;
      }
    }
  }
  .entrar {
    left: 105px;
  }
  .piso {
    bottom: -187px;
    height: 151px;
  }
}
</style>