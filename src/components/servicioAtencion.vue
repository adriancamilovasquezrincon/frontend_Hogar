<template>
  <div class="mesa">
    <div>
      <router-link to="/">
        <button class="inicioAtencion">
          <img class="iconocasa" src="../assets/fondos/casa.png" alt="" />
          <h2 class="letrasesionAtencion">inicio</h2>
        </button></router-link
      >

      <router-link to="/login">
        <button class="iniciosesionAtencion">
          <img
            class="iconopersona"
            src="../assets/fondos/iconopersona.png"
            alt=""
          />
          <h2 class="letrasesionAtencion">inicio sesión</h2>
        </button></router-link
      >
    </div>

    <h1 class="atencion">Servicio Atención</h1>

    <div class="asistencia">
      <img src="../assets/imagenesHogar/cuadroCircular.png" alt="" />
      <div id="salud">
        <img src="../assets/imagenesHogar/salud.png" alt="" />
        <h4 id="textoSalud">Asistencia en Salud</h4>
      </div>
    </div>

    <div class="comida">
      <img src="../assets/imagenesHogar/cuadroSombra2.png" alt="" />
      <div id="plato">
        <img src="../assets/imagenesHogar/plato.png" alt="" />
        <h4 id="textoAlimentacion">Alimentación</h4>
      </div>
    </div>

    <div class="ropa">
      <img src="../assets/imagenesHogar/cuadroCircular.png" alt="" />
      <div id="ropa">
        <img src="../assets/imagenesHogar/ropa.png" alt="" />
        <h4 id="textoRopa">Cuidado de la ropa</h4>
      </div>
    </div>

    <div class="hospedaje">
      <img src="../assets/imagenesHogar/cuadroSombra2.png" alt="" />
      <div id="casa">
        <img src="../assets/imagenesHogar/casita.png" alt="" />
        <h4 id="textoHospedaje">Hospedaje</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Servicio Atencion",
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
.atencion {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.829);
  font-family: "Fredoka One", cursive;
}
.asistencia {
  position: absolute;
  left: 80px;
  top: 122px;
}
.comida {
  position: absolute;
  left: 400px;
  top: 255px;
}
.ropa {
  position: absolute;
  left: 720px;
  top: 122px;
}
.hospedaje {
  position: absolute;
  left: 1040px;
  top: 255px;
}
/**Iconos de atencion a los usuarios */
#salud {
  position: absolute;
  left: 8px;
  top: 105px;
}
#plato {
  position: absolute;
  left: 38px;
  top: 80px;
}
#ropa {
  position: absolute;
  left: 64px;
  top: 108px;
}
#casa {
  position: absolute;
  left: 40px;
  top: 120px;
}
/**Textos de Atención*/
#textoSalud {
  position: absolute;
  left: 16px;
  top: 220px;
  color: white;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
}
#textoAlimentacion {
  position: absolute;
  left: 40px;
  top: 210px;
  color: white;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
}
#textoRopa {
  position: absolute;
  left: 30px;
  top: 210px;
  color: white;
  font-size: 20px;
  text-align: center;
  font-family: "Raleway", sans-serif;
}
#textoHospedaje {
  position: absolute;
  left: 50px;
  top: 178px;
  color: white;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
}
.inicioAtencion {
  position: absolute;
  width: 150px;
  height: 60px;
  left: 10px;
  top: 5px;
  padding-left: 7px;
  background: #266439;
  border-radius: 25px;
  font-family: "Raleway", sans-serif;
}
.iconocasa {
  float: left;
}
.iniciosesionAtencion {
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
.letrasesionAtencion {
  color: white;
  padding-right: 7px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
}
</style>