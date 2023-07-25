<template>
  <footer class="footer">
    <img :src="LOGO" alt="logo" class="footer_logo" @click="scrollToTop()">
    <p class="footer_dev"> 
      dev by 
      <a href="https://github.com/hiiam-andy" class="footer_myLink">hiiam-andy</a>
    </p>
    <a href="https://bandaumnikov.ru/" class="footer_myLink">Банда умников</a>
  </footer>
</template>

<script>
import LOGO from '@/assets/logo.svg'
export default {
  data: function () {
    return {
      LOGO: LOGO
    }
  },
  methods:{
    scrollToTop(){
      window.scrollTo({top:0, left:0, behavior: 'smooth'})
    }
  }
}
</script>

<style scoped>
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 70px;
  background-color: #8E42DB;
}
.footer_logo{
  color: black;
  cursor: pointer;
}
.footer_dev{
  color:#51158E;
  cursor: default;
}
.footer_myLink{
  text-decoration: none;
  color:#BF92ED;
  transition: color .2s;
}
.footer_myLink:hover{
  color:#fff
}
.footer_myLink:active{
  color:#2f3841;
}
@media(max-width: 377px){
.footer{
  flex-direction: column;
  height: 120px;
}
}
</style>