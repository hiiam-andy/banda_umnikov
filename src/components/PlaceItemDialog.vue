<template>
  <div class="place_dialog">
  <div class="place_dialog_image">
    <p>Может быть сходить в</p>
    <h2>{{ placeDialog.name }}</h2>
    <img v-if="!isLoading"
      class="dialog_image" 
      :src='placeDialog.photo' 
      alt="img"  
      onerror="this.src='https://static.tildacdn.com/tild3938-3564-4633-b562-633139376630/_.jpg'"
      >
    <h3 v-else class="dialog_image">
      Загрузка...
    </h3> 
    <h5 class="dialog_unknown">
      {{ !placeDialog.time && !placeDialog.distance ? "МОЖЕТ БЫТЬ ИНТЕРЕСНО!" : '' }}
    </h5>
  </div>

  <div class="dialog_info">
    <p class="dialog_description">{{ placeDialog.cuisine ? placeDialog.cuisine : 'Неисследованная' }} кухня</p>
    <p class="dialog_description">
      <b>средний чек: </b>
      {{ placeDialog.price? placeDialog.price : 'нет информации' }}
    </p>
    <p class="dialog_description">
      <b>до места: </b>
      {{ placeDialog.distance ? placeDialog.distance + " м." : 'так далеко не ходили' }} 
      </p>
      <p class="dialog_description">
        <b>пешком: </b>{{ placeDialog.time ? placeDialog.time : 'еще не засекали' }} мин.
      </p>
    
    <div class="dialog_buttons">
      <my-button 
        class="btn"
        @click="$router.push(`/${placeDialog.id}`)">
        хочу сюда
      </my-button>
      <my-button 
        class="btn" 
        @click="getRandomPlace()">
        Выбрать другой
      </my-button>
    </div>
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
      isLoading:false,
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
    this.isLoading=true
    const placeID = this.randomPlace.id
    const response = await Places.getOne(placeID);
    this.placeDialog = response
    this.isLoading=false
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
}
.place_dialog_image{
  display: flex;
  flex-direction: column;
  width:100%;
}
.dialog_info{
  width: 100%;
}
.dialog_image{
  height: 250px;
  margin-bottom: 10px;
}
.dialog_description{
  margin-bottom: 10px;
}
.dialog_buttons{
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}
.btn{
  margin: 0;
  padding: 3%;
}
.dialog_unknown{
  color:crimson;
  background-color: #fff;
  position: relative;
  top: -35px;
  align-self: flex-end;
}
@media(max-height:600px){
  .place_dialog{
    flex-direction: row;
    width: 525px;
    font-size:small;
  }
  .place_dialog_image{
    width: 50%;
  }
  .dialog_image{
    height: 205px;
    margin: 0;
  }
  .dialog_info{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 46%;
  }
  .dialog_buttons{
    margin-top: 27%;
  }
}
</style>