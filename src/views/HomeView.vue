<template>
  <hero/>
<place-list :places="places"/>
</template>

<script>
import Places from '@/api/indexApi';
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
      const response = await Places.getAll();
      this.places = response;
    }
  },
  mounted(){
    this.fetchPlaces()
  }
}
</script>
<style scoped>

</style>
