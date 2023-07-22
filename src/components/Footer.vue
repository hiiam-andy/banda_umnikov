<template>
  <footer class="footer">
    <img :src="LOGO" alt="logo" class="logo">
    <p class="dev">dev by <a href="https://github.com/hiiam-andy" class="myLink">hiiam-andy</a></p>
    <div>links</div>
  </footer>
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
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 70px;
  background-color: #8E42DB;
}
.logo{
  color: black;
  cursor: pointer;
}
.dev{
  color:#51158E
}
.myLink{
  text-decoration: none;
  color:#BF92ED

}
</style>