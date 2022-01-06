<template lang="pug">
#home.d-flex.w-100
  .d-flex.flex-column.justify-content-between.w-100.align-items-center.mt-5
    b-row.w-75
      b-col.d-flex.flex-column.justify-content-between.align-items-center
        .time.h-100.w-100.d-flex.justify-content-center
          span {{ timeText }}
        .d-flex.align-items-center.justify-content-around.mt-5.w-50
          button.btn.rounded-circle.btn-outline-light.bell
            img.img-fluid(src='../assets/image/icon-bell.svg')
          button.btn.rounded-circle.play(v-if='status !== 1' @click='start')
            img(src='../assets/image/icon-play--orange.svg')
          button.btn.rounded-circle.play(v-else @click='pause')
            img(src='../assets/image/icon-play--green.svg')
          button.btn.rounded-circle.btn-outline-light.bell
            img.img-fluid(src='../assets/image/icon-delete.svg')
      b-col.text
        h1 {{ currentText }}
    img.tomato(src='../assets/image/tomato--orange.svg')
</template>
<style>
#home{
  background-color: #304030;
  height: 100vh;
}
.left{
  width: 80px;
}

.time{
width: 451px;
height: 252px;
text-align: left;
font: normal normal normal 200px/252px Fjalla One;
letter-spacing: 0px;
color: #E8E8E8;
opacity: 1;
}

.text{
width: 272px;
height: 47px;
text-align: left;
font: normal normal medium 32px/47px Noto Sans TC;
letter-spacing: 0px;
color: #E8E8E8;
opacity: 1;
line-height: center;
}
.tomato{
  width: 1200px;
}

.play{
  top: 372px;
left: 394px;
width: 64px;
height: 64px;
background: #E8E8E8 0% 0% no-repeat padding-box;
opacity: 1;
}

.bell{
  top: 380px;
left: 474px;
width: 48px;
height: 48px;
border: 2px solid #E8E8E8;
opacity: 1;
}
</style>

<script>
export default {
  data () {
    return {
      // 0 = 停止
      // 1 = 倒數中
      // 2 = 暫停
      status: 0,
      timer: 0
    }
  },
  computed: {
    current () {
      return this.$store.state.current
    },
    items () {
      return this.$store.state.items
    },
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
    start () {
      if (this.status === 0 && this.items.length > 0) {
        this.$store.commit('start')
      }
      if (this.current.length) {
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    pause () {
      this.status = 2
      clearInterval(this.timer)
    },
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
    }
  }
}
</script>
