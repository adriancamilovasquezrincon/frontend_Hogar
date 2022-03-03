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
      <h1 class="title">Servicios</h1>
      <div class="service__frames">
        <router-link to="/servicioAtencion" class="service__frame">
          <img src="@/assets/imagenesHogar/marco.png" alt="marco" />
          <div class="frame">
            <p>Servicio Atención</p>
          </div>
        </router-link>

        <router-link to="/servicioFormacion" class="service__frame">
          <img src="@/assets/imagenesHogar/marcos.png" alt="marcos" />
          <div class="frame">
            <p>Servicio formación</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "servicio",
};
</script>
<style lang="scss" scoped>
.service {
  background-image: url("../assets/imagenesHogar/Fondo_solo_ 3.png");
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

      color: rgba(0, 0, 0, 0.6);
    }
  }
  &__frames {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 288px;
    .frame {
      position: absolute;
      bottom: 29px;
      left: 35px;
      background: #D3F7FF;
      max-width: 250px;
      width: 100%;
      height: 139px;
      p {
        font-family: Kaushan Script;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 70px;
        text-align: center;
        color: #000000;
        margin: 0;
      }
    }
  }
  &__frame {
    position: relative;
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
      padding: 40px 0;
      .title {
        font-size: 45px;
        line-height: 54px;
      }
    }
    &__frames {
      gap: 37px;
      .frame {
        p {
          font-size: 35px;
          line-height: 51px;
        }
      }
    }
  }
}
</style>