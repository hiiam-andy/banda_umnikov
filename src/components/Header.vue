<template>
  <header class="header">
      <router-link to="/">
        <img :src="LOGO" alt="logo" class="header_logo">
      </router-link>
      <router-link class="header_link" to="/about">ЗАДАНИЕ</router-link>
  </header>
</template>

<script>
import LOGO from '../store/logo.svg'
export default {
  data: function () {
    return {
      LOGO: LOGO
    }
  }
}
</script>

<style scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 70px;
  background-color: rgb(142, 66, 219);
}
.header_logo{
  color: black;
  cursor: pointer;
}
.header_link{
  padding: 10px 12px;
  margin-left: 15px;
  color:#fff;
  border: 2px solid #fff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color .2s;
}
.header_link:hover{
  background-color: hsla(0,0%,100%,.2);
}
.header_link:active{
  background-color: #86ad38;
}
@media(max-width: 456px){
.header_link{
  font-size: 12px;
}
}
</style>