<template>
  <div class="fondito">
    <div>
      <router-link to="/">
        <button class="inicioContacto">
          <img class="iconocasaContacto" src="../assets/fondos/casa.png" alt="" />
          <h2 class="letrasesionContacto">inicio</h2>
        </button></router-link
      >

      <router-link to="/login">
        <button class="iniciosesionContacto">
          <img
            class="iconopersonaContacto"
            src="../assets/fondos/iconopersona.png"
            alt=""
          />
          <h2 class="letrasesionContacto">inicio sesión</h2>
        </button></router-link
      >
    </div>

    <h1 class="contacto">¡Puedes Contactarnos!</h1>

    <div class="mesita">
      <img src="../assets/imagenesHogar/contactarnos/mesita.png" alt="" />
    </div>
    <div class="computadorContacto">
      <img src="../assets/imagenesHogar/contactarnos/computador1.png" alt="" />
    </div>

    <div>
      <h4 id="telefonoContacto">Teléfono</h4>

      <input class="llamarContacto" type="text" v-model="contactanos.telefono" />

      <h4 id="emailContacto">Correo electrónico</h4>

      <input class="correoContacto" type="text" v-model="contactanos.correo" />

      <h4 id="nombresContacto">Nombres</h4>

      <input class="nombreContacto" type="text" v-model="contactanos.nombres" />

      <button @click="enviarInfo" type="button" class="entrarContacto">Enviar</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "",
  data() {
    return {
      contactanos: {
        telefono: null,
        correo: null,
        nombres: null,
      },
    };
  },
  methods: {
    enviarInfo() {
      const me = this;
      let header = { headers: { token: this.$store.state.token } };
      console.log(this.contactanos);

      axios
        .post(
          "contacto/guardar",
          {
            telefono: me.contactanos.telefono,
            correo: me.contactanos.correo,
            nombres: me.contactanos.nombres,
          },
          header
        )
        .then((response) => {
          console.log("Contacto enviado");
          console.log(response);
          this.contactanos.telefono = "",
          this.contactanos.correo = "",
          this.contactanos.nombres = ""
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Enviado",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.llamarContacto {
  position: absolute;
  padding-left: 5px;
  padding-right: 5px;
  width: 290px;
  height: 56px;
  left: 960px;
  top: 240px;

  background: rgba(0, 121, 71, 0.5);
  border-radius: 30px;
}
.correoContacto {
  position: absolute;
  padding-left: 5px;
  padding-right: 5px;
  width: 290px;
  height: 56px;
  left: 960px;
  top: 360px;

  background: rgba(0, 121, 71, 0.5);
  border-radius: 30px;
}
.nombreContacto {
  position: absolute;
  padding-left: 5px;
  padding-right: 5px;
  width: 290px;
  height: 56px;
  left: 960px;
  top: 470px;

  background: rgba(0, 121, 71, 0.5);
  border-radius: 30px;
}
.fondito {
  position: fixed;
  width: 1366px;
  height: 800px;
  background-image: url("../assets/imagenesHogar/contactarnos/fondito.png");
}
.computadorContacto {
  position: absolute;
  left: 30px;
  top: 120px;
}
.mesita {
  position: absolute;
  top: 532px;
}
.contacto {
  color: rgba(0, 0, 0, 0.61);
  text-align: center;
  margin-top: 60px;
  font-family: "Fredoka One", cursive;
  font-size: 60px;
}
.rectangulo {
  position: absolute;
  left: 920px;
  top: 220px;
}
.rectangulo2 {
  position: absolute;
  left: 920px;
  top: 340px;
}
.rectangulo3 {
  position: absolute;
  left: 920px;
  top: 460px;
}
.entrarContacto {
  position: absolute;
  width: 150px;
  height: 50px;
  left: 1030px;
  top: 550px;
  background: #266439;
  border-radius: 25px;
  color: white;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
  font-size: 20px;
}
#telefonoContacto {
  position: absolute;
  left: 960px;
  top: 190px;
  font-size: 22px;
  font-family: "Kaushan Script", cursive;
}
#emailContacto {
  position: absolute;
  left: 960px;
  top: 310px;
  font-size: 22px;
  font-family: "Kaushan Script", cursive;
}
#nombresContacto {
  position: absolute;
  left: 960px;
  top: 430px;
  font-size: 22px;
  font-family: "Kaushan Script", cursive;
}
#llamarContacto {
  position: absolute;
  left: 960px;
  top: 250px;
  color: black;
  font-family: "Kaushan Script", cursive;
}
.inicioContacto {
  position: absolute;
  width: 150px;
  height: 60px;
  left: 10px;
  top: 5px;
  padding-left: 7px;
  background: #266439;
  border-radius: 25px;
}
.iconocasaContacto {
  float: left;
}
.iniciosesionContacto {
  position: absolute;
  width: 230px;
  height: 60px;
  left: 1110px;
  top: 5px;
  padding-left: 5px;
  background: #266439;
  border-radius: 25px;
}
.iconopersonaContacto {
  float: left;
}
.letrasesionContacto {
  color: white;
  padding-right: 7px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
}
</style>