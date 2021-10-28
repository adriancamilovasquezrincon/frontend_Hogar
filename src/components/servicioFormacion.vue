<template>
  <div class="mesa">
    <div>
      <router-link to="/">
        <button class="inicioFormacion">
          <img class="iconocasa" src="../assets/fondos/casa.png" alt="" />
          <h2 class="letrasesionFormacion">inicio</h2>
        </button></router-link
      >

      <router-link to="/login">
        <button class="iniciosesionFormacion">
          <img
            class="iconopersona"
            src="../assets/fondos/iconopersona.png"
            alt=""
          />
          <h2 class="letrasesionFormacion">inicio sesión</h2>
        </button></router-link
      >
    </div>

    <h2 class="formacion">Servicio Formación</h2>

    <div class="psicologia">
      <img src="../assets/imagenesHogar/cuadroCircular.png" alt="" />

      <div id="sicologa">
        <img src="../assets/imagenesHogar/psicologia.png" alt="" />
        <h4 id="textoSicologia">Asistencia en psicología</h4>
      </div>
    </div>

    <div class="deportes">
      <img src="../assets/imagenesHogar/cuadroSombra2.png" alt="" />
      <div id="deporte">
        <img src="../assets/imagenesHogar/ejercicio.png" alt="" />
        <h4 id="textoDeporte">Asistencia en Deportes</h4>
      </div>
    </div>
    <div class="espiritual">
      <img src="../assets/imagenesHogar/cuadroCircular.png" alt="" />
      <div id="iglesia">
        <img src="../assets/imagenesHogar/iglesia2.png" alt="" />
        <h4 id="textoEspiritual">Asesoría Espiritual</h4>
      </div>
    </div>
    <div class="manualidades">
      <img src="../assets/imagenesHogar/cuadroSombra2.png" alt="" />
      <div id="pintura">
        <img src="../assets/imagenesHogar/pintura.png" alt="" />
        <h4 id="textoManualidad">Manualidades</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.mesa {
  position: fixed;
  width: 1366px;
  height: 800px;
  background-image: url("../assets/imagenesHogar/mesa.png");
}
.formacion {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.829);
  font-family: "Fredoka One", cursive;
}
.psicologia {
  position: absolute;
  left: 80px;
  top: 122px;
}
.deportes {
  position: absolute;
  left: 400px;
  top: 255px;
}
.espiritual {
  position: absolute;
  left: 720px;
  top: 122px;
}
.manualidades {
  position: absolute;
  left: 1040px;
  top: 255px;
}

/**Iconos de servicio Formación */
#sicologa {
  position: absolute;
  left: 50px;
  top: 140px;
}
#deporte {
  position: absolute;
  left: 55px;
  top: 80px;
}
#iglesia {
  position: absolute;
  left: 60px;
  top: 108px;
}
#pintura {
  position: absolute;
  left: 60px;
  top: 100px;
}
/**Textos de formación*/
#textoSicologia {
  position: absolute;
  left: 14px;
  top: 180px;
  color: white;
  font-size: 20px;
  text-align: center;
  font-family: "Raleway", sans-serif;
}
#textoEspiritual {
  position: absolute;
  left: 40px;
  top: 210px;
  color: white;
  font-size: 20px;
  text-align: center;
  font-family: "Raleway", sans-serif;
}
#textoDeporte {
  position: absolute;
  width: auto;
  top: 210px;
  color: white;
  font-size: 20px;
  text-align: center;
  font-family: "Raleway", sans-serif;
}
#textoManualidad {
  position: absolute;
  left: 40px;
  top: 198px;
  color: white;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
}
.inicioFormacion {
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
.iniciosesionFormacion {
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
.letrasesionFormacion {
  color: white;
  padding-right: 7px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
}
</style>