import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sound: 'alarm.mp3',
    items: []
  },
  mutations: {
    additem (state, data) {
      state.items.push({
        name: data,
        edit: false,
        model: data
      })
    },
    edititem (state, data) {
      console.log(state)
      state.items[data].edit = !state.items[data].edit
    }
  },
  actions: {
  },
  modules: {
  }
})
