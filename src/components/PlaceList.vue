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
    <div class="places_random">можете попробовать
      <a class="places_random__link" @click="getRandomPlace">
      случайный ресторан
    </a> 
  </div>
  <div class="places_random"> или посмотреть
    <a class="places_random__link" @click="searchPlace">все предложения</a>
  </div>
</div>
</template>

<script>
import PlaceCard from './PlaceCard.vue';
import MyButton from './UI/MyButton.vue';

export default {

  components: { PlaceCard, MyButton,},

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

  emits:['getRandomPlace', 'searchPlace'] ,

  methods:{
    getRandomPlace(){
      this.$emit('getRandomPlace')
    },
    searchPlace(){
      this.$emit('searchPlace', '')
    }

}
}
</script>

<style scoped>
.section_places{
  padding: 0 2%;
  margin-bottom: 15px;
}
.places_header{
  align-self: center;
}
.places_wrapper{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
  gap:  15px;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  max-width: 1050px;
}
.places_notfound{
  margin: 5% 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.places_notfound__header{
  margin-bottom: 15px;
}
.places_random{
  font-size: 14px;
  margin-bottom: 10px;
}
.places_random__link{
  color: #BF92ED;
  cursor:pointer;
  border-bottom: 1px solid #BF92ED;
}
.places_show{
  color: #BF92ED;
  cursor:pointer;
}
@media(max-width: 480px){
  .places_notfound{
    flex-direction: column;
  }
}
</style>