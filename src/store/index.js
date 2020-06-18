import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increase(state) {
      state.count++
    },
    decrease(state) {
      state.count--
    }
  },
  actions: {},
  getters: {
    show (state) {
      return '当前书数目为' + state.count
    }
  },
  modules: {}
})
