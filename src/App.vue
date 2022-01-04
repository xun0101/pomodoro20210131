<template>
  <div id="app" class="d-flex">
    <b-navbar toggleable="lg" type="dark" variant="light" class=" d-flex flex-column h-100 left" >
      <b-navbar-nav class=" d-flex justify-content-center h-100 flex-column" >
        <b-nav-item to="/list"> <img src="./assets/image/icon-list.svg"> </b-nav-item>
        <b-nav-item href="#"> <img src="./assets/image/icon-analysis.svg"> </b-nav-item>
      </b-navbar-nav>
  </b-navbar>
  <router-view ></router-view>
  </div>
</template>

<style>
#app{
  height: 100vh;
}
.left{
  width: 80px;
}
</style>
