<template lang="pug">
#setting.d-flex.w-100
  .d-flex.flex-column.justify-content-between.w-100.p-5
    b-row.heihgt
      b-col(md='4')
        b-row
          h1.h1text.w-100 專注度分析
          b-col.box-text(md='5')
            h6 今日
            .d-flex.align-items-center.text-center.border
              .box.w-100
                h1.h1text1 {{items.length}}
                p.box-text 待辦事項
              hr.hr
              .box.w-100
                h1.h1text2 {{finished.length}}
                p.box-text 完成事項
          b-col.box-text(md='5')
            h6 本周
            .d-flex.align-items-center.text-center.border
              .box.w-100
                h1.h1text1 {{items.length}}
                p.box-text 待辦事項
              hr.hr
              .box.w-100
                h1.h1text2 {{finished.length}}
                p.box-text 完成事項
          b-col.mt-5
            ChartComponent(:customChartData='customChartData' :options='options')
        hr#hr
      b-col.d-flex.flex-column.justify-content-between
        .d-flex.flex-column.align-items-center
          .time.w-100.d-flex.justify-content-center
            span {{timeText}}
          .d-flex.align-items-center.justify-content-center.mt-5.w-50
            PauseComponent
            button.btn.rounded-circle.play.mx-3(@click='start' v-if='$store.state.status !== 1')
              img(src='../assets/image/icon-play--orange.svg')
            button.btn.rounded-circle.play.mx-3(@click='pause' v-else)
              img(src='../assets/image/icon-play--green.svg')
            button.btn.rounded-circle.bell.mx-3(@click='finish')
              img.img-fluid(src='../assets/image/icon-delete.svg')
    a.router-link-active(href='#/')
      .half
        img.img(src='../assets/image/tomato--orange.svg')
  div.
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
