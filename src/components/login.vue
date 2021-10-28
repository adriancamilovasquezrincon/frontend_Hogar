<template>
  <div class="fondosolo">
    <div>
      <router-link to="/">
        <button class="inicioLogin">
          <img class="iconocasa" src="../assets/fondos/casa.png" alt="" />
          <h2 class="letrasesionLogin">inicio</h2>
        </button></router-link
      >
    </div>

    <div class="piso"></div>
    <div class="celular">
      <label for="tab-1" class="email">Correo</label>
      <input type="text" v-model="usuario.user" class="inputemail" />

      <label for="tab-2" class="email2">Contraseña</label>
      <input type="password" v-model="usuario.pass" class="inputemail2" />

      <button @click="ingresar" class="entrar">Entrar</button>
    </div>

    <div class="persona"></div>
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
      const me = this;
      axios
        .post(`usuario/login`, {
          email: me.usuario.user,
          password: me.usuario.pass,
        })
        .then(function (response) {
          console.log("Entrando");
          console.log(response);
          me.$store.dispatch("setToken", response.data.token);
          console.log(response.data.token);
          // console.log("Token 1"+ this.$store.state.token)
          me.$router.push("/menu");
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
<style>
/*tipografía*/
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

.fondosolo {
  position: fixed;
  width: 1366px;
  height: 625px;
  background-image: url("../assets/fondos/Fondo_solo_ 1.png");
}
.celular {
  position: absolute;
  width: 783px;
  height: 745px;
  left: 166px;
  top: 80px;
  background-image: url("../assets/fondos/celu.png");
}
.persona {
  position: absolute;
  width: 390px;
  height: 630px;
  left: 924px;
  top: 160px;
  background-image: url("../assets/fondos/login-muñecoooo1.png");
}
.piso {
  position: absolute;
  width: 1366px;
  height: 124px;
  top: 535px;
  background-image: url("../assets/fondos/tabla piso2.png");
}
.email {
  position: absolute;
  width: 83px;
  height: 52px;
  left: 200px;
  top: 100px;

  font-family: "Kaushan Script", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 52px;

  color: #000000;
}
.inputemail {
  position: absolute;
  padding-left: 5px;
  padding-right: 5px;
  width: 210px;
  height: 46px;
  left: 180px;
  top: 150px;

  background: rgba(0, 121, 71, 0.5);
  border-radius: 30px;
}
.email2 {
  position: absolute;
  width: 83px;
  height: 52px;
  left: 200px;
  top: 200px;

  font-family: "Kaushan Script", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 52px;

  color: #000000;
}
.inputemail2 {
  position: absolute;
  padding-left: 5px;
  padding-right: 5px;
  width: 210px;
  height: 46px;
  left: 180px;
  top: 250px;

  background: rgba(0, 121, 71, 0.5);
  border-radius: 30px;
}
.inicioLogin {
  position: absolute;
  width: 150px;
  height: 60px;
  left: 1170px;
  top: 5px;
  padding-left: 7px;
  background: #266439;
  border-radius: 25px;
}
.letrasesionLogin {
  color: white;
  padding-right: 2px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
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
</style>