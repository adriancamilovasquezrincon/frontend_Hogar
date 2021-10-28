<template>
  <div>
    <div class="fondosoloQuien">
      <div>
        <router-link to="/">
          <button class="inicioQuien">
            <img
              class="iconocasaQuien"
              src="../assets/fondos/casa.png"
              alt=""
            />
            <h2 class="letrasesionQuien">inicio</h2>
          </button></router-link
        >

        <router-link to="/login">
          <button class="inicioSesionQuien">
            <img
              class="iconopersona12"
              src="../assets/fondos/iconopersona.png"
              alt=""
            />
            <h2 class="letrasesionQuien">inicio sesión</h2>
          </button></router-link
        >
      </div>
      <h1 class="tituloQuienes">¿Quiénes somos?</h1>

      <div class="pisoQuien"></div>

      <div class="cuadroQuien">
        <p class="cuadrotexto1">
          Somos una institución sin ánimo de lucro, que con sentido cristiano y
          de Iglesia, busca brindar y promover la mejor calidad de vida posible
          para el adulto mayor de todos los estratos sociales mediante nuestro
          servicio de atención interno o externo, nuestra asesoría legal y
          nuestra labor educativa que contempla al adulto en particular y a la
          comunidad en general.
        </p>

        <p></p>
      </div>

      <div class="computadorQuien">
        <iframe
          width="460"
          height="215"
          src="https://www.youtube.com/embed/TNxXcezaYjA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="plantaQuien"></div>

      <div class="tachesQuien"></div>
    </div>

    <div class="fondotabla1">
      <div class="mancha1"></div>

      <div class="lapicero"></div>

      <h1 class="titulomision">Misión</h1>
      <p class="textomision">
        Brindar y promover una vejez digna y feliz, para los Galaneros en
        especial y para todos en general. Digna: con la mejor calidad de vida,
        de acuerdo a como lo merece un ser humano y un cristiano. Feliz:
        asumiendo con gozo y con todo el sentido positivo de esta etapa de la
        vida, disfrutando de sus realizaciones y aportando a la comunidad sus
        talentos y sabiduría aprendida en la escuela de la vida con lo cual se
        es aún más útil que en las anteriores etapas de la existencia. Para los
        Galaneros… son nuestros primeros y directos destinatarios Por lo tanto
        nos apersonamos, nos hacemos responsables de: A. La realidad del adulto
        mayor de nuestra comunidad Constituimos un observatorio del adulto mayor
        para tener información acerca de: Cuántos son, quiénes son, dónde y cómo
        viven. B. Su atención Para los de dentro y fuera de nuestras
        instalaciones. C. Formación Para los adultos internos y externos, y para
        toda la comunidad en general. (Toma de conciencia de esta etapa de la
        vida y formación para ella).
      </p>
    </div>

    <div class="fondotabla2">
      <div class="mancha2"></div>
      <div class="celularQuien"></div>

      <h1 class="titulovision">Visión</h1>
      <p class="textovision">
        Al llegar el año 2020 El Hogar San José es una institución que se
        posiciona como todo un suceso positivo y atractivo, único en su género,
        así es reconocido y apreciado en el ámbito local y regional al
        constituirse en una entidad que integra a su eficiente servicio de
        atención al adulto mayor todo un proceso educativo con proyección a toda
        la comunidad y contar con unas instalaciones hermosas, modernas y
        acogedoras en armonía con el medio ambiente y tener todo un calificado
        equipo de trabajo que labora con sentido humano y cristiano.
      </p>

      <div class="float lef"></div>
    </div>

    <div class="fondotabla3">
      <div class="mancha3"></div>
      <div class="papel"></div>

      <h1 class="tituloobjetivos">Objetivos</h1>
      <p class="textoobjetivos">OBJETIVO GENERAL</p>
      <p class="textoobjetivos1">
        • La mejor calidad de vida para los Galaneros, especialmente para los
        adultos mayores con gozo y dignidad como lo merece todo ser humano y
        cristiano.
      </p>
      <p class="textoobjetivos2">OBJETIVOS ESPECÍFICOS</p>
      <p class="textoobjetivos3">
        1. Que el adulto mayor goce de la mejor atención y bienestar integral,
        bajo un claro principio de corresponsabilidad, y desde este servicio
        brindarle formación tanto a él como a su familia y a toda la comunidad
        sobre el asumir la vida con responsabilidad.
      </p>
      <p class="textoobjetivos4">
        2. Ofrecer una novedosa, moderna,positiva y atractiva alternativa de
        atención y bienestar para el adulto mayor que rompa con la idea terrible
        de lo que es un “ancianato”, en el que no se desea llegar a estar, y por
        el contrario se constituya en el anhelo a donde se quiere llegar a
        vivir.
      </p>
    </div>

    <div class="fondotabla4">
      <div class="mancha4"></div>
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
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

