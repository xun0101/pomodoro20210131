<template>
  <div id="list" class="d-flex w-100">
<div class="d-flex flex-column justify-content-between  w-100 p-5">
    <b-row class="heihgt">
      <b-col md="4">
        <div class="d-flex justify-content-between align-items-center">
        <h1 class="h1text">待辦清單</h1>
        <div class="d-flex w-25 justify-content-between">
        <label class="input-text" for="undone">
        <input id="undone" class="d-none" name="list" value="undone" type="radio" checked @click="num = 1">
        未完成
        </label>
        <label class="input-text" for="completed">
        <input id="completed" class="d-none" name="list" value="completed" type="radio" @click="num = 2">
        已完成
        </label>
        </div>
        </div>
        <b-form-group
          label-for="newinput"
          class="search w-100"
        >
      <b-form-input
        id="newinput"
        v-model="newinput"
        placeholder="新增待辦事項"
        class="addinput p-3"
        @keydown.enter="additem"
      ></b-form-input>
      <button class="add-btn" @click="additem"><img src="../assets/image/icon-cancel.svg" class="add img-fluid"></button>
    </b-form-group>
        <ul v-if="num == 1" class="list-group list-group-flush mt-5">
        <li class="d-flex align-items-center border-top pb-3 pt-3" v-for="(item,keys) in items" :key="keys">
        <button class="btn undonecheck rounded-circle btn-outline-light mr-3" @click="finishedit(keys)"></button>
        <input v-if="item.edit" class="mr-auto w-100 undonetext list-item" v-model="item.model" @keydown.enter="submitedit(keys)">
        <div  v-else class="mr-auto undonetext list-item" :state="item.state">{{item.name}}</div>
          <button v-if="item.edit" class="edit text-white" @click="submitedit(keys)">&#10003;</button>
          <button v-else class="edit" @click="edititem(keys)"><img src="../assets/image/icon-edit.svg"></button>
          <button v-if="item.edit" class="edit text-white" @click="canceledit(keys)">⭯</button>
          <button v-else class="edit" @click="delitem(keys)"><img src="../assets/image/icon-cancel.svg"></button>
        </li>
        </ul>
        <ul v-else class="list-group list-group-flush mt-5">
        <li v-for="(item, keys) in finished" :key="keys" class="d-flex align-items-center border-top pt-3">
          <div class="mr-3 undonecheck text-white text-center">&#10003;</div>
          <del class="mr-auto undonetext list-item">{{ item }}</del>
          <button class="edit" @click="delfinish(keys)"><img src="../assets/image/icon-cancel.svg"></button>
        </li>
        </ul>
        <hr id="hr" class="d-none d-md-block">
      </b-col>
      <b-col class="d-flex flex-column justify-content-between">
        <div class="d-flex flex-column align-items-center">
        <div class="time w-100 d-flex justify-content-center">
        <span>{{ timeText }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-center mt-5 w-50">
          <button class="btn rounded-circle btn-outline-light bell mx-3"><img class="img-fluid" src="../assets/image/icon-bell.svg"></button>
          <button class="btn rounded-circle play mx-3" @click="start" ><img src="../assets/image/icon-play--orange.svg"></button>
          <button class="btn rounded-circle play mx-3"><img src="../assets/image/icon-play--green.svg"></button>
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
    current () {
      return this.$store.state.current
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
      this.$store.dispatch('start')
    }
  }
}
</script>
