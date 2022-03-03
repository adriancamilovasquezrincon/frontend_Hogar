<template>
  <div class="about">
    <div class="about__wrapper-hero">
      <header class="about__header">
        <router-link class="about__link" to="/">
          <img src="@/assets/fondos/casa.png" alt="iconocasa" />
          <p>inicio</p>
        </router-link>

        <router-link class="about__link" to="/login">
          <img src="@/assets/fondos/iconopersona.png" alt="iconopersona" />
          <p>inicio sesión</p>
        </router-link>
      </header>

      <h1 class="title">¿Quiénes somos?</h1>

      <div class="about__hero">
        <div class="about__abount">
          <img src="@/assets/fondos/cuadrolargo.png" alt="frame" />
          <p>
            Somos una institución sin ánimo de lucro, que con sentido cristiano
            y de Iglesia, busca brindar y promover la mejor calidad de vida
            posible para el adulto mayor de todos los estratos sociales mediante
            nuestro servicio de atención interno o externo, nuestra asesoría
            legal y nuestra labor educativa que contempla al adulto en
            particular y a la comunidad en general.
          </p>
        </div>

        <div class="about__frame">
          <img src="@/assets/fondos/computador.png" alt="computador" />
          <iframe
            width="460"
            height="240"
            src="https://www.youtube.com/embed/TNxXcezaYjA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <main class="about__content">
      <section class="about__section left">
        <img src="@/assets/fondos/mision.svg" alt="frame" />
        <div class="content">
          <h3>Misión</h3>
          <p>
            Brindar y promover una vejez digna y feliz, para los Galaneros en
            especial y para todos en general. Digna: con la mejor calidad de
            vida, de acuerdo a como lo merece un ser humano y un cristiano.
            Feliz: asumiendo con gozo y con todo el sentido positivo de esta
            etapa de la vida, disfrutando de sus realizaciones y aportando a la
            comunidad sus talentos y sabiduría aprendida en la escuela de la
            vida con lo cual se es aún más útil que en las anteriores etapas de
            la existencia. Para los Galaneros… son nuestros primeros y directos
            destinatarios Por lo tanto nos apersonamos, nos hacemos responsables
            de: A. La realidad del adulto mayor de nuestra comunidad
            Constituimos un observatorio del adulto mayor para tener información
            acerca de: Cuántos son, quiénes son, dónde y cómo viven. B. Su
            atención Para los de dentro y fuera de nuestras instalaciones. C.
            Formación Para los adultos internos y externos, y para toda la
            comunidad en general. (Toma de conciencia de esta etapa de la vida y
            formación para ella).
          </p>
        </div>
      </section>
      <section class="about__section right">
        <div class="content">
          <h3>Visión</h3>
          <p>
            Al llegar el año 2020 El Hogar San José es una institución que se
            posiciona como todo un suceso positivo y atractivo, único en su
            género, así es reconocido y apreciado en el ámbito local y regional
            al constituirse en una entidad que integra a su eficiente servicio
            de atención al adulto mayor todo un proceso educativo con proyección
            a toda la comunidad y contar con unas instalaciones hermosas,
            modernas y acogedoras en armonía con el medio ambiente y tener todo
            un calificado equipo de trabajo que labora con sentido humano y
            cristiano.
          </p>
        </div>
        <img src="@/assets/fondos/vision.png" alt="frame" />
      </section>
      <section class="about__section left">
        <img src="@/assets/fondos/objetivos.svg" alt="frame" />
        <div class="content">
          <h3>Objetivos</h3>
          <div class="parrafo">
            <p>OBJETIVO GENERAL • La mejor calidad de vida para los Galaneros,
            especialmente para los adultos mayores con gozo y dignidad como lo
            merece todo ser humano y cristiano.</p>
            <p>
            OBJETIVOS ESPECÍFICOS <br>
            1. Que el adulto mayor goce de la mejor atención y bienestar integral, bajo un
            claro principio de corresponsabilidad, y desde este servicio
            brindarle formación tanto a él como a su familia y a toda la
            comunidad sobre el asumir la vida con responsabilidad.
            <br>
            2. Ofrecer
            una novedosa, moderna, positiva y atractiva alternativa de atención
            y bienestar para el adulto mayor que rompa con la idea terrible de
            lo que es un “ancianato”, en el que no se desea llegar a estar, y
            por el contrario se constituya en el anhelo a donde se quiere llegar
            a vivir.
            </p>
          </div>
        </div>
      </section>
      <section class="about__section right">
        <div class="content">
          <p>
            3. Que ningún adulto mayor termine su vida en la soledad y el
            abandono, que pueda tener la alternativa de elegir un estilo de vida
            en comunión donde se respeta su individualidad y en donde a un costo
            accesible pueda disfrutar la mejor calidad de vida con amor, fe, paz
            y alegría. <br>
            4. Ser un centro de motivación, sensibilización y
            formación sobre la importancia de dar sentido a la vida y el aspirar
            y trabajar por vivir siempre en las mejores condiciones,
            especialmente en la vejez. <br>
            5. Que el adulto mayor se valore y sea
            valorado como persona, se reconozca su talento y protagonismo en la
            sociedad le sea respetada su dignidad y derechos, forme así parte
            activa de la sociedad y nunca sea marginado. <br>
            6. Contar con un
            importante respaldo financiero tanto por parte de quienes usan el
            servicio, como de la comunidad y de los entes oficiales y no
            oficiales, nacionales e internacionales que permita una normal
            sostenibilidad y avance de nuestro proyecto institucional.
          </p>
        </div>
        <img src="@/assets/fondos/objetivos2.png" alt="frame" />
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.about {
  .title {
    font-family: Fredoka One;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 77px;

    color: rgba(0, 0, 0, 0.6);
  }
  &__header {
    display: flex;
    justify-content: space-between;
    padding: 16px 27px;
  }
  &__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    background: #007947;
    border-radius: 30px;
    padding: 15px 30px;
    gap: 16px;
    p {
      font-family: Fredoka One;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 44px;
      margin: 0;

      color: #ffffff;
    }
  }
  &__wrapper-hero {
    background-image: url("../assets/fondos/piso_hero.png");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    min-height: 730px;
  }
  &__hero {
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  &__frame {
    position: relative;
    iframe {
      position: absolute;
      left: 38px;
      top: 66px;
    }
  }
  &__abount {
    position: relative;
    p {
      position: absolute;
      top: 97px;
      left: 4rem;
      max-width: 420px;

      font-family: Raleway;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      text-align: center;

      color: #000000;
    }
  }
  &__section {
    display: flex;
    align-items: center;
    background-image: url("../assets/fondos/tabla.png");
    .content {
      padding: 23px 24px;
      h3 {
        font-family: Fredoka One;
        font-style: normal;
        font-weight: normal;
        font-size: 64px;
        line-height: 77px;
        color: #ffffff;
      }
      p {
        font-family: Raleway;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;

        color: #ffffff;
      }
    }
  }
}

@media screen and (max-width: 768px)  {
  .about {
    &__header {
      padding: 5px 11px;
    }
    &__link {
      padding: 10px 1rem;
      img {
        width: 33px;
      }
      p {
        font-size: 18px;
        line-height: 24px;
      }
    }
    .title {
      font-size: 45px;
      line-height: 54px;
    }
    &__frame {
      img {
        max-width: 320px;
      }
      iframe {
        left: 18px;
        top: 31px;
        max-width: 271px;
        height: 141px;
      }
    }
    &__section {
      flex-wrap: wrap;
      &.right {
        justify-content: end;
      }
    }
    &__abount {
      img {
        width: 320px;
      }
      p {
        top: 56px;
        left: 2.5rem;
        font-size: 12px;
        line-height: 19px;
        max-width: 240px;
      }
    }
    &__section {
      img {
        width: 300px;
      }
    }
  }
}
</style>