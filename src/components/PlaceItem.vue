<template>
  <div class="place">
    <img class="place_image" :src='onePlace.photo' alt="img" >
    <div class="place_description">
      <h1 class="place_header">{{ onePlace.name }}</h1>
      <p class="desc"><b>адрес: </b>{{ onePlace.address }}</p>
      <p class="desc"><b>ориентир: </b>{{ onePlace.landmark }}</p>
      <p class="desc"><b>кухня: </b>{{ onePlace.cuisine }}</p>
      <p class="desc"><b>расстояние: </b>{{ onePlace.distance }} м</p>
      <p class="desc"><b>время пути: </b>{{ onePlace.time }} мин</p>
      <p class="desc"><b>бизнес ланч: </b>{{ onePlace.business_lunch ? 'есть': 'нет' }}</p>
      <p class="desc"><b>средний чек: </b>{{ onePlace.price }}р</p>
    </div>
  </div>
</template>

<script>
import Places from '@/utils/indexApi';

  export default {
    data(){
      return{
        onePlace:{}
      }
    },
  methods:{
    async fetchPlace(){
      const placeID = this.$route.params.id
      const response = await Places.getOne(placeID);
      this.onePlace = response
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
    max-width: 40%;
  }
  .place_description{
    width: 58%
  }
  .place_header{
    margin-bottom: 15px;
  }
  .desc{
    margin-bottom: 5px;
  }
  @media(max-width: 665px){
    .place{
      flex-direction: column;
    }
    .place_description{
      width:100%
    }
    .place_image{
    width: 100%;
    max-width: 500px;
  }
  }
</style>