<template>
  <div class="hero">
    <!-- <div class="hero-nubes">
      <div class="nubepequeña"></div>

      <div class="nube1-1"></div>

      <div class="nube2"></div>

      <div class="nube3"></div>

      <div class="nube4"></div>

      <div class="nube5"></div>
    </div> -->
    <div class="hero-left">
      <div class="hero-show">
        <h1 class="hero-title">Hogar</h1>
        <h2 class="hero-subtitle">San José</h2>
        <p>GALÁN</p>
      </div>
      <ul class="hero-nav">
        <li class="hero-item">
          <router-link to="/servicio"><img src="@/assets/fondos/icono1.png" alt="service" /></router-link>
          <p>Servicios</p>
        </li>
        <li class="hero-item">
          <router-link to="/quienSomos"><img src="@/assets/fondos/icono2.png" alt="about" /></router-link>
          <p>¿Quiénes somos?</p>
        </li>
        <li class="hero-item">
          <router-link to="/contactanos"><img src="@/assets/fondos/icono3.png" alt="contact us" /></router-link>
          <p>Información</p>
        </li>
      </ul>
    </div>
    <div class="hero-right">
      <div class="hero__loading-lazy">
        <img src="@/assets/fondos/abuelosbaile.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: grid;
  grid-template-columns: 638px 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  padding-top: 8.5rem;
  &-left {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  &-right {
    position: relative;
    img {
      width: 100%;
    }
  }
  &-show {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-family: Raleway;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 38px;
      color: #000000;
    }
  }
  &-title {
    font-style: normal;
    font-weight: normal;
    font-size: 144px;
    line-height: 174px;
    color: #3C784B;
    margin: 0;
  }
  &-subtitle {
    font-family: Kaushan Script;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 93px;
    color: #000000;
    margin: 0;
  }
  &-nubes {
    position: absolute;
  }
  &-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    a{
      display: flex;
      align-items: center;
      justify-content: center;
      background: #D3F7FF;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      img {
        width: 80px;
        height: 100px;
      }
    }
    p {
      font-family: Kaushan Script;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 52px;
      color: #000000;
    }
  }
}

@media screen and (max-width:768px) {
  .hero {
    padding-top: 4.5rem;
    grid-template-columns: 1fr;
    &-show {
      h2 {
        font-size: 36px;
        line-height: 52px;
      }
      p {
        font-size: 18px;
        line-height: 21px;
      }
    }
    &-title {
      font-size: 96px;
      line-height: 116px;
    }
    &-left {
      gap: 350px;
      padding-bottom: 1rem;
    }
    &-right {
      position: absolute;
      top: 15rem;
      // bottom: 120px;
      left: 7rem;
    }
    &-item {
      position: relative;
      a {
        width: 80px;
        height: 80px;
        img {
          width: 40px;
          height: 60px;
        }
      }
      p {
        font-size: 18px;
        line-height: 32px;
      }
    }
  }
}
@media screen and (max-width:481px) {
  .hero {
    &-left {
      gap: 300px;
      padding-bottom: 3rem;
    }
    &-right {
      bottom: 45px;
      left: inherit;
    }
  }
}
</style>