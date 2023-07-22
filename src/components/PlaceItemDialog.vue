<template>
  <div class="place_dialog">
    <h5>может быть сходить в </h5>
    <h1>{{ placeDialog.name }}</h1>
    <img 
      class="dialog_image" 
      :src='placeDialog.photo' 
      alt="img"  
      onerror="this.src='https://static.tildacdn.com/tild3938-3564-4633-b562-633139376630/_.jpg'"
      >
    <p><b>средний чек: </b>{{ placeDialog.price? placeDialog.price : 'нет информации' }}</p>
    <p><b>до места: </b>{{ placeDialog.distance }}м. <b>или</b> {{ placeDialog.time }} мин.</p>
    <div class="buttons">
      <my-button class="btn" @click="$router.push(`/${placeDialog.id}`)">хочу сюда</my-button>
      <my-button class="btn" @click="getRandomPlace()">Выбрать другой</my-button>
    </div>
  </div>
</template>

<script>
import Places from '@/utils/indexApi';
import MyButton from './UI/MyButton.vue';

export default {
  components: { MyButton },
  data(){
    return{
      placeDialog:{},
    }
  },
  props: {
    randomPlace:{
        type: Object,
        required:true
      },
    },
methods:{
  async fetchPlace(){
    const placeID = this.randomPlace.id
    const response = await Places.getOne(placeID);
    this.placeDialog = response
  },
  async getRandomPlace(){
  const res = await Places.getRandom()
  this.placeDialog = res;
  }
},
mounted(){
  this.fetchPlace()
}
}
</script>

<style scoped>
.place_dialog{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:300px;
  min-height: 300px;
}
.dialog_image{
  max-height: 300px;
  margin-bottom: 10px;
}
.buttons{
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}
.btn{
  margin: 0;
}
</style>