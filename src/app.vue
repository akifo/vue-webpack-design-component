<template>
  <div id="wrapper">
    <!-- header -->
    <header id="header">
      <h1>Vue.js | Webpack | Design-Component</h1>
      <ul>
      <li><a href="#/top">top</a></li>
      <li><a href="#/price">price</a></li>
      <li><a href="#/about">about</a></li>
      </ul>
    </header>
    <component is="{{view}}"
      class="main"
      params="{{params}}">
    </component>
    <footer id="footer">
      this is footer
    </footer>
  </div>
</template>

<script>
module.exports = {
  el: '#app',
  data: {
    view: '',
    params: {
      msg: 'message from app.vue'
    }
  },
  components: {
    'top-view': require('./views/top-view.vue'),
    'price-view': require('./views/price-view.vue'),
    'about-view': require('./views/about-view.vue')
  }
}
</script>

<style lang="stylus">
body
  margin 0
  font-size 14px

a
  color #3498db

#wrapper
  background-color #f1f1f1
  color #2c3e50

#header, #main, #footer
  padding 20px  

#header, #footer
  background-color #34495e
  color: #f9f9f9
</style>