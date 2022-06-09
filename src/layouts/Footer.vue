<template>
  <footer class="footer">

    <div class="footer__nubes">
      <div class="nubepequeña"></div>
      <div class="nube1"></div>
      <div class="nube2"></div>
      <div class="nube3"></div>
      <div class="nube4grande"></div>
      <div class="nube5"></div>
    </div>

    <h2 class="footer__title">FELICES SIEMPRE FELICES</h2>
    <div class="footer__content">
      <div class="footer__logo">
        <img loading="lazy" src="@/assets/fondos/logo.png" alt="logo">
      </div>
      <div class="footer__contact">
        <div class="footer__item">
          <img src="@/assets/fondos/telefono.png" alt="phone" />
          <p>Teléfono: 3227377441</p>
        </div>

        <div class="footer__item">
          <img src="@/assets/fondos/correo.png" alt="email" />
          <p>hogarsanjoseg@hotmail.com</p>
        </div>

        <p>Galán- Santander-Colombia</p>
      </div>
      <div class="footer__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6450.292635440404!2d-73.28972342858887!3d6.639497000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e69d005ba189c4f%3A0x86873914e998e082!2sGal%C3%A1n%2C%20Santander!5e1!3m2!1ses-419!2sco!4v1628108349371!5m2!1ses-419!2sco"
          width="350"
          height="250"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
  &__title {
    max-width: 788px;
    margin: auto;
    padding-top: 17rem;
    font-weight: normal;
    font-size: 72px;
    line-height: 87px;
    text-align: center;
    color: rgba(0, 0, 0, 0.4);
  }
  &__nubes {
    position: absolute;
  }
  &__content{
    display: flex;
    padding-top: 1rem;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    opacity: 0.75;
    transform-origin: 35% 30%;
    animation: pulse 1s infinite ease-out 1s;
    img {
      max-width: 296px;
    }
  }
  &__contact {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 2rem;
    > p {
      font-family: Raleway;
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 35px;

      color: #FFFFFF;

      max-width: 418px;
      width: 100%;
      padding: 1rem;

      background: #007947;
      border-radius: 30px;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    color: #145439;
    p {
      margin: 0;
    }
  }
  &__map {
    overflow: hidden;
    border-radius: 38px;
  }
}

@keyframes pulse {
  10%,20% {
    transform: scale(0.9, 0.85) skew(1deg);
    opacity: 1;
  }
}

@media screen and (max-width:768px) {
  .footer {
    padding-top: 6rem;
    &__title {
      padding: 0;
      padding-bottom: 5rem;
      font-size: 64px;
      line-height: 130px;
    }
    &__logo img {
      max-width: 200px;
    }
    &__content {
      gap: 0;
      align-items: flex-start;
    }
    &__contact {
      > p {
        font-size: 22px;
        line-height: 15px;
      }
    }
    &__item {
      img {
        width: 25px;
      }
      p {
        font-size: 22px;
        line-height: 21px;
      }
    }
    &__map {
      display: none;
    }
  }
}
@media screen and (max-width:481px) {
  .footer {
    &__logo img {
      max-width: 80px;
    }
    &__contact {
      > p {
        max-width: 199px;
        font-size: 13px;
        line-height: 15px;
      }
    }
    &__item {
      p {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
}
</style>