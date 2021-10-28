import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:"",
    usuario: null,
    persona:[]
  },
  mutations: {
    setToken(state, token){
      state.token = token
    },
    setUsuario(state, usuario){
      state.usuario = usuario
    },
    setPersona(state, seleccion){
      state.persona =seleccion
    }
  },
  actions: {
    setToken(context, value) {
      context.commit('setToken', value)
    },
    setUsuario(context, value){
      context.commit('setUsuario', value)
    },
    getPersona({commit,state}){
      let header = {headers: {token:state.token}};
      axios
        .get("persona", header)
        .then((response) => {
          console.log(response.data.persona);
          commit("setPersona", response.data.persona)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  modules: {
  },
  getters:{
    header(state){
      return {headers: {token: state.token}}
    },
    allBeneficiario: (state)=>{
      return state.persona.filter(persona =>persona.tipoPersona === "beneficiario")
    }
  }
})
