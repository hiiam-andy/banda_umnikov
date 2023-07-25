<template>
  <div class="section_places" v-if="this.places.length>0">
    <div class="places_wrapper">
      <place-card 
        v-for="place in places" 
        :key="place.id" 
        :place="place" 
        class="places"
      />
    </div>
  </div>
  <div v-else class="places_notfound">
    <h2 class="places_notfound__header">Не найдено</h2>
    <p class="places_random">можете попробовать
      <a class="places_random__link" @click="getRandomPlace">
      случайный ресторан
    </a>
    </p>
  </div>
</template>

<script>
import PlaceCard from './PlaceCard.vue';

export default {

  components: { PlaceCard,},

  props:{
    places:{
      type: Array,
      required: true
    },
    randomPlace:{
      type: Object,
      required:true
    } 
  },

  emits:['getRandomPlace'] ,

  methods:{
    getRandomPlace(){
        this.$emit('getRandomPlace')
      }
}
}
</script>

<style scoped>
.section_places{
  padding: 0 3%;
  margin-bottom: 15px;
}
.places_header{
  align-self: center;
}
.places_wrapper{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(207px, 1fr));
  gap:  15px;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  max-width: 1050px;
}
.places_notfound{
  margin: 5% 2%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.places_notfound__header{
  margin-right: 2%;
}
.places_random{
  font-size: 14px;
}
.places_random__link{
  color: #BF92ED;
  cursor:pointer;
  border-bottom: 1px solid #BF92ED;
}
@media(max-width: 480px){
  .places_notfound{
    flex-direction: column;
  }
}
</style>