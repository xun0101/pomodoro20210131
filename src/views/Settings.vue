<template>
  <div id="setting" class="d-flex w-100">
<div class="d-flex flex-column justify-content-between  w-100 p-5">
    <b-row class="heihgt">
      <b-col md="4">
        <b-row>
        <h1 class="h1text w-100">專注度分析</h1>
          <b-col class="box-text" md="5">
            <h6>今日</h6>
            <div class="d-flex align-items-center text-center border">
          <div class="box w-100">
            <h1 class="h1text1">{{items.length}}</h1>
            <p class="box-text">待辦事項</p>
          </div>
          <hr class="hr">
          <div class="box w-100">
            <h1 class="h1text2">{{finished.length}}</h1>
            <p class="box-text">完成事項</p>
          </div>
        </div>
          </b-col>
          <b-col class="box-text" md="5">
            <h6>本周</h6>
            <div class="d-flex align-items-center text-center border">
          <div class="box w-100">
            <h1 class="h1text1">{{items.length}}</h1>
            <p class="box-text">待辦事項</p>
          </div>
          <hr class="hr">
          <div class="box w-100 ">
            <h1 class="h1text2">{{finished.length}}</h1>
            <p class="box-text">完成事項</p>
          </div>
        </div>
          </b-col>
          <b-col class="mt-5"><ChartComponent :customChartData="customChartData" :options="options"></ChartComponent></b-col>
        </b-row>
        <hr id="hr">
      </b-col>
      <b-col class="d-flex flex-column justify-content-between">
        <div class="d-flex flex-column align-items-center">
        <div class="time w-100 d-flex justify-content-center">
        <span>{{timeText}}</span>
        </div>
        <div class="d-flex align-items-center justify-content-center mt-5 w-50">
          <PauseComponent></PauseComponent>
          <button class="btn rounded-circle play mx-3" @click="start" v-if="$store.state.status !== 1"><img src="../assets/image/icon-play--orange.svg"></button>
          <button class="btn rounded-circle play mx-3"  @click="pause" v-else><img src="../assets/image/icon-play--green.svg"></button>
          <button  class="btn rounded-circle bell mx-3" @click="finish"><img class="img-fluid" src="../assets/image/icon-delete.svg"></button>
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
import PauseComponent from '../components/Pause'
import ChartComponent from '../components/Chart'

export default {
  computed: {
    finished () {
      return this.$store.state.finished
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
  data () {
    return {
      customChartData: {
        labels: [
          '已完成',
          '未完成'
        ],
        datasets: [
          {
            label: '完成度',
            data: [this.$store.state.finished.length, this.$store.state.items.length],
            backgroundColor: ['#FF6A1A', '#6C904D']
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: '分析'
        }
      }
    }
  },
  methods: {
    start () {
      this.$store.commit('start')
      console.log(this.$store.state.items.length)
    },
    pause () {
      this.$store.commit('pause')
    },
    pause0 () {
      this.$store.commit('pause0')
    },
    pause1 () {
      this.$store.commit('pause1')
      console.log('123')
    },
    finish (skip) {
      console.log(123)
      this.$store.commit('finish')
    }
  },
  components: {
    PauseComponent,
    ChartComponent
  }
}
</script>
