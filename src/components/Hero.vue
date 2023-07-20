<template>
  <div class="hero">
    <h2 class="hero_header">Рестораны близко</h2>
    <div class="">


      <div class="hero_search">
        <input class="hero_input">
        <button class="hero_button">
          <img :src="SEARCH" alt="search" class="search">
        </button>
        <button class="random">Выбрать случайный ресторан</button>
      </div>
    

    </div>
  </div>
</template>

<script>
import SEARCH from '../store/search.svg'
  export default {
    data: function () {
            return {
                SEARCH: SEARCH
            }
        }
  }
</script>

<style scoped>
.hero{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 96px;
  line-height: 104px;
  color:#fff;
  height: 500px;
  background-color: rgb(142, 66, 219);
  margin-bottom: 10px;
}
.hero_header{
margin-bottom: 30px;
}
.hero_search{
  display: flex;
  height: 45px;
}
.hero_input{
  height: 100%;
  min-width: 500px;
  width:20%;
  flex: 1 1;
  padding: 0 15px;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 16px;
  color: #353b43;
}
.hero_input:focus{
  outline: none;
}
.hero_button{
  height: 100%;
  width:50px;
  background-color: #73b300;
  border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  border: none;
  color:#fff;
cursor: pointer;
}
.search{
width: 25px;
height: 25px;
fill:#fff;
}
.random{
  padding: 10px 12px;
  margin-left: 15px;
  color:#fff;
  border: none;
  border-radius: 4px;
  background-color: #73b300;
  text-decoration: none;
  cursor: pointer;
}
</style>