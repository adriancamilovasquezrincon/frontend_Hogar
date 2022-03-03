<template>
  <v-app>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>

@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

*{
  box-sizing: border-box;
}

body {
  font-family: Fredoka One;
  font-style: normal;
  margin: 0;
}

ul{
  padding: 0;
  margin: 0;
  list-style: none;
}

.title-custom {
  font-weight: normal;
  font-size: 96px;
  line-height: 116px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 46px;
}
@media screen and (max-width:768px) {
  .title-custom {
    font-size: 36px;
    line-height: 44px;
  }
}
</style>
