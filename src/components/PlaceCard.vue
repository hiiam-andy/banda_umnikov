<template>
  <div class="card" @click="$router.push(`/${place.id}`)">
    <img class="card_image" :src='place.photo' alt="img" @error="src='altimg'" >
    <div class="card_content">
      <h1 class="card_header">{{ place.name }}</h1>
      <p> средний чек: {{ place.price !== 0 ? place.price: "еще не посчитали"  }}</p>
    </div>
  </div>
</template>

<script>


  export default {
    data(){
      return{
        altimg: '@/store/undefinedImage.jpg'
      }
    },
    props: {
      place:{
        type: Object,
        required:true
      },
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
  min-height: 316px;
  max-height: 380px;
  cursor: pointer;
}
.card_image{
  width: 100%;
  height:50%;
  min-height: 50%;
}
.card_content{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1% 6% 8%;
  height: 50%;
  min-height: 50%;
}
.card_header{
  font-size: 26px;
    line-height: 28px;
}
</style>