.fondosoloQuien {
  position: absolute;
  width: 1366px;
  height: 625px;
  background-image: url("../assets/fondos/Fondo_solo_ 1.png");
}
.pisoQuien {
  position: absolute;
  width: 1366px;
  height: 124px;
  top: 525px;
  background-image: url("../assets/fondos/tabla piso2.png");
}
.fondotabla1 {
  position: absolute;
  width: 1366px;
  height: 825px;
  top: 649px;
  background-image: url("../assets/fondos/tabla.png");
}
.fondotabla2 {
  position: absolute;
  width: 1366px;
  height: 825px;
  top: 1358px;
  background-image: url("../assets/fondos/tabla.png");
}
.fondotabla3 {
  position: absolute;
  width: 1366px;
  height: 768px;
  top: 2125px;
  background-image: url("../assets/fondos/tabla.png");
}
.cuadroQuien {
  position: absolute;
  width: 783px;
  height: 745px;
  left: 166px;
  top: 80px;
  background-image: url("../assets/fondos/cuadrolargo.png");
}
.computadorQuien {
  padding-left: 40px;
  padding-top: 65px;
  position: absolute;
  width: 783px;
  height: 745px;
  left: 766px;
  top: 150px;
  background-image: url("../assets/fondos/computador.png");
}
.tachesQuien {
  position: absolute;
  width: 783px;
  height: 745px;
  left: 400px;
  top: 490px;
  background-image: url("../assets/fondos/taches.png");
}
.plantaQuien {
  position: absolute;
  width: 783px;
  height: 745px;
  left: 5px;
  top: 307px;
  background-image: url("../assets/fondos/planta.png");
}
.mancha1 {
  position: absolute;
  width: 783px;
  height: 745px;
  background-image: url("../assets/fondos/mancha1.png");
}
.lapicero {
  position: absolute;
  width: 783px;
  height: 745px;
  top: 150px;
  left: 130px;
  background-image: url("../assets/fondos/lapicero.png");
}
.mancha1 {
  position: absolute;
  width: 783px;
  height: 745px;
  background-image: url("../assets/fondos/mancha1.png");
}
.mancha2 {
  position: absolute;
  width: 783px;
  height: 745px;
  left: 566px;
  background-image: url("../assets/fondos/mancha2.png");
}
.celularQuien {
  position: absolute;
  width: 783px;
  height: 745px;
  top: 150px;
  left: 830px;
  background-image: url("../assets/fondos/celular.png");
}
.mancha3 {
  position: absolute;
  width: 783px;
  height: 745px;
  background-image: url("../assets/fondos/mancha1.png");
}
.papel {
  position: absolute;
  width: 783px;
  height: 745px;
  top: 23px;
  left: 40px;
  background-image: url("../assets/fondos/papel 1.png");
}
.texto1 {
  position: absolute;
  width: 674px;
  height: 647px;
  left: 785px;
  top: 30px;

  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
}
.tituloQuienes {
  text-align: center;
  margin-top: 40px;
  font-size: 50px;
  color: rgba(0, 0, 0, 0.6);
  font-family: "Fredoka One", cursive;
}
p {
  position: absolute;
  width: 429px;
  height: 281px;
  left: 66px;
  top: 92px;
  font-family: "Raleway", sans-serif;
  text-align: left;

  font-size: 23px;
  line-height: 28px;
  text-align: left;

  color: #000000;
}
.titulomision {
  position: absolute;
  width: 207px;
  height: 66px;
  left: 900px;
  top: 5px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;

  font-size: 56px;
  line-height: 77px;

  color: #ffffff;
}
.textomision {
  position: absolute;
  width: 674px;
  height: 647px;
  left: 650px;
  top: 90px;

  font-size: 24px;

  color: #ffffff;
}
.titulovision {
  position: absolute;
  width: 207px;
  height: 66px;
  left: 360px;
  top: 150px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;

  font-size: 56px;
  line-height: 77px;

  color: #ffffff;
}
.textovision {
  position: absolute;
  width: 674px;
  height: 647px;
  left: 100px;
  top: 250px;

  font-size: 24px;

  color: #ffffff;
}
.tituloobjetivos {
  position: absolute;
  width: 207px;
  left: 900px;
  top: 10px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;

  font-size: 56px;
  line-height: 77px;

  color: #ffffff;
}
.textoobjetivos {
  position: absolute;
  width: 674px;
  left: 650px;
  top: 100px;
  font-family: "Raleway", sans-serif;

  font-size: 24px;

  color: #ffffff;
}
.textoobjetivos1 {
  position: absolute;
  width: 674px;
  left: 650px;
  top: 130px;
  font-family: "Raleway", sans-serif;

  font-size: 24px;

  color: #ffffff;
}
.textoobjetivos2 {
  position: absolute;
  width: 674px;
  left: 650px;
  top: 250px;
  font-family: "Raleway", sans-serif;

  font-size: 24px;

  color: #ffffff;
}
.textoobjetivos3 {
  position: absolute;
  width: 674px;
  left: 650px;
  top: 280px;
  font-family: "Raleway", sans-serif;

  font-size: 24px;

  color: #ffffff;
}
.textoobjetivos4 {
  position: absolute;
  width: 674px;
  left: 650px;
  top: 450px;
  font-family: "Raleway", sans-serif;

  font-size: 24px;

  color: #ffffff;
}
.textoobjetivos {
  position: absolute;
  width: 674px;
  height: 647px;
  left: 650px;
  top: 100px;
  font-family: "Raleway", sans-serif;

  font-size: 24px;

  color: #ffffff;
}
.inicioQuien {
  position: absolute;
  width: 150px;
  height: 60px;
  left: 10px;
  top: 5px;
  padding-left: 7px;
  background: #266439;
  border-radius: 25px;
}
.iconocasaQuien {
  float: left;
}
.inicioSesionQuien {
  position: absolute;
  width: 230px;
  height: 60px;
  left: 1110px;
  top: 5px;
  padding-left: 5px;
  background: #266439;
  border-radius: 25px;
}
.iconopersona12 {
  float: left;
}
.letrasesionQuien {
  color: white;
  padding-right: 7px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
}
.cuadrotexto1 {
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  text-align: center;
}
</style>