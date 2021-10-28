<template>
  <v-sheet height="657" class="overflow-hidden" style="position: relative">
    <v-btn
      color="#266439"
      fab
      class="botondesplegable"
      @click.stop="drawer = !drawer"
    >
      <img src="../assets/fondos/desplegable.png" alt="" />
    </v-btn>

    <button @click="cerrar" class="iniciosesion">
      <img
        class="iconopersona"
        src="../assets/fondos/iconopersona.png"
        alt=""
      />
      <h2 class="letrasesion">Cerrar sesión</h2>
    </button>

<div class="circulo1">
      <img src="../assets/menu/circuloGrande.png" alt="" />
    </div>
    <div class="circulo2">
      <img src="../assets/menu/circulomedianoGrande.png" alt="" />
    </div>
    <div class="circulo3">
      <img src="../assets/menu/circulomedianoPequeño.png" alt="" />
    </div>
    <div class="circulo4">
      <img src="../assets/menu/circuloPequeño.png" alt="" />
    </div>


    <div class="abuelito1">
      <img src="../assets/menu/abuelito1.png" alt="" />
    </div>
    <div class="abuelito3">
      <img src="../assets/menu/abuelito3.png" alt="" />
    </div>
    <div class="abuelito2">
      <img src="../assets/menu/abuelito2.png" alt="" />
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="fondocuadrodesplegable"
    >
      <v-list-item class="fondonegro">
        <v-list-item-avatar>
          <v-img src="../assets/fondos/logomenu.jpg" alt=""></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="letrahogar"
            >HOGAR SAN JOSÉ</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list dense>
        <v-list-item class="sombra">
          <v-list-item-content>
            <v-list-item-title style="font-size: 20px" class="titulosombra mt-2"
              >ingresos</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombraverde">
          <v-list-item-icon>
            <v-icon>mdi-clipboard-text</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link class="link" to="/rubros"
              ><v-list-item-title style="font-size: 20px" class="titulomuenu1"
                >Rubro</v-list-item-title
              ></router-link
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombraverde">
          <v-list-item-icon>
            <v-icon>mdi-clipboard-text</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link class="link" to="/ingresos"
              ><v-list-item-title style="font-size: 20px" class="titulomuenu2"
                >Ingresos</v-list-item-title
              ></router-link
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombra">
          <v-list-item-content>
            <v-list-item-title style="font-size: 20px" class="titulosombra mt-2"
              >Personas</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombraverde">
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link class="link" to="/personas">
              <v-list-item-title style="font-size: 20px" class="titulomuenu3"
                >Personas</v-list-item-title
              ></router-link
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombraverde">
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link class="link" to="/usuarios"
              ><v-list-item-title style="font-size: 20px" class="titulomuenu4"
                >Usuarios</v-list-item-title
              ></router-link
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombraverde">
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link class="link" to="/beneficiarios">
              <v-list-item-title style="font-size: 20px" class="titulomuenu5"
                >Beneficiarios</v-list-item-title
              ></router-link
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombraverde">
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link class="link" to="/contactos">
              <v-list-item-title style="font-size: 20px" class="titulomuenu5"
                >Contactos</v-list-item-title
              ></router-link
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombra">
          <v-list-item-content>
            <v-list-item-title style="font-size: 20px" class="titulosombra mt-2"
              >Gastos</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombraverde">
          <v-list-item-icon>
            <v-icon>mdi-clipboard-text</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link class="link" to="/gastos">
              <v-list-item-title style="font-size: 20px" class="titulomuenu7"
                >Gastos</v-list-item-title
              >
            </router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombra">
          <v-list-item-content>
            <v-list-item-title style="font-size: 20px" class="titulosombra mt-3"
              >Información general</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombraverde">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link class="link" to="/informeIngresos">
              <v-list-item-title style="font-size: 20px" class="titulomuenu6"
                >Inf. ingresos</v-list-item-title
              ></router-link
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item class="sombraverde">
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link class="link" to="/informeGastos">
              <v-list-item-title style="font-size: 20px" class="titulomuenu7"
                >Inf. gastos</v-list-item-title
              ></router-link
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>
<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
  methods: {
    cerrar() {
      Swal.fire({
        background: "black",
        position: "top-center",
        icon: "success",
        title: "Su sesión ha finalizado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$store.dispatch("setToken", "");
      this.$router.push("/");
    },
  },
};
</script>
<style>
/*tipografía*/
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

.botondesplegable {
  position: absolute;
  left: 30px;
  top: 5px;
}
.overflow-hidden {
  position: fixed;
  width: 1366px;
  background-image: url("../assets/fondos/Fondo_solo_ 1.png");
}
.fondocuadrodesplegable {
  position: fixed;
  background-image: url("../assets/fondos/tabla.png");
  height: 800px;
}
.fondonegro {
  background-color: #000000;
}
.letrahogar {
  color: white;
  font-family: "Fredoka One";
}
.iniciosesion {
  position: absolute;
  width: 260px;
  height: 60px;
  left: 1080px;
  top: 5px;
  padding-left: 7px;
  background: #266439;
  border-radius: 25px;
}
.iconopersona {
  float: left;
}
.letrasesion {
  color: white;
  padding-right: 7px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
}
.titulomuenu1 {
  color: white;
  font-family: "Raleway", sans-serif;
  height: 25px;
  text-decoration: none;
}
.sombraverde:hover {
  background-color: #41835185;
}
.titulomuenu2 {
  color: white;
  font-family: "Raleway", sans-serif;
  height: 25px;
  text-decoration: none;
}
.titulomuenu3 {
  color: white;
  font-family: "Raleway", sans-serif;
  height: 25px;
  text-decoration: none;
}
.titulomuenu4 {
  color: white;
  font-family: "Raleway", sans-serif;
  height: 25px;
  text-decoration: none;
}
.titulomuenu5 {
  color: white;
  font-family: "Raleway", sans-serif;
  height: 25px;
}
.titulomuenu6 {
  color: white;
  font-family: "Raleway", sans-serif;
  height: 25px;
  text-decoration: none;
}
.titulomuenu7 {
  color: white;
  font-family: "Raleway", sans-serif;
  height: 25px;
  text-decoration: none;
}
.link {
  text-decoration: none;
}
.titulosombra {
  color: white;
  font-family: "Fredoka One";
  height: 20px;
}
.sombra {
  background-color: rgba(0, 0, 0, 0.445);
}

/*Abuelos en el menú */
.abuelito1 {
  position: absolute;
  width: 441px;
  height: 497px;
  left: 275px;
  top: 130px;
}
.abuelito2 {
  position: absolute;
  width: 587px;
  height: 571px;
  left: 590px;
  top: 200px;
}
.abuelito3 {
  position: absolute;
  width: 600px;
  height: 665px;
  left: 900px;
  top: 145px;
}

/**Circulos*/

.circulo1 {
  position: absolute;
  width: 398px;
  height: 408px;
  left: 100px;
  top: 100px;
}
.circulo2 {
  position: absolute;
  width: 160px;
  height: 159px;
  left: 1060px;
  top: 90px;
}
.circulo3 {
  position: absolute;
  width: 96px;
  height: 96px;
  left: 620px;
  top: 50px;
}
.circulo4 {
  position: absolute;
  width: 254px;
  height: 254px;
  left: 90px;
  top: 500px;
}
</style>