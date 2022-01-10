import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sound: 'alarm.mp3',
    items: []
  },
  mutations: {
    selectSound (state, data) {
      state.sound = data
    },
    additem (state, data) {
      state.items.push({
        name: data,
        edit: false,
        model: data
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
