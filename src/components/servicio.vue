<template>
  <div class="fondo">
    <h1 class="servicios">Servicios</h1>

    <div>
      <router-link to="/">
        <button class="inicioServicio">
          <img class="iconocasa" src="../assets/fondos/casa.png" alt="" />
          <h2 class="letrasesionServicio">inicio</h2>
        </button></router-link
      >

      <router-link to="/login">
        <button class="iniciosesionServicio">
          <img
            class="iconopersona"
            src="../assets/fondos/iconopersona.png"
            alt=""
          />
          <h2 class="letrasesionServicio">inicio sesión</h2>
        </button></router-link
      >
    </div>

    <div class="marco1">
      <img class="marco1a" src="../assets/imagenesHogar/marco.png" alt="" />
      <div class="cuadroSer">
        <img
          class="cuadradoCambiar"
          src="../assets/imagenesHogar/cuadrado.png"
          alt=""
        />
        <router-link to="/servicioAtencion">
          <h3 id="atencion">Servicio Atención</h3></router-link
        >
      </div>
    </div>
    <div class="marco2">
      <img class="marco2a" src="../assets/imagenesHogar/marcos.png" alt="" />
      <div class="cuadroSer2">
        <img
          class="cuadradoCambiar2"
          src="../assets/imagenesHogar/cuadrado.png"
          alt=""
        />
        <router-link to="/servicioFormacion">
          <h3 id="formacion">Servicio formación</h3></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "servicio",
  data() {
    return {};
  },
};
</script>
<style>
.servicios {
  text-align: center;
  margin-top: 80px;
  font-size: 60px;
  color: rgba(0, 0, 0, 0.61);
  font-family: "Fredoka One", cursive;
}
.fondo {
  position: fixed;
  width: 1366px;
  height: 800px;
  background-image: url("../assets/imagenesHogar/Fondo_solo_ 3.png");
}
.marco1 {
  position: absolute;
  left: 250px;
  top: 175px;
}
.marco2 {
  position: absolute;
  left: 800px;
  top: 175px;
}
.cuadroSer {
  position: absolute;
  left: 36px;
  top: 242px;
}
.cuadroSer2 {
  position: absolute;
  left: 35px;
  top: 242px;
  margin-left: 1px;
}

#atencion {
  position: absolute;
  left: 22px;
  top: 35px;
  font-size: 32px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #000000;
}
#formacion {
  position: absolute;
  left: 22px;
  top: 35px;
  font-size: 32px;
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #000000;
}
.inicioServicio {
  position: absolute;
  width: 150px;
  height: 60px;
  left: 10px;
  top: 5px;
  padding-left: 7px;
  background: #266439;
  border-radius: 25px;
}
.iconocasa {
  float: left;
}
.iniciosesionServicio {
  position: absolute;
  width: 230px;
  height: 60px;
  left: 1110px;
  top: 5px;
  padding-left: 5px;
  background: #266439;
  border-radius: 25px;
}
.iconopersona {
  float: left;
}
.letrasesionServicio {
  color: white;
  padding-right: 7px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
}
@media screen and (max-width: 425px) {
  .servicios {
    text-align: center;
    margin-top: 86px;
    font-size: 50px;
    color: rgba(0, 0, 0, 0.61);
    font-family: "Fredoka One", cursive;
  }
  .fondo {
    position: absolute;
    width: 424px;
    height: 840px;
    background-image: url("../assets/Celular/servicios/Fondo.png");
  }
  /**Marcos arreglados */
  .marco1 {
    position: absolute;
    left: 100px;
    top: 175px;
  }
  .marco2 {
    position: absolute;
    left: 100px;
    top: 175px;
  }
  .marco1a {
    position: absolute;
    width: 240px;
    height: 265.06px;
    top: 5px;
  }
  .marco2a {
    position: absolute;
    width: 240px;
    height: 265.06px;
    top: 278px;
  }
  /**Cuadros */
  .cuadroSer {
    position: absolute;
    top: 164px;
    left: 26.3px;
  }
  .cuadradoCambiar {
    position: absolute;
    width: 187px;
    height: 87px;
  }

  .cuadroSer2 {
    position: absolute;
    left: 25.4px;
    top: 435px;
  }
  .cuadradoCambiar2 {
    position: absolute;
    width: 187px;
    height: 87px;
  }

  #atencion {
    position: absolute;
    left: 42px;
    top: 8px;
    font-size: 26px;
    text-align: center;
    font-family: "Raleway", sans-serif;
    color: #000000;
  }
  #formacion {
    position: absolute;
    left: 42px;
    top: 8px;
    font-size: 26px;
    text-align: center;
    font-family: "Raleway", sans-serif;
    color: #000000;
  }
  .inicioServicio {
    position: absolute;
    width: 150px;
    height: 50px;
    left: 10px;
    top: 5px;
    padding-left: 7px;
    background: #266439;
    border-radius: 25px;
  }
  .iconocasa {
    width: 32px;
    height: 25px;
    top: 1px;
    left: 8px;
    position: relative;
  }
  .iniciosesionServicio {
    position: absolute;
    width: 200px;
    height: 50px;
    left: 216px;
    top: 5px;
    padding-left: 5px;
    background: #266439;
    border-radius: 25px;
  }
  .iconopersona {
    width: 30px;
    height: 25px;
    top: 3px;
    left: 8px;
    position: relative;
  }
  .letrasesionServicio {
    color: white;
    padding-right: 12px;
    font-family: "Fredoka One", cursive;
    letter-spacing: 2px;
    font-size: 18px;
  }
}
</style>