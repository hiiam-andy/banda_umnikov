<template>
  <div class="place">
    <img
      v-if="!isLoading" 
      class="place_image" 
      :src='onePlace.photo' alt="img" 
      onerror="this.src='https://static.tildacdn.com/tild3938-3564-4633-b562-633139376630/_.jpg'" 
    >
    <h3 v-else class="place_image">
      Загрузка...
    </h3> 

    <div class="place_description">
      <h1 class="place_header">{{ onePlace.name }}</h1>
      <p class="place_description__item"><b>адрес: </b>{{ onePlace.address ? onePlace.address: 'Неизвестно' }}</p>
      <p class="place_description__item"><b>ориентир: </b>{{ onePlace.landmark ? onePlace.landmark: 'Неизвестно' }}</p>
      <p class="place_description__item"><b>кухня: </b>{{ onePlace.cuisine ? onePlace.cuisine : 'Интересно узнать' }}</p>
      <p class="place_description__item"><b>расстояние: </b>{{ onePlace.distance ? onePlace.distance + ' м.' : 'Надо прогуляться' }}</p>
      <p class="place_description__item"><b>время пути: </b>{{ onePlace.time ? onePlace.time + 'мин.' : 'Надо засечь' }}</p>
      <p class="place_description__item"><b>бизнес ланч: </b>{{ onePlace.business_lunch ? 'есть': 'нет' }}</p>
      <p class="place_description__item"><b>средний чек: </b>{{ onePlace.price ? onePlace.price +' p.': 'Надо проверить' }}</p>
      <div class="place_links">
        <h5>
          {{ !onePlace.time && !onePlace.distance ? "Можете узнать у друзей: " : 'Можете поделиться с друзьями: ' }}
          
        </h5>
        <my-vk class="place_link"/>
        <my-telegram class="place_link"/>
        <my-ok class="place_link"/>
      </div>
    </div>
  </div>
</template>

<script>
import Places from '@/utils/indexApi';
import MyButton from './UI/MyButton.vue';
import MyVk from './UI/MyVk.vue';
import MyTelegram from './UI/MyTelegram.vue';
import MyOk from './UI/MyOk.vue';

  export default {
  components: { MyButton, MyVk, MyTelegram, MyOk },
    data(){
      return{
        onePlace:{},
        isLoading: false
      }
    },
  methods:{
    async fetchPlace(){
      this.isLoading = true
      const placeID = this.$route.params.id
      const response = await Places.getOne(placeID);
      this.onePlace = response
      this.isLoading = false
    }
  },
  mounted(){
    this.fetchPlace()
  }
}
</script>

<style scoped>
.place{
  display: flex;
  justify-content: space-between;
  padding: 1%;
  margin-right: auto;
  margin-left: auto;
}
  .place_image{
    max-height: 400px;
    min-height: 300px;
    max-width: 40%;
  }
  .place_description{
    width: 58%;
    cursor: default;
  }
  .place_header{
    font-size: 24px;
    margin-bottom: 15px;
  }
  .place_description__item{
    margin-bottom: 5px;
    font-size: 14px;
  }
  .place_links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    width: 100%;
    max-width: 370px;
  }
  .place_link path{
    fill: #73b300;
  }
  @media(max-width: 665px){
    .place{
      flex-direction: column;
    }
    .place_description{
      width:100%
    }
    .place_image{
      max-width: 100%;
      max-height: 330px;
  }
  }
</style>