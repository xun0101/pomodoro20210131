<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" style=" display: flex; flex-direction: column; height: 100vh; width: 3vw;" >
      <b-navbar-nav style=" display: flex; flex-direction: column; justify-content: center; height: 100vh;">
        <b-button v-b-toggle.sidebar-1 > <img src="../image/icon-list.svg"> </b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow >
      <div class=" px-3 py-2">
        <img src="../image/icon-list.svg">
      </div>
    </b-sidebar>
        <b-nav-item href="#"> <img src="../image/icon-analysis.svg"> </b-nav-item>
      </b-navbar-nav>
  </b-navbar>
  </div>
</template>
