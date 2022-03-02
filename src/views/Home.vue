<template>
  <div class="home">
    <div class="home-first">
      <Header/>
      <div class="container-xxl">
        <Hero/>
      </div>
    </div>
    <div class="bg-admission">
      <div class="container-xxl">
        <AdmissionProcess/>
      </div>
    </div>
    <div class="bg-gallery">
      <div class="container-xxl">
        <Gallery/>
      </div>
    </div>
    <div class="bg-footer">
      <div class="container-xxl">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Hero from '@/views/landing/Hero';
import AdmissionProcess from './landing/AdmissionProcess';
import Gallery from './landing/Gallery';

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    AdmissionProcess,
    Gallery,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.home {
  &-first, .bg-admission, .bg-gallery, .bg-footer  {
    min-height: 768px;
    width: 100%;
    background-image: url("../assets/fondos/fondo-inicio.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .bg-admission {
    background-image: url("../assets/fondos/fondo2.png");
  }
  .bg-gallery {
    background-image: url("../assets/fondos/fondo3.png");
  }
  .bg-footer {
    background-image: url("../assets/fondos/fondo4.png");
  }
}
</style>