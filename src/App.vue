<template>
<my-header/>
  <router-view/>
</template>
<script>
import MyHeader from './components/Header.vue';
  export default {
  components: { MyHeader },
  }
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: proxima,Helvetica Neue,Arial,sans-serif;
}
img {
  max-width: 100%;
  height: auto;
}
li {
  list-style: none;
}
</style>
