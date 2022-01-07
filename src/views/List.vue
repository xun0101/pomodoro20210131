<template>
  <div id="list" class="d-flex w-100">
<div class="d-flex flex-column justify-content-between w-100 align-items-center mt-5">
    <b-row class="w-100">
      <b-col class="bg-danger">
        <h1>待辦清單</h1>
        <input type="text" class="w-100 addinput">
        <button class="add-btn"><img src="../assets/image/icon-cancel.svg" class="add img-fluid"></button>
      </b-col>
      <b-col class="d-flex flex-column justify-content-between align-items-center">
        <div class="time h-100 w-100 d-flex justify-content-center">
        <span>{{ timeText }}</span>
        </div>
        <div class="d-flex align-items-center justify-content-around mt-5 w-50">
          <button class="btn rounded-circle btn-outline-light bell"><img class="img-fluid" src="../assets/image/icon-bell.svg"></button>
          <button  v-if="status !== 1" @click="start" class="btn rounded-circle play"><img src="../assets/image/icon-play--orange.svg"></button>
          <button  v-else @click="pause" class="btn rounded-circle play"><img src="../assets/image/icon-play--green.svg"></button>
          <button  class="btn rounded-circle btn-outline-light bell"><img class="img-fluid" src="../assets/image/icon-delete.svg"></button>
        </div>
      </b-col>
      <b-col class="text">
        <h1>{{ currentText }}</h1>
      </b-col>
    </b-row>
    <img class="tomato" src="../assets/image/tomato--orange.svg" >
  </div>
  </div>
</template>

<style>
.add{
  transform:rotate(45deg);
}
.add-btn{
  top: 187px;
left: 624px;
width: 48px;
height: 40px;
background: #F08448 0% 0% no-repeat padding-box;
border-radius: 71px;
opacity: 1;
border: none;
}

.appinput{
  top: 179px;
left: 120px;
width: 560px;
height: 56px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #FFFFFF;
border-radius: 183px;
opacity: 1;
}
</style>

<script>
</script>
