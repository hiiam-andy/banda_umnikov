<template>
  <div class="card" >
    <img class="card_image" :src='place.photo' alt="img">
    <div class="card_content">
      <h1 class="card_header">{{ place.name }}</h1>
      <h3>{{ place.landmark }}</h3>
      <p> средний чек: {{ place.price }}</p>
      <button >подробнее</button>
    </div>
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
.card{
  border-radius: 15px;
  box-shadow: 0 0 24px rgba(49,49,49,.28);
  overflow: hidden;
  min-width:200px;
  max-width: 600px;
  max-height: 370px;
}
.card_image{
  width: 100%;
  height:50%;
}
.card_content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  height: 50%;
}
.card_header{
  font-size: 26px;
    line-height: 28px;
}
</style>