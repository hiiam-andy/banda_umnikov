<template>
  <hero @searchPlace="searchPlace"/>
  <place-list v-if="!isLoading" :places="sortedAndSearch" />
  <div v-else class="home_loading">
    <h2 >Поиск мест...</h2>
  </div>
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
      isLoading: false
    }
  },

  components: {
    Hero,
    PlaceList
  },

  methods:{
    async fetchPlaces(){
      this.isLoading = true
      const response = await Places.getAll();
      this.places = response;
      this.totalPages = response.length
      this.isLoading = false;
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
.home_loading{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto;
  
}
</style>
