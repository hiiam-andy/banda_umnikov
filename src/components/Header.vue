<template>
  <header class="header">
    <img :src="LOGO" alt="logo" class="logo">
    <nav>
      <router-link class="link" to="/">ГЛАВНЫЙ</router-link>
      <router-link class="link" to="/about">ЗАДАНИЕ</router-link>
    </nav>
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
.logo{
  color: black;
  cursor: pointer;
}
.link{
  padding: 10px 12px;
  margin-left: 15px;
  color:#fff;
  border: 2px solid #fff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color .2s;
}
.link:hover{
  background-color: hsla(0,0%,100%,.2);
}
@media(max-width: 456px){
.link{
  font-size: 12px;
}
}
</style>