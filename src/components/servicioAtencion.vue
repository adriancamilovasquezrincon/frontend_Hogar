<template>
  <div class="service">
    <header class="service__header">
      <router-link class="service__link" to="/">
        <img src="@/assets/fondos/casa.png" alt="iconocasa" />
        <p>inicio</p>
      </router-link>

      <router-link class="service__link" to="/login">
        <img src="@/assets/fondos/iconopersona.png" alt="iconopersona" />
        <p>inicio sesión</p>
      </router-link>
    </header>

    <div class="service__content">
      <h1 class="title">Servicio Atención</h1>
      <div class="service__frames">
        <div class="frame">
          <img src="@/assets/imagenesHogar/salud.svg" alt="cuadroCircular" />
          <p>Asistencia en Salud</p>
        </div>

        <div class="frame">
          <img src="@/assets/imagenesHogar/comida.svg" alt="cuadroSombra2" />
          <p>Alimentación</p>
        </div>

        <div class="frame">
          <img src="@/assets/imagenesHogar/ropa.svg" alt="cuadroCircular" />
          <p>Cuidado de la ropa</p>
        </div>

        <div class="frame">
          <img src="@/assets/imagenesHogar/hospedaje.svg" alt="cuadroSombra2" />
          <p>Hospedaje</p>
        </div>
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
<style lang="scss" scoped>
.service {
  background-image: url("../assets/imagenesHogar/mesa.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 768px;
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
  &__content {
    .title {
      font-family: Fredoka One;
      font-style: normal;
      font-weight: normal;
      font-size: 64px;
      line-height: 77px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
  &__frames {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 500px;
    .frame {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;
      &:nth-child(odd) {
        justify-content: start;
        p { max-width: 252px; }
      }
      img {
        max-width: 251px;
      }
      p {
        font-family: Raleway;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 56px;
        text-align: center;
        margin: 0;
        color: #ffffff;
        
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .service {
    min-height: 840px;
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
    &__content {
      .title {
        font-size: 42px;
        line-height: 51px;
        margin-top: 30px;
      }
    }
    &__frames {
      padding: 1rem;
      .frame {
        flex-direction: row-reverse;
        &:nth-child(odd) {
          flex-direction: row;
        }
        img {
          max-width: 170px;
        }
        p {
          font-size: 22px;
          line-height: 35px;
        }
      }
    }
  }
}
</style>