<template>
  <div class="gallery">
    <h2 class="title-custom">fotografías</h2>
    <div class="gallery__cards">
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto1.jpeg" alt="gallery" />
      </div>
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto2.jpeg" alt="gallery" />
      </div>
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto3.jpeg" alt="gallery" />
      </div>
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto4.jpeg" alt="gallery" />
      </div>
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto5.jpeg" alt="gallery" />
      </div>
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto6.jpeg" alt="gallery" />
      </div>
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto7.jpeg" alt="gallery" />
      </div>
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto8.jpeg" alt="gallery" />
      </div>
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto9.jpeg" alt="gallery" />
      </div>
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto10.jpeg" alt="gallery" />
      </div>
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto11.jpeg" alt="gallery" />
      </div>
      <div class="gallery__card">
        <img loading="lazy" src="@/assets/fondos/foto12.jpeg" alt="gallery" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  &__cards {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem 2rem;
    justify-content: center;
  }
  &__card {
    max-width: 287px;
    width: 100%;
    height: 219px;
    background: rgba(211, 247, 255, 0.5);
    padding: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (max-width:768px) {
  .gallery {
    &__cards {
      gap: 20px;
      height: 697px;
      overflow: hidden;
    }
  }
}
</style>