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
        <button class="hero_button" @click="search">
          <img :src="SEARCH" alt="search" class="search">
        </button>
      </div>
      <my-button 
        @click="getRandomPlace()" 
        class="btn">
          Выбрать случайный ресторан
      </my-button>
      <my-dialog v-model:show="dialogVisible">
        <place-item-dialog :randomPlace="randomPlace"></place-item-dialog>
      </my-dialog>
    </div>
  </div>
</template>

<script>
import Places from '@/utils/indexApi';
import SEARCH from '../store/search.svg'
import PlaceItem from './PlaceItem.vue';
import PlaceItemDialog from './PlaceItemDialog.vue';

export default {
    
  components: { PlaceItem, PlaceItemDialog },

  emits:['searchPlace'] , 

  data(){
    return{
      inputValue:'',
      SEARCH: SEARCH,
      randomPlace:{},
      dialogVisible:false,
    }
  },

  methods:{
    async getRandomPlace(){
      const res = await Places.getRandom()
      this.randomPlace = res;
      this.dialogVisible = true
    },
    search(){
        this.$emit('searchPlace', this.inputValue)
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
  padding: 15px 30px;
  height: 500px;
  background-color: rgb(142, 66, 219);
  margin-bottom: 10px;
}
.hero_header{
  margin-bottom: 8%;
  font-size: 96px;
  line-height: 104px;
  color:#fff;
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
  .hero_header{
  font-size: 64px;
  line-height: 68px;
  }
}
@media(max-width: 456px){
  .hero{
    max-height: 200px;
  }
  .hero_header{
    font-size: 30px;
    line-height: 32px;
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
</style>