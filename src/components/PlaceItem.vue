<template>
  <div>
    Страница поста с id = {{ $route.params.id }}
    <h1>{{ onePlace.name }}</h1>
    <img class="card_image" :src='onePlace.photo' alt="img" >
    <p>адрес: {{ onePlace.address }}</p>
    <p>ориентир: {{ onePlace.landmark }}</p>
    <p>кухня: {{ onePlace.cuisine }}</p>
    <p>расстояние: {{ onePlace.distance }}</p>
    <p>время пути: {{ onePlace.time }}</p>
    <p>Бизнес ланч: {{ onePlace.business_lunch }}</p>
    <p>средний чек: {{ onePlace.price }}</p>
  </div>
</template>

<script>
import Places from '@/api/indexApi';

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

</style>