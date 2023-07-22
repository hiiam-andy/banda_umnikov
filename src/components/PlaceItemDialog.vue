<template>
  <div class="place_dialog">
    <h5>может быть сходить в </h5>
    <h1>{{ placeDialog.name }}</h1>
    <img class="dialog_image" :src='placeDialog.photo' alt="img" >
    <p>средний чек: {{ placeDialog.price }}</p>
    <my-button @click="$router.push(`/${placeDialog.id}`)">хочу сюда</my-button>
    <my-button @click="getRandomPlace()">Выбрать другой</my-button>
  </div>
</template>

<script>
import Places from '@/api/indexApi';
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
  width:300px;
  height: 300px;
}
.dialog_image{
  max-height: 50%;
}
</style>