<template>
  <div>
  Страница поста с id = {{ $route.params.id }}
  <h1>{{ onePlace.name }}</h1>
  <img class="card_image" :src='onePlace.photo' alt="img" >
  <p>{{ onePlace.address }}</p>
  <p>{{ onePlace.landmark }}</p>
  <p>{{ onePlace.cuisine }}</p>
  <p>{{ onePlace.distance }}</p>
  <p>{{ onePlace.time }}</p>
  <p>{{ onePlace.business_lunch }}</p>
  <p>{{ onePlace.price }}</p>


  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data(){
      return{
        onePlace:{}
      }
    },
  methods:{
    async getOnePlace(){
      try{
        const response = await axios.get(`https://bandaumnikov.ru/api/test/site/get-view?id=${this.$route.params.id}`);
        this.onePlace = response.data.data;
      } catch(err){
        console.log(err)
      }
    },
  },
  mounted(){
  this.getOnePlace()
}
  }
</script>

<style lang="scss" scoped>

</style>