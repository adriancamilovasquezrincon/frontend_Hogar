<template>
  <div class="admission">
    <h2 class="title-custom">Proceso de ingreso</h2>
    <div class="admission__cards">
      <div class="admission__card">
        <div class="number">1</div>
        <img src="@/assets/fondos/proceso1.png" alt="process" />
        <img class="line" src="@/assets/fondos/line.svg" alt="line" />
        <div class="admission__card-body">
          <p>Nos contactas y pasas una solicitud.</p>
        </div>
      </div>
      <div class="admission__card">
        <div class="number">2</div>
        <img src="@/assets/fondos/proceso2.png" alt="process" />
        <img class="line2" src="@/assets/fondos/line2.svg" alt="line" />
        <div class="admission__card-body">
          <p>Esperas la respuesta de admisión por parte de la junta.</p>
        </div>
      </div>
      <div class="admission__card">
        <div class="number">3</div>
        <img src="@/assets/fondos/proceso3.png" alt="process" />
        <img class="line" src="@/assets/fondos/line.svg" alt="line" />
        <div class="admission__card-body">
          <p>Te damos el cupo para disfrutar de nuestros servicios.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdmissionProcess'
}
</script>

<style lang="scss">
.admission {
  &__cards {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  &__card {
    position: relative;
    .line,.line2 {
      position: absolute;
      display: none;
    }
    &-body {
      position: absolute;
      max-width: 310px;
      width: 100%;
      font-family: Raleway;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 38px;
      text-align: center;
      bottom: 10px;
      left: 38px;
      color: #FFFFFF;
    }
    .number {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -28px;
      left: -20px;
      background-color: #D3F7FF;
      border-radius: 50%;

      font-weight: normal;
      font-size: 64px;
      line-height: 77px;
      width: 80px;
      height: 80px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}

@media screen and (max-width:768px) {
  .admission {
    &__cards {
      justify-content: start;
      padding: 1rem;
      height: 634px;
    }
    &__card {
      position: absolute;
      .line {
        display: block;
        top: 3rem;
        left: 4rem;
      }
      .line2 {
        display: block;
        top: 4rem;
        left:-4rem;
      }
      &:nth-of-type(1) {
        .admission__card-body {
          left: 11rem;
          top: 3rem;
        }
      }
      &:nth-of-type(2) {
        top: 35%;
        right: 0;
        .admission__card-body {
          top: 3em;
          left: -11.5rem;
        }
      }
      &:nth-of-type(3) {
        bottom: 0;
        .admission__card-body {
          left: 11rem;
          top: 3rem;
        }
      }
      img {
        width: 150px;
        height: 215px;
      }
      &-body {
        max-width: 164px;
        font-size: 18px;
        line-height: 21px;
        color: #000000;
      }
      .number {
        width: 60px;
        height: 60px;

        font-size: 48px;
        line-height: 58px;
      }
    }
  }
}

@media screen and (max-width:320px) {
  .admission {
    &__card {
      &:nth-of-type(1) {
        .admission__card-body {
          left: 9rem;
        }
      }
      &:nth-of-type(2) {
        .admission__card-body {
          left: -10rem;
        }
      }
      &:nth-of-type(3) {
        .admission__card-body {
          left: 10rem;
        }
      }
      img {
        width: 120px;
        height: 215px;
      }
      &-body {
        font-size: 15px;
      }
    }
  }
}
</style>