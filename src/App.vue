<template>
  <v-header/>
  <router-view/>
  <v-footer/>
</template>
<script>
import VHeader from '@/components/Header.vue';
import VFooter from '@/components/Footer.vue';

export default {
  components: { VHeader, VFooter },
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: proxima,Helvetica Neue,Arial,sans-serif;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
li {
  list-style: none;
}
</style>
