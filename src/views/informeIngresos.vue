<template>
  <div class="fondo">
    <div>
      <button @click="atras" class="flechaingreso">
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
      <v-toolbar-title class="informeIngresossssss">Ingresos</v-toolbar-title>
    </div>

    <div class="cuadro">
      <div class="container">
        <v-data-table
          :items-per-page="5"
          :headers="headers"
          :items="ingreso"
          :search="search"
          id="azul"
        >
          <template v-slot:top>
            <v-toolbar flat class="fondocuadro">
              <v-btn class="impresora" @click="imprimir()"
                ><v-icon>mdi-printer</v-icon></v-btn
              >

              <v-spacer></v-spacer>

              <h4 class="de2">De</h4>

              <div class="fecha1">
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  color="green lighten-1"
                  header-color="success"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    color="green lighten-1"
                    header-color="green"
                    v-model="date"
                    @input="menu = false"
                  ></v-date-picker>
                </v-menu>
              </div>

              <v-spacer></v-spacer>

              <h4 class="a2">A</h4>

              <div class="fecha2">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  color="green lighten-1"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date2"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    color="green lighten-1"
                    header-color="success"
                    v-model="date2"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </div>

              <v-spacer></v-spacer>

              <div>
                <v-btn
                  color="#266439"
                  class="buscarIngreso white--text mb-2"
                  @click="buscarFechas"
                >
                  <v-icon dark left> mdi-magnify </v-icon>
                </v-btn>
              </div>

              <v-dialog v-model="dialog" persistent max-width="500px">
                <v-card>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-flex>
                            <v-select
                              v-model="editedItem.persona"
                              :items="persona"
                              label="Persona"
                            >
                            </v-select>
                          </v-flex>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-flex>
                            <v-select
                              v-model="editedItem.rubro"
                              :items="rubro"
                              label="Rubro"
                            >
                            </v-select>
                          </v-flex>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.valorIngreso"
                            label="Valor de Ingreso"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.descripcion"
                            label="Descripción"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.createdAt"
                            label="Fecha"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.estado"
                            label="Estado"
                          ></v-text-field>
                        </v-col>
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
                @click="eliminarIngreso(item)"
              >
                X
              </v-btn>
            </template>
          </template>

          <template v-slot:footer>
            <table style="padding: 5px 12px">
              <tr>
                <td width="80">Total:</td>
                <td width="20">{{ sumField("valorIngreso") }}</td>
              </tr>
            </table>
          </template>

          <template v-slot:[`item.estado`]="{ item }">
            <div v-if="item.estado">
              <span class="red--text">Inactivo</span>
            </div>
            <div v-else>
              <span class="green--text">Activo</span>
            </div>
          </template>

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
      ingreso: [],
      rubro: [],
      persona: [],
      zb: 0,
      date: "",
      date2: "",
      menu: false,
      modal: false,
      menu2: false,
      dialog: false,

      headers: [
        { text: "Persona", value: "persona.tipoPersona" },
        { text: "Rubro", value: "rubro.nombre" },
        { text: "Valor del Ingreso", value: "valorIngreso" },
        { text: "Descripción", value: "descripcion" },
        { text: "Fecha", value: "createdAt" },
        { text: "Estado", value: "estado" },
        { text: "Opciones", value: "opciones" },
      ],
      editedItem: {
        persona: "",
        rubro: "",
        valorIngreso: "",
        descripcion: "",
        createdAt: "",
        estado: "",
      },
    };
  },
  created() {
    this.listarIngresos();
    this.selectPersona();
    this.selectRubro();
  },
  methods: {
    sumField(key) {
      // sum data in give key (property)
      return this.ingreso.reduce((a, b) => a + (b[key] || 0), 0);
    },
    selectPersona() {
      let me = this;
      let personaArray = [];
      let header = { headers: { token: this.$store.state.token } };
      axios
        .get("persona", header)
        .then(function (response) {
          personaArray = response.data.persona;
          console.log(response.data);
          personaArray.map(function (x) {
            me.persona.push({ text: x.tipoPersona, value: x._id });
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    selectRubro() {
      let me = this;
      let rubroArray = [];
      let header = { headers: { token: this.$store.state.token } };
      axios
        .get("rubro", header)
        .then(function (response) {
          rubroArray = response.data.rubro;
          console.log(response.data);
          rubroArray.map(function (x) {
            me.rubro.push({ text: x.nombre, value: x._id });
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    listarIngresos() {
      console.log(this.$store.state.token);
      let header = { headers: { token: this.$store.state.token } };
      axios
        .get("ingreso", header)
        .then((response) => {
          console.log(response.data.ingreso);
          this.ingreso = response.data.ingreso;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    buscarFechas() {
      console.log(this.$store.state.token);
      let header = { headers: { token: this.$store.state.token } };
      let data = { dateFrom: this.date, dateTo: this.date2 };
      axios
        .post("ingreso/ingresos/fechas", data, header)
        .then((response) => {
          console.log(response.data.ingreso);
          this.ingreso = response.data.ingresosByDate;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    guardar() {
      if (this.zb == 0) {
        console.log("Estoy guardando los ingresos", this.zb);
        const me = this;
        let header = { headers: { token: this.$store.state.token } };
        axios
          .post(
            "ingreso/guardar",
            {
              persona: this.editedItem.persona,
              rubro: this.editedItem.rubro,
              valorIngreso: this.editedItem.valorIngreso,
              descripcion: this.editedItem.descripcion,
              estado: this.editedItem.estado,
            },
            header
          )
          .then((response) => {
            console.log(response.data);
            me.listarIngresos();
            this.editedItem.persona = "";
            this.editedItem.rubro = "";
            this.editedItem.valorIngreso = "";
            this.editedItem.descripcion = "";
            this.editedItem.estado = "";
            this.dialog = false;

            // this.$router.push("/categorias")
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              icon: "Error faltan datos",
              title: "Ingresos",
              text: "No olvides llenar los espacios para guardar el ingreso",
            });
          });
      } else {
        console.log("Estoy editando los ingresos" + this.zb + " id " + this.id);
        const me = this;
        let header = { headers: { token: this.$store.state.token } };
        axios

          .put(
            `ingreso/actualizar/${this.id}`,
            {
              persona: this.editedItem.persona,
              rubro: this.editedItem.rubro,
              valorIngreso: this.editedItem.valorIngreso,
              descripcion: this.editedItem.descripcion,
            },
            header
          )
          .then((response) => {
            console.log(response.data);
            me.listarIngresos();
            this.editedItem.persona = "";
            this.editedItem.rubro = "";
            this.editedItem.valorIngreso = "";
            this.editedItem.descripcion = "";
            this.editedItem.estado = "";
            this.dialog = false;
          })
          .catch(function (error) {
            console.log(error.data);
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
      this.editedItem.persona = item.persona;
      this.editedItem.rubro = item.rubro;
      this.editedItem.valorIngreso = item.valorIngreso;
      this.editedItem.descripcion = item.descripcion;
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
            `ingreso/desactivar/${id}`,
            {
              estado: 0,
            },
            header
          )
          .then(function () {
            me.listarIngresos();
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
            `ingreso/activar/${id}`,
            {
              estado: 1,
            },
            header
          )
          .then(function () {
            me.listarIngresos();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    eliminarIngreso(item) {
      console.log(item._id);
      let me = this;
      let header = { headers: { token: this.$store.state.token } };
      axios
        .delete(`ingreso/borrar/${item._id}`, header)
        .then((datos) => {
          console.log(datos);
          me.listarIngresos();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancelar() {
      const me = this;
      this.dialog = false;
      me.listarIngresos();
      this.editedItem.persona = "";
      this.editedItem.rubro = "";
      this.editedItem.valorIngreso = "";
      this.editedItem.descripcion = "";
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
        { title: "persona", dataKey: "persona" },
        { title: "rubro", dataKey: "rubro" },
        { title: "valorIngreso", dataKey: "valorIngreso" },
        { title: "descripcion", dataKey: "descripcion" },
        { title: "Estado", dataKey: "estado" },
      ];
      var rows = [];

      this.ingreso.map(function (x) {
        rows.push({
          persona: x.persona.tipoPersona,
          rubro: x.rubro.nombre,
          valorIngreso: x.valorIngreso,
          descripcion: x.descripcion,
          estado: x.estado,
        });
      });

      rows.push({
        persona: "",
        rubro: "",
        valorIngreso: "",
        descripcion: "Total: ",
        estado: this.sumField("valorIngreso"),
      });

      var doc = new jsPDF("p", "pt");
      doc.autoTable(columns, rows, {
        margin: { top: 60 },
        addPageContent: function () {
          doc.text("Lista de Ingresos", 40, 30);
        },
      });

      doc.save("Ingresos.pdf");
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
.informeIngresossssss {
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
}
.flechaingreso {
  position: absolute;
  width: 60px;
  height: 60px;
  left: 30px;
  top: 5px;
  padding-left: 2px;
  background: #266439;
  border-radius: 50%;
}
.fecha1 {
  top: 10px;
  left: 130px;
  width: 140px;
  height: 45px;
  border-radius: 50px 50px;
  background: #266439;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
}
.fecha2 {
  top: 10px;
  left: 80px;
  width: 140px;
  height: 45px;
  border-radius: 50px 50px;
  background: #266439;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
}
.de2 {
  padding-right: 5px;
}
.a2 {
  padding-right: 5px;
}
.color {
  color: white;
}
.user {
  text-align: center;
  margin-top: 70px;
}
.buscarIngreso {
  width: 30px;
  height: 30px;
  border-radius: 50px 50px 50px 50px;
}
.impresora {
  width: 30px;
  height: 30px;
  border-radius: 50px 50px;
}
</style>