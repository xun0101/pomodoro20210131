<template>
  <div id="app" class="d-flex">
    <b-navbar toggleable="lg" type="dark" variant="light" class=" d-flex flex-column h-100 left" >
      <b-navbar-nav class=" d-flex justify-content-center h-100 flex-column" >
        <b-nav-item> <router-link to="/list"> <img src="./assets/image/icon-list.svg"> </router-link> </b-nav-item>
        <b-nav-item href="#"> <img src="./assets/image/icon-analysis.svg"> </b-nav-item>
      </b-navbar-nav>
  </b-navbar>
  <div class="d-flex flex-column justify-content-between w-100 align-items-center mt-5">
    <b-row class="w-75">
      <b-col class="time">
        <span>25</span>
        :
        <span>00</span>
      </b-col>
      <b-col class="text">
        <h1>無待辦事項</h1>
      </b-col>
    </b-row>
    <img class="tomato" src="./assets/image/tomato--orange.svg" >
  </div>
  </div>
</template>

<style>
#app{
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

</style>
