<template>
  <hero/>
<place-list :places="places"/>
</template>

<script>
import axios from 'axios'
import PlaceList from '@/components/PlaceList.vue'
import Hero from '@/components/Hero.vue';


export default {

  data(){
    return{
      places:[]
    }
  },
  components: {
    Hero,
    PlaceList
},
methods:{
    async fetchPlaces(){
      try{
        const response = await axios.get('https://bandaumnikov.ru/api/test/site/get-index');
        this.places = response.data.data;
      } catch(err){
        console.log(err)
      }
    }
  },
  mounted(){
    this.fetchPlaces()
  }
}
</script>
<style scoped>

</style>
