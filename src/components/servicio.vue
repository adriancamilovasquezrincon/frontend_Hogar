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
      <img src="../assets/imagenesHogar/marco.png" alt="" />
      <div class="cuadroSer">
        <img class="cuadradoCambiar"  src="../assets/imagenesHogar/cuadrado.png" alt="" />
        <router-link to="/servicioAtencion">
          <h3 id="atencion">Servicio Atención</h3></router-link
        >
      </div>
    </div>
    <div class="marco2">
      <img src="../assets/imagenesHogar/marcos.png" alt="" />
      <div class="cuadroSer2">
        <img src="../assets/imagenesHogar/cuadrado.png" alt="" />
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
@media screen and (max-width: 320px) {
  .cuadroCambiar{
    width: 20px;
    height: 30px;
    position: absolute;
  }
  .servicios {
    text-align: center;
    margin-top: 80px;
    font-size: 40px;
    color: rgba(0, 0, 0, 0.61);
    font-family: "Fredoka One", cursive;
  }
  .fondo {
    position: fixed;
    width: 322px;
    height: 700px;
    background-image: url("../assets/imagenesHogar/Fondo_solo_ 3.png");
  }
  .marco1 {
    position: absolute;
    width: 40px;
    left: 5px;
    top: 145px;
  }
  .marco2 {
    position: absolute;
    width: 40px;
    left: 5px;
    top: 245px;
  }
  .cuadroSer {
    position: absolute;
    width: 40px;
    left: 15px;
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
}
</style>