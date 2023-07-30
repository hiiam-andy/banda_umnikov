<template>
  <hero 
    @searchPlace="searchPlace"
    @getRandomPlace="getRandomPlace" 
    :randomPlace="randomPlace" 
  />
  <place-list 
    v-if="!isLoading" 
    :places="searchedPlaces"  
    @getRandomPlace="getRandomPlace" 
    :randomPlace="randomPlace" 
    @searchPlace="searchPlace"
  />
  <div v-else class="home_loading">
    <h2 >Поиск мест...</h2>
  </div>

  <my-dialog v-model:show="dialogVisible">
    <place-item-dialog :randomPlace="randomPlace"/>
  </my-dialog>

</template>

<script>
import Places from '@/utils/indexApi';
import PlaceList from '@/components/PlaceList.vue'
import Hero from '@/components/Hero.vue';
import PlaceItemDialog from '@/components/PlaceItemDialog.vue';

export default {

  data(){
    return{
      places:[],
      inputValue:'',
      isLoading: false,
      randomPlace:{},
      dialogVisible:false,
    }
  },

  components: {
    Hero,
    PlaceList,
    PlaceItemDialog,
  },

  methods:{
    async fetchPlaces(){
      this.isLoading = true
      const response = await Places.getAll();
      this.places = response;
      this.isLoading = false;
    },

    async getRandomPlace(){
      const res = await Places.getRandom()
      this.randomPlace = res;
      this.dialogVisible = true
    },
    
    searchPlace(value=''){
      this.inputValue = value
      value =''
    }
  },

  mounted(){
    this.fetchPlaces()
  },

  computed:{
    searchedPlaces(){
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
  margin: 5% 2%;
}
</style>
