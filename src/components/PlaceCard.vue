<template>
  <div class="place" >
    <h1>{{ place.name }}</h1>
    <h3>{{ place.landmark }}</h3>
    <p> средний чек: {{ place.price }}</p>
    <p>{{ place.cuisine }}</p>
    <img :src='place.photo' alt="img">
  </div>
</template>

<script>
  export default {
    props: {
      place:{
        type: Object,
        required:true
      }
    }
  }
</script>

<style scoped>
.place{
  padding: 15px;
  border: 1px solid grey;
  margin-bottom: 5px;
}
</style>