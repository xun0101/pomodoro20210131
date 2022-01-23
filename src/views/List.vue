<template  lang="pug">
#list.d-flex.w-100
  .d-flex.flex-column.justify-content-between.w-100.p-5
    b-row.heihgt
      b-col(md='4')
        .d-flex.justify-content-between.align-items-center
          h1.h1text 待辦清單
          .d-flex.w-25.justify-content-between
            label.input-text(for='undone')
              input#undone.d-none(name='list' value='undone' type='radio' checked @click='num = 1')
              | 未完成

            label.input-text(for='completed')
              input#completed.d-none(name='list' value='completed' type='radio' @click='num = 2')
              | 已完成

        b-form-group.search.w-100(label-for='newinput')
          b-form-input#newinput.addinput.p-3(v-model='newinput' placeholder='新增待辦事項' @keydown.enter='additem')
          button.add-btn(@click='additem')
            img.add.img-fluid(src='../assets/image/icon-cancel.svg')
        ul.list-group.list-group-flush.mt-5(v-if='num == 1')
          li.d-flex.align-items-center.border-top.pb-3.pt-3(v-for='(item,keys) in items' :key='keys')
            button.btn.undonecheck.rounded-circle.btn-outline-light.mr-3(@click='finishedit(keys)')
            input.mr-auto.w-100.undonetext.list-item(v-if='item.edit' v-model='item.model' @keydown.enter='submitedit(keys)')
            .mr-auto.undonetext.list-item(v-else :state='item.state') {{item.name}}
            button.edit.text-white(v-if='item.edit' @click='submitedit(keys)') ✓
            button.edit(v-else @click='edititem(keys)')
              img(src='../assets/image/icon-edit.svg')
            button.edit.text-white(v-if='item.edit' @click='canceledit(keys)') ⭯
            button.edit(v-else @click='delitem(keys)')
              img(src='../assets/image/icon-cancel.svg')
        ul.list-group.list-group-flush.mt-5(v-else)
          li.d-flex.align-items-center.border-top.pt-3(v-for='(item, keys) in finished' :key='keys')
            .mr-3.undonecheck.text-white.text-center ✓
            del.mr-auto.undonetext.list-item {{ item }}
            button.edit(@click='delfinish(keys)')
              img(src='../assets/image/icon-cancel.svg')
        hr#hr.d-none.d-md-block
      b-col.d-flex.flex-column.justify-content-between
        .d-flex.flex-column.align-items-center
          .time.w-100.d-flex.justify-content-center
            span {{ timeText }}
          .d-flex.align-items-center.justify-content-center.mt-5.w-50
            pausecomponent
            button.btn.rounded-circle.play.mx-3(@click='start' v-if='$store.state.status !== 1')
              img(src='../assets/image/icon-play--orange.svg')
            button.btn.rounded-circle.play.mx-3(@click='pause' v-else)
              img(src='../assets/image/icon-play--green.svg')
            button.btn.rounded-circle.btn-outline-light.bell.mx-3(@click='finish')
              img.img-fluid(src='../assets/image/icon-delete.svg')
    a.router-link-active(href='#/')
      .half
        img.img(src='../assets/image/tomato--orange.svg')
  div.
</template>

<script>
import PauseComponent from '../components/Pause'
export default {
  components: {
    PauseComponent
  },
  data () {
    return {
      num: 1,
      newinput: ''
    }
  },
  computed: {
    items () {
      return this.$store.state.items.map(item => {
        item.state = item.model
        return item
      })
    },
    finished () {
      return this.$store.state.finished
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
    additem () {
      this.$store.commit('additem', this.newinput)
      this.newinput = ''
    },
    edititem (index) {
      console.log(index)
      this.$store.commit('edititem', index)
    },
    delitem (index) {
      this.$store.commit('delitem', index)
    },
    submitedit (index) {
      this.$store.commit('submitedit', index)
    },
    canceledit (index) {
      this.$store.commit('canceledit', index)
    },
    delfinish (index) {
      this.$store.commit('delfinish', index)
    },
    finishedit (index) {
      this.$store.commit('finishedit', index)
    },
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
