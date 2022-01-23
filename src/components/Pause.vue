<template id="pause">
<div>
  <button class="btn rounded-circle bell mx-3" @click="pause0" v-if="pause !== 0"><img class="img-fluid" src="../assets/image/icon-bell.svg"></button>
  <button class="btn rounded-circle bell2 mx-3" @click="pause1" v-else><img class="img-fluid" src="../assets/image/icon-bell.svg"></button>
</div>
</template>

<script>
export default {
  name: 'pause',
  data () {
    return {
      audio: new Audio('http://soundbible.com/mp3/muscle-car-daniel_simon.mp3'),
      pause: 0
    }
  },
  methods: {
    pause0 () {
      this.pause = 0
      this.audio.pause()
    },
    pause1 () {
      this.pause = 1
      this.audio.play()
    }
  }
}
</script>
