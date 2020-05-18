<template>
  <div id="app">
    <header class="top-fixed">
      <c-header></c-header>
    </header>
    <section class="body">
        <router-view></router-view>
    </section>
  </div>
</template>

<script>
import header from './header.vue';
export default {
  name: 'app',
  data(){
      return {
      }
  },
  components: {
      'c-header': header,
  },
  computed: {}
}
</script>

<style>
.top-fixed {
    top: 0;
    left: 0;
}
#app {
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    -webkit-box-orient: vertical;
}

.body {
    width: 100%;
    height: 100%;
    flex: 1;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
</style>
