<template>
  <div class="hero">
    <h2 class="hero_header">Рестораны близко</h2>
    <div class="hero_search_section">
      <div class="hero_search">
        <input 
          class="hero_input" 
          v-model="inputValue" 
          placeholder="Поиск..."
        >
        <button class="hero_button" @click="searchPlace">
          <img :src="SEARCH" alt="search" class="search">
        </button>
      </div>
      <my-button 
        @click="getRandomPlace" 
        class="btn">
          Выбрать случайный ресторан
      </my-button>
    </div>
  </div>
</template>

<script>
import SEARCH from '@/assets/search.svg'
import PlaceItem from './PlaceItem.vue';


export default {
    
  components: { PlaceItem,

     },
  props:{
    randomPlace:{
      type: Object,
      required:true
    } 
  },
  emits:['searchPlace', 'getRandomPlace'] , 

  data(){
    return{
      inputValue:'',
      SEARCH: SEARCH,
    }
  },

  methods:{
    searchPlace(){
        this.$emit('searchPlace', this.inputValue)
        this.inputValue=''
      },
      getRandomPlace(){
        this.$emit('getRandomPlace')
      }
  },
}
</script>

<style scoped>
.hero{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 30px;
  background-color: rgb(142, 66, 219);
  margin-bottom: 10px;
}
.hero_header{
  margin-bottom: 30px;
  font-size: 48px;

  color:#fff;
  cursor: default;
}
.hero_search_section{
  display: flex;
  justify-content: space-between;
  width:70%
}
.hero_search{
  display: flex;
  height: 45px;
  width: 70%;
}
.hero_input{
  height: 100%;
  min-width: 50%;
  width:20%;
  flex: 1 1;
  padding: 0 15px;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 16px;
  color: #353b43;
}
.hero_input:focus{
  outline: none;
}
.hero_button{
  height: 100%;
  width:60px;
  background-color: #73b300;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  color:#fff;
  cursor: pointer;
  transition: background-color .2s;
}
.hero_button:hover{
  background-color: #46bed7;
}
.hero_button:active{
  background-color: #f0e524;
}
.search{
width: 25px;
height: 25px;
fill:#fff;
}
.random_btn{
  padding: 1% 2%;
  margin-left: 15px;
  color:#fff;
  border: none;
  border-radius: 4px;
  background-color: #73b300;
  text-decoration: none;
  cursor: pointer;
}
@media(max-width:880px){
  .hero_search_section{
    width:100%
  }

}
@media(max-width: 665px){
  .hero{
    height: 320px;
  }

}
@media(max-width: 456px){
  .hero{
    max-height: 200px;
  }
  .hero_header{
    font-size: 28px;
  
  }
  .hero_search_section{
    flex-direction: column;
  }
  .hero_search{
    width: 100%;
    margin-bottom: 20px;
  }
  .btn{
    align-self: flex-end;
    margin: 0;
    padding: 2%;
  }
}
@media(max-height: 550px){
  .hero{
    height: 160px;
  }
  .hero_header{
    margin-bottom: 15px;
  }
}
  </style>