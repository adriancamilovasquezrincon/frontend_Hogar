<template>
  <div class="fondo">
    <div>
      <button @click="atras" class="fecha">
        <v-icon dark left> mdi-arrow-left </v-icon>
      </button>

      <button @click="cerrar" class="iniciosesion">
        <img
          class="iconopersona"
          src="../assets/fondos/iconopersona.png"
          alt=""
        />
        <h2 class="letrasesion">Cerrar sesión</h2>
      </button>
    </div>

    <div class="user">
      <v-toolbar-title class="personasasas">Personas</v-toolbar-title>
    </div>

    <div class="cuadro">
      <div class="container">
        <v-data-table
          :items-per-page="5"
          :headers="headers"
          :items="persona"
          :search="search"
          id="azul"
        >
          <template v-slot:top>
            <v-toolbar flat class="fondocuadro">
              <v-btn class="impresora" @click="imprimir()"
                ><v-icon>mdi-printer</v-icon></v-btn
              >

              <v-spacer></v-spacer>

              <div class="buscar">
                <v-text-field
                  class="mt-3"
                  dark
                  v-model="search"
                  prepend-icon="mdi-magnify"
                  label="Búsqueda por tipo de Persona o número de documento"
                  single-line
                  hide-details
                ></v-text-field>
              </div>

              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" persistent max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#266439"
                    class="nuevo white--text mb-2"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Nuevo
                  </v-btn>
                </template>
                <v-card>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.tipoPersona"
                            label="Tipo de Persona"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.nit"
                            label="Nit"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.numDocumento"
                            label="numDocumento"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.nombres"
                            label="nombres"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.apellidos"
                            label="apellidos"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.telefono"
                            label="Teléfono"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.correo"
                            label="correo"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.lugarNacimiento"
                            label="lugarNacimiento"
                          ></v-text-field>
                        </v-col>
                        <!-- <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.estado"
                            label="Estado"
                          ></v-text-field>
                        </v-col> -->
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="cancelar">
                      Cancelar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="guardar">
                      Guardar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog max-width="290">
                <v-card>
                  <v-card-title class="headline" v-if="Accion == 1">
                    Activar Item
                  </v-card-title>
                  <v-card-title class="headline" v-if="Accion == 2">
                    Desactivar Item
                  </v-card-title>
                  <v-card-text>
                    Estás a punto de <span v-if="Accion == 1">activar </span>
                    <span v-if="Accion == 2">desactivar </span> el item
                    {{ Nombre }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      @click="activarDesactivarCerrar()"
                      color="primary"
                      flat="flat"
                    >
                      Cancelar
                    </v-btn>
                    <v-btn
                      v-if="Accion == 1"
                      @click="activar()"
                      color="primary"
                      flat="flat"
                    >
                      Activar
                    </v-btn>
                    <v-btn
                      v-if="Accion == 2"
                      @click="desactivar()"
                      color="primary"
                      flat="flat"
                    >
                      Desactivar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog max-width="500px">
                <v-card>
                  <v-card-title class="headline"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1">Cancel</v-btn>
                    <v-btn color="blue darken-1">OK</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.opciones`]="{ item }">
            <v-icon
              color="primary"
              small
              class="mr-2"
              @click="editarItem(item)"
            >
              mdi-pencil
            </v-icon>

            <template v-if="item.estado">
              <v-icon
                color="red darken-2"
                small
                @click="activarDesactivarMostrar(2, item)"
              >
                mdi-block-helper
              </v-icon>
            </template>
            <template v-else>
              <v-icon
                color="green darken-2"
                small
                @click="activarDesactivarMostrar(1, item)"
              >
                mdi-check
              </v-icon>
            </template>
            <template>
              <v-btn
                class="mx-2"
                fab
                dark
                x-small
                color="pink"
                @click="eliminarPersona(item)"
              >
                X
              </v-btn>
            </template>
          </template>

          <!-- <template v-slot:[`item.estado`]="{ item }">
            <div v-if="item.estado">
              <span class="red--text">Inactivo</span>
            </div>
            <div v-else>
              <span class="green--text">Activo</span>
            </div>
          </template> -->

          <template v-slot:no-data>
            <!-- <v-btn color="primary" @click="initialize"> Reset </v-btn> -->
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default {
  data() {
    return {
      search: "",
      persona: [],
      zb: 0,
      dialog: false,
      headers: [
        { text: "Tipo de Persona", value: "tipoPersona",sortable: true },
        { text: "Nit", value: "nit" },
        { text: "Número de documento", value: "numDocumento" },
        { text: "Nombres", value: "nombres" },
        { text: "Apellidos", value: "apellidos" },
        { text: "Teléfono", value: "telefono" },
        { text: "Correo", value: "correo" },
        { text: "Lugar de Nacimiento", value: "lugarNacimiento" },
        { text: "Opciones", value: "opciones" },
      ],
      editedItem: {
        tipoPersona: "",
        nit: "",
        numDocumento: "",
        nombres: "",
        apellidos: "",
        telefono: "",
        correo: "",
        lugarNacimiento: "",
        estado: 0,
      },
    };
  },
  created() {
    this.listarPersonas();
  },
  methods: {
    listarPersonas() {
      console.log(this.$store.state.token);
      let header = { headers: { token: this.$store.state.token } };
      axios
        .get("persona", header)
        .then((response) => {
          console.log(response.data.persona);
          this.persona = response.data.persona;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    guardar() {
      if (this.zb == 0) {
        console.log("Estoy guardando la persona", this.zb);
        const me = this;
        let header = { headers: { token: this.$store.state.token } };
        axios
          .post(
            "persona/guardar",
            {
              tipoPersona: this.editedItem.tipoPersona,
              nit: this.editedItem.nit,
              numDocumento: this.editedItem.numDocumento,
              nombres: this.editedItem.nombres,
              apellidos: this.editedItem.apellidos,
              telefono: this.editedItem.telefono,
              correo: this.editedItem.correo,
              lugarNacimiento: this.editedItem.lugarNacimiento,
              estado: this.editedItem.estado,
            },
            header
          )
          .then((response) => {
            console.log(response.data);
            me.listarPersonas();
            this.editedItem.tipoPersona = "";
            this.editedItem.nit = "";
            this.editedItem.numDocumento = "";
            this.editedItem.nombres = "";
            this.editedItem.apellidos = "";
            this.editedItem.telefono = "";
            this.editedItem.correo = "";
            this.editedItem.lugarNacimiento = "";
            this.editedItem.estado = "";
            this.dialog = false;
            // this.$router.push("/categorias")
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              icon: "Error faltan datos",
              title: "Personas",
              text: "No olvides llenar los espacios para guardar la persona",
            });
          });
      } else {
        console.log("Estoy editando la persona" + this.zb + " id " + this.id);
        const me = this;
        let header = { headers: { token: this.$store.state.token } };

        axios

          .put(
            `persona/actualizar/${this.id}`,
            {
              tipoPersona: this.editedItem.tipoPersona,
              nit: this.editedItem.nit,
              numDocumento: this.editedItem.numDocumento,
              nombres: this.editedItem.nombres,
              apellidos: this.editedItem.apellidos,
              telefono: this.editedItem.telefono,
              correo: this.editedItem.correo,
              lugarNacimiento: this.editedItem.lugarNacimiento,
            },
            header
          )
          .then((response) => {
            console.log(response.data);
            me.listarPersonas();
            this.editedItem.tipoPersona = "";
            this.editedItem.nit = "";
            this.editedItem.numDocumento = "";
            this.editedItem.nombres = "";
            this.editedItem.apellidos = "";
            this.editedItem.telefono = "";
            this.editedItem.correo = "";
            this.editedItem.lugarNacimiento = "";
            this.editedItem.estado = "";
            this.dialog = false;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    atras() {
      this.$router.push("/menu");
      this.$store.dispatch("setToken", this.$store.state.token);
    },
    editarItem(item) {
      this.zb = 1;
      console.log(item);
      this.id = item._id;
      this.editedItem.tipopersona = item.tipopersona;
      this.editedItem.nit = item.nit;
      this.editedItem.numdocumento = item.numdocumento;
      this.editedItem.nombres = item.nombres;
      this.editedItem.apellidos = item.apellidos;
      this.editedItem.telefono = item.telefono;
      this.editedItem.correo = item.correo;
      this.editedItem.lugarNacimiento = item.lugarNacimiento;
      this.dialog = true;
    },
    activarDesactivarMostrar(accion, item) {
      let id = item._id;
      console.log(accion);
      if (accion == 2) {
        console.log(id);
        let me = this;
        let header = { headers: { token: this.$store.state.token } };
        axios
          .put(
            `persona/desactivar/${id}`,
            {
              estado: 0,
            },
            header
          )
          .then(function () {
            me.listarPersonas();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else if (accion == 1) {
        console.log(id);
        let me = this;
        let header = { headers: { token: this.$store.state.token } };
        axios
          .put(
            `persona/activar/${id}`,
            {
              estado: 1,
            },
            header
          )
          .then(function () {
            me.listarPersonas();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    eliminarPersona(item) {
      console.log(item._id);
      let me = this;
      let header = { headers: { token: this.$store.state.token } };
      axios
        .delete(`persona/borrar/${item._id}`, header)
        .then((datos) => {
          console.log(datos);
          me.listarPersonas();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancelar() {
      const me = this;
      this.dialog = false;
      me.listarPersonas();
      this.editedItem.tipoPersona = "";
      this.editedItem.nit = "";
      this.editedItem.numDocumento = "";
      this.editedItem.nombres = "";
      this.editedItem.apellidos = "";
      this.editedItem.telefono = "";
      this.editedItem.correo = "";
      this.editedItem.lugarNacimiento = "";
      this.editedItem.estado = "";
    },
    cerrar() {
      Swal.fire({
        background: "black",
        position: "top-center",
        icon: "success",
        title: "Su sesión ha finalizado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$store.dispatch("setToken", "");
      this.$router.push("/");
    },
    imprimir() {
      var columns = [
        { title: "Tipopersona", dataKey: "tipoPersona" },
        { title: "nit", dataKey: "nit" },
        { title: "numDocumento", dataKey: "numDocumento" },
        { title: "nombres", dataKey: "nombres" },
        { title: "apellidos", dataKey: "apellidos" },
        { title: "Telefono", dataKey: "telefono" },
        { title: "correo", dataKey: "correo" },
        { title: "lugarNacimiento", dataKey: "lugarNacimiento" },
        { title: "Estado", dataKey: "estado" },
      ];
      var rows = [];

      this.persona.map(function (x) {
        rows.push({
          tipoPersona: x.tipoPersona,
          nit: x.nit,
          numDocumento: x.numDocumento,
          nombres: x.nombres,
          apellidos: x.apellidos,
          telefono: x.telefono,
          correo: x.correo,
          cargo: x.cargo,
          lugarNacimiento: x.lugarNacimiento,
          estado: x.estado,
        });
      });
      var doc = new jsPDF("p", "pt");
      doc.autoTable(columns, rows, {
        margin: { top: 60 },
        addPageContent: function () {
          doc.text("Lista de Personas", 40, 30);
        },
      });

      doc.save("Personas.pdf");
    },
  },
};
</script>
<style>
.fondo {
  position: fixed;
  width: 1366px;
  height: 800px;
  background-image: url("../assets/beneficiarios/Fondo.png");
}
.botondesplegable {
  position: absolute;
  left: 60px;
  top: 5px;
}
.iniciosesion {
  position: absolute;
  width: 260px;
  height: 60px;
  left: 1080px;
  top: 5px;
  padding-left: 7px;
  background: #266439;
  border-radius: 25px;
}
.iconopersona {
  float: left;
}
.letrasesion {
  color: white;
  padding-right: 7px;
  font-family: "Fredoka One", cursive;
  letter-spacing: 2px;
    font-size: 24px;
}
.personasasas {
  color: white;
  font-family: "Fredoka One", cursive;
  font-size: 50px;
  letter-spacing: 1px;
}
.cuadro {
  position: absolute;
  width: 1181px;
  height: 500px;
  left: 80px;
  top: 80px;
}
.fondocuadro {
  background-image: url("../assets/fondos/tabla.png");
  width: 1181px;
  height: 90px;
}
#azul {
  margin-top: 90px;
  margin-right: 10px;
  width: 1800px;
}
.fecha {
  position: absolute;
  width: 60px;
  height: 60px;
  left: 30px;
  top: 5px;
  padding-left: 2px;
  background: #266439;
  border-radius: 50%;
}
.buscar {
  left: 90px;
  width: 400px;
  height: 60px;
}
.color {
  color: white;
}
.user {
  text-align: center;
  margin-top: 70px;
}
.nuevo {
  width: 30px;
  height: 30px;
  border-radius: 50px 50px;
}
.impresora {
  width: 30px;
  height: 30px;
  border-radius: 50px 50px;
}
</style>