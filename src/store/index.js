import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const time = parseInt(process.env.VUE_APP_TIME)
const timebreak = parseInt(process.env.VUE_APP_TIMEBREAK)

export default new Vuex.Store({
  state: {
    sound: 'alarm.mp3',
    items: [],
    current: '',
    finished: [],
    timeleft: time,
    break: false,
    status: 0,
    timer: 0,
    pause: 0,
    audio: new Audio(require('../assets/alarm.mp3'))
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
      state.items[data].edit = true
    },
    delitem (state, data) {
      state.items.splice(data, 1)
    },
    submitedit (state, data) {
      state.items[data].name = state.items[data].model
      state.items[data].edit = false
    },
    canceledit (state, data) {
      state.items[data].model = state.items[data].name
      state.items[data].edit = false
    },
    countdown (state) {
      state.timeleft--
    },
    finish (state, skip) {
      clearInterval(state.timer)
      state.status = 0
      if (!state.break) {
        state.finished.push(state.current)
      }
      state.current = ''
      if (state.items.length > 0) {
        state.break = !state.break
        this.commit('start')
      }
      state.timeleft = state.break ? timebreak : time
      if (!skip) {
        const audio = new Audio()
        audio.src = require('@/assets/' + state.sound)
        audio.play()
      }
    },
    start (state) {
      if (state.status === 0 && state.items.length > 0) {
        state.current = state.break ? '休息一下' : state.items.shift().name
      }
      if (state.current.length) {
        state.status = 1
        state.timer = setInterval(() => {
          state.timeleft--
          if (state.timeleft <= 0) {
            this.commit('finish')
          }
        }, 1000)
      }
    },
    pause (state) {
      state.status = 2
      clearInterval(state.timer)
    },
    pause0 (state) {
      state.pause = 0
      // this.commit('finish')
      state.audio.pause()
    },
    pause1 (state) {
      state.pause = 1
      // this.commit('finish')
      state.audio.play()
    },
    delfinish (state, data) {
      state.finished.splice(data, 1)
    },
    finishedit (state, data) {
      state.finished.push(state.items[data].name)
      state.items.splice(data, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({ key: 'pomodoro' })
  ]
})
