<template lang="pug">
#app.d-flex
  b-navbar.d-flex.flex-column.left(toggleable='lg' type='dark' variant='light')
    b-navbar-nav.d-flex.justify-content-center.h-100.flex-column
      b-nav-item(to='/list')
        img(src='./assets/image/icon-list.svg')
      b-nav-item(to='/settings')
        img(src='./assets/image/icon-analysis.svg')
    router-view(v-if="$route.meta.keepAlive")
  router-view(v-if="!$route.meta.keepAlive")
</template>

<!-- <style>
#app{
  height: 100vh;
}
.left{
  width: 80px;
}
</style> -->
