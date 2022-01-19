import Vue from 'vue'
import Vuex from 'vuex'

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
    timer: 0
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
    // timeText (state) {
    //   const m = Math.floor(state.timeleft / 60).toString().padStart(2, '0')
    //   const s = Math.floor(state.timeleft % 60).toString().padStart(2, '0')
    //   return `${m} : ${s}`
    // },
    start (state, data) {
      if (state.current.length) {
        state.status = 1
        state.timer = setInterval(() => {
          state.$store.commit('countdown')
          if (state.timeleft <= -1) {
            state.finish(false)
          }
        }, 1000)
      }
      state.current = state.break ? '休息一下' : state.items.shift().name
    },
    countdown (state) {
      state.timeleft--
    },
    pause (state) {
      state.status = 2
      clearInterval(state.timer)
    },
    finish (state) {
      if (!state.break) {
        state.finished.push(state.current)
      }
      state.current = ''
      if (state.items.length > 0) {
        state.break = !state.break
      }
      state.timeleft = state.break ? timebreak : time
      console.log(state.finished, '1')
    },
    delfinish (state, data) {
      state.finished.splice(data, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})
