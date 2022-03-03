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


    <h1 class="title">¡Puedes Contactarnos!</h1>

    <div class="service__content">
      <div class="service__people">
        <img src="@/assets/fondos/people-contact.svg" alt="people-contact" />
      </div>

      <form class="form">
        <div class="field">
          <label class="label">Teléfono</label>
          <input class="input" type="text" v-model="contactanos.telefono" />
        </div>
        <div class="field">
          <label class="label">Correo electrónico</label>
          <input class="input" type="text" v-model="contactanos.correo" />
        </div>
        <div class="field">
          <label class="label">Nombres</label>
          <input class="input" type="text" v-model="contactanos.nombres" />
        </div>
        <button @click.passive="enviarInfo" type="button" class="btn">Enviar</button>
      </form>
    </div>

  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Contactanos",
  data() {
    return {
      contactanos: {
        telefono: null,
        correo: null,
        nombres: null,
      },
    };
  },
  methods: {
    enviarInfo() {
      const me = this;
      let header = { headers: { token: this.$store.state.token } };
      console.log(this.contactanos);

      axios
        .post(
          "contacto/guardar",
          {
            telefono: me.contactanos.telefono,
            correo: me.contactanos.correo,
            nombres: me.contactanos.nombres,
          },
          header
        )
        .then((response) => {
          console.log("Contacto enviado");
          console.log(response);
          this.contactanos.telefono = "",
          this.contactanos.correo = "",
          this.contactanos.nombres = ""
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Enviado",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.service {
  background-image: url("../assets/imagenesHogar/Fondo_solo_ 3.png");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
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
  .title {
    font-family: Fredoka One;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 77px;

    color: rgba(0, 0, 0, 0.6);
  }
  &__content {
    display: flex;
    align-items: center;
    gap: 5rem;
    .form {
      width: 100%;
      .field {
        display: flex;
        flex-direction: column;
      }
    }
  }
}

.label {
  font-family: Kaushan Script;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 52px;

  color: #000000;
}
.input {
  padding-left: 5px;
  padding-right: 5px;
  max-width: 368px;
  width: 100%;
  height: 77px;

  background: rgba(0, 121, 71, 0.5);
  border-radius: 50px;
}
.btn {
  display: block;
  font-family: Fredoka One;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 36px;
  color: #FFFFFF;
  background: #007947;
  border-radius: 120px;
  margin: auto;
  margin-top: 30px;
  padding: 15px 20px;
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
    .title {
      margin-top: 20px;
      font-size: 45px;
      line-height: 54px;
    }
    &__content {
      justify-content: center;
      flex-wrap: wrap;
      padding: 1rem;
    }
    &__people {
      img {
        max-width: 100%;
      }
    }
  }
  .label {
    font-size: 24px;
    line-height: 35px;
  }
  .input {
    height: 50px;
  }
  .field {
    margin-bottom: 2rem;
  }
}
</style>