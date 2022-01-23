<template lang="pug">
#home.d-flex.w-100
  .d-flex.flex-column.justify-content-between.w-100.align-items-center.mt-5
    b-row.w-75
      b-col.d-flex.flex-column.justify-content-between.align-items-center
        .time.h-100.w-100.d-flex.justify-content-center
          span {{ timeText }}
        .d-flex.align-items-center.justify-content-center.mt-5.w-50
          PauseComponent
          b-btn.rounded-circle.play.mx-3(v-if="$store.state.status !== 1" @click="start")
            img(src='../assets/image/icon-play--orange.svg')
          b-btn.rounded-circle.play.mx-3(v-else @click="pause")
            img(src='../assets/image/icon-play--green.svg')
          b-btn.rounded-circle.btn-outline-light.bell.mx-3(@click="finish(true)")
            img.img-fluid(src='../assets/image/icon-delete.svg')
      b-col.text
        h1 {{ currentText }}
    img.tomato(src='../assets/image/tomato--orange.svg').d-none.d-md-block
</template>

<script>
import PauseComponent from '../components/Pause'

export default {
  components: {
    PauseComponent
  },
  computed: {
    current () {
      return this.$store.state.current
    },
    items () {
      return this.$store.state.items
    },
    currentText () {
      return this.current.length > 0 ? this.current : this.items.length > 0 ? '點擊開始' : '沒有事項'
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
      this.$store.commit('start')
    },
    pause () {
      this.$store.commit('pause')
    },
    finish () {
      this.$store.commit('finish')
    }
  }
}
</script>
