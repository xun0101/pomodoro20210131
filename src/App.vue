<template lang="pug">
#app.d-flex
  b-navbar.d-flex.flex-column.left(toggleable='lg' type='dark' variant='light')
    b-navbar-nav.d-flex.justify-content-center.h-100.flex-column
      b-nav-item(to='/list')
        img(src='./assets/image/icon-list.svg')
      b-nav-item(to='/settings')
        img(src='./assets/image/icon-analysis.svg')
  keep-alive
    router-view
</template>
