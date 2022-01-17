<template>
  <div id="list" class="d-flex w-100">
<div class="d-flex flex-column justify-content-between  w-100 p-5">
    <b-row class="heihgt">
      <b-col cols="4">
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
        <li class="d-flex align-items-center border-top pb-3 pt-3" v-for="item in items" :key="item.name">
        <button class="btn undonecheck rounded-circle btn-outline-light mr-3"></button>
        <div class="mr-auto undonetext list-item">{{item.name}}</div>
          <button class="edit" @click="edititem(data.index)"><img src="../assets/image/icon-edit.svg"></button>
          <button class="edit"><img src="../assets/image/icon-cancel.svg"></button>
        </li>
        </ul>

        <ul v-else class="list-group list-group-flush mt-5">
        <li class="d-flex align-items-center border-top pt-3">
          <div class="mr-3 undonecheck text-white text-center">&#10003;</div>
          <del class="mr-auto undonetext list-item">456</del>
          <button class="edit"><img src="../assets/image/icon-cancel.svg"></button>
        </li>
        </ul>
        <hr id="hr">
      </b-col>
      <b-col class="d-flex flex-column justify-content-between">
        <div class="d-flex flex-column align-items-center">
        <div class="time w-100 d-flex justify-content-center">
        <span>25:00</span>
        </div>
        <div class="d-flex align-items-center justify-content-center mt-5 w-50">
          <button class="btn rounded-circle btn-outline-light bell mx-3"><img class="img-fluid" src="../assets/image/icon-bell.svg"></button>
          <button class="btn rounded-circle play mx-3"><img src="../assets/image/icon-play--orange.svg"></button>
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

<style>
.heihgt{
  height: 100vh;
}
.add{
  transform:rotate(45deg);
}
.add-btn{
  position: absolute;
  top: 10%;
left: 90%;
width: 48px;
height: 40px;
background: #F08448 0% 0% no-repeat padding-box;
border-radius: 71px;
opacity: 1;
border: none;
}

.addinput{
width: 100%;
height: 56px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #FFFFFF;
border-radius: 183px;
opacity: 1;
}

.search{
  width: 560px;
  position: relative;
}

.half{
  position: absolute;
  bottom: 0;
  right: 0;
  object-position: right bottom;
  width: 720px;
  overflow: hidden;
}

#hr{
  color: #000;
    border-top: 1px solid rgba(0,0,0,.1);
    box-shadow: inset 0 10px 10px -10px;
  -webkit-transform: rotate(270deg);
  width: 100vh;
  height: 2px;
  border: 0;
  padding-top: 10px;
  position: absolute;
  left: 20%;
  top: 47.5%;
}
.img{
  width: 1440px;
}

#completed:checked + #abc{
  display: block;
}

.h1text{
  top: 80px;
left: 120px;
width: 160px;
height: 59px;
text-align: left;
font: normal normal medium 40px/59px Noto Sans TC;
letter-spacing: 0px;
color: #E8E8E8;
opacity: 1;
}

.list-item{
top: 98px;
left: 544px;
width: 48px;
height: 24px;
text-align: left;
font: normal normal normal 16px/24px Noto Sans TC Regular;
letter-spacing: 0px;
color: #E8E8E8;
opacity: 1;
}

.undonecheck{
    width: 24px;
    height: 24px;
    cursor: pointer;
}
.undonetext{
width: 198px;
height: 24px;
font: normal normal normal 16px/24px Noto Sans TC Regular;
}

.edit{
background: transparent;
border: none;
}

.input-text{
width: 48px;
height: 24px;
text-align: left;
font: normal normal normal 16px/24px Noto Sans TC Regular;
letter-spacing: 0px;
color: #E8E8E8;
}
</style>

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
      return this.$store.state.items
    }
  },
  methods: {
    additem () {
      this.$store.commit('additem', this.newinput)
      this.newinput = ''
    },
    edititem (index) {
      this.$store.commit('edititem', index)
    }
  }
}
</script>
