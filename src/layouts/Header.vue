<template>
  <header class="header">

    <div class="header-network">
      <ul class="header-nav">
        <li class="header-item">
          <a target="_blank" rel="noopener" href="https://instagram.com/hogarsanjoseg?utm_medium=copy_link">
            <img src="@/assets/fondos/instagram.png" alt="instagram" />
          </a>
        </li>
        <li class="header-item">
          <a target="_blank" rel="noopener" href="https://www.facebook.com/profile.php?id=100004830978218">
            <img src="../assets/fondos/facebook.png" alt="facebook" />
          </a>
        </li>
        <li class="header-item">
          <a target="_blank" rel="noopener" href="https://wa.link/sjdzzx">
            <img src="../assets/fondos/whatsApp.png" alt="whatsapp" />
          </a>
        </li>
        <li class="header-item">
          <a target="_blank" rel="noopener" href="https://hogarsanjosegalan.blogspot.com/">Blog</a>
        </li>
      </ul>
    </div>

    <router-link class="header-login" to="/login">
      <img class="header-img" src="../assets/fondos/iconopersona.png" alt="iconopersona" />
      inicio sesión
    </router-link>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 35px;
  background-color: rgba(0, 0, 0, 0.445);
  &-login {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #007947;
    border-radius: 30px;
    font-weight: normal;
    font-size: 28px;
    line-height: 27px;
    color: #FFFFFF;
    max-width: 328px;
    width: 100%;
    padding: 1rem 0;
    text-decoration: none;
    img {
      width: 33px;
    }
  }
  &-nav {
    padding: 0;
    display: inline-flex;
    gap: 31px;
  }
  &-item {
    background: #007947;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 69px;
    img { width: 100%; }
    &:nth-of-type(4) { width: 135px; }
    a {
      display: block;
      font-weight: normal;
      font-size: 28px;
      line-height: 27px;
      color: #FFFFFF;
      text-decoration: none;
    }
  }
}

@media screen and (max-width:768px) {
  .header {
    padding: 8px 11px;
    &-login {
      max-width: 180px;
      font-size: 16px;
      padding: 0;
    }
    &-nav {
      gap: 10px;
    }
    &-item {
      width: 33px;
      height: 33px;
      a {
        font-size: 16px;
      }
      &:last-child {
        max-width: 66px;
        width: 100%;
      }
    }
  }
}
</style>