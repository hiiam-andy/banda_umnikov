<template>
  <div class="section_places">
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
</style>