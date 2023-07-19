<template>
  <div class="section_places">
    <h2 class="places_header">Рестораны близко</h2>
    <div class="places_wrapper">
      <place-card v-for="place in places" :key="place.id" :place="place" class="places"/>
    </div>
  </div>
</template>

<script>
import PlaceCard from './PlaceCard.vue';
  export default {
  components: { PlaceCard },
    props:{
      places:{
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
.section_places{
  display: flex;
  flex-direction: column;
  background-color: rgba(115, 191, 68, 0.15);
}
.places_header{
  align-self: center;
}
.places_wrapper{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(207px, 1fr));
  gap:  8px;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  max-width: 950px;
  
}
.places{
  max-width: 882px;
  padding: 0 15px;
}
</style>