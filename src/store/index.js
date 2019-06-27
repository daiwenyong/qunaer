import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    letter:'',
    city:localStorage.getItem('city')
  },
  mutations:{
    changeLetter(state,value){
      state.letter = value
    },
    changeCity(state,value){
      state.city = value;
      localStorage.setItem('city',value)
    },
  }
})
