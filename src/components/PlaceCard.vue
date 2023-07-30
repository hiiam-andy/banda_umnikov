<template>
  <div class="card" @click="$router.push(`/${place.id}`)">
    <img 
      class="card_image" 
      :src='place.photo' 
      alt="img"  
      onerror="this.src='https://www.ferremas.com.py/gfx/fotosweb/wprod_0.jpg'" 
    >
    <div class="card_content">
      <h1 class="card_header">{{ place.name }}</h1>
      <p class="card_address">{{ place.address ? place.address : "Пока еще не знаем где"}}</p>
      <p class="card_price"><b>средний чек: </b> {{ place.price !== 0 ? place.price: "еще не посчитали"  }}</p>
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
  min-height: 300px;
  max-height: 310px;
  cursor: pointer;
  transition: box-shadow .2s;
}
.card:hover{
  box-shadow: 0 15px 48px rgba(49,49,49,.16);
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
  font-size: 100%;
}
.card_address{
  font-size: 12px;
}
.card_price{
  font-size: 12px;
}


@media(max-width: 442px){
  .card{
    display: flex;
    min-height: auto;
    max-height: 150px;
  }
  .card_image{
    max-width: 50%;
    height: 100%;
  }
  .card_content{
    padding: 2% 3%;
    height: 100%;
  }
}
</style>