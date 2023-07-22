<template>
  <hero @searchPlace="searchPlace"/>
  <place-list v-if="sortedAndSearch.length > 0" :places="sortedAndSearch" />
  <h2 v-else>Не найдено</h2>
</template>

<script>
import Places from '@/utils/indexApi';
import PlaceList from '@/components/PlaceList.vue'
import Hero from '@/components/Hero.vue';

export default {

  data(){
    return{
      places:[],
      inputValue:'',
      page: 1,
      limit: 8,
      totalPages: '',
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
      this.totalPages = response.length
    },
    searchPlace(value){
      this.inputValue = value
      this.value =''
    }
  },

  mounted(){
    this.fetchPlaces()
  },

  computed:{
    sortedAndSearch(){
      return this.places.filter(place=>place.name.toLowerCase().includes(this.inputValue.toLowerCase()))
    },
  },
}
</script>
<style scoped>

</style>
