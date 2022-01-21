<template>
  <div id="setting" class="d-flex w-100">
<div class="d-flex flex-column justify-content-between  w-100 p-5">
    <b-row class="heihgt">
      <b-col md="4">
        <hr id="hr">
      </b-col>
      <b-col class="d-flex flex-column justify-content-between">
        <div class="d-flex flex-column align-items-center">
        <div class="time w-100 d-flex justify-content-center">
        <span>{{timeText}}</span>
        </div>
        <div class="d-flex align-items-center justify-content-center mt-5 w-50">
          <button class="btn rounded-circle btn-outline-light bell mx-3"><img class="img-fluid" src="../assets/image/icon-bell.svg"></button>
          <button class="btn rounded-circle play mx-3" @click="start" v-if="$store.state.status !== 1"><img src="../assets/image/icon-play--orange.svg"></button>
          <button class="btn rounded-circle play mx-3"  @click="pause" v-else><img src="../assets/image/icon-play--green.svg"></button>
          <button  class="btn rounded-circle btn-outline-light bell mx-3"><img class="img-fluid" src="../assets/image/icon-delete.svg"></button>
        </div>
        </div>
      </b-col>
    </b-row>
    <a href="#/" class="router-link-active"><div class="half"><img class="img" src="../assets/image/tomato--orange.svg" ></div></a>
  </div>
  <div>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    timeleft () {
      return this.$store.state.timeleft
    },
    timeText () {
      const m = Math.floor(this.timeleft / 60).toString().padStart(2, '0')
      const s = Math.floor(this.timeleft % 60).toString().padStart(2, '0')
      return `${m} : ${s}`
    }
  },
  methods: {
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')
      if (!skip) {
        const audio = new Audio()
        audio.src = require('@/assets/' + this.$store.state.sound)
        audio.play()
      }
      if (this.items.length > 0) {
        this.start()
      }
    },
    start () {
      this.$store.dispatch('start')
    },
    pause () {
      this.$store.dispatch('pause')
    }
  }
}
</script>
