<template>
<place-list :places="places"/>
</template>

<script>
import PlaceList from '@/components/PlaceList.vue'

export default {
  data(){
    return{
      places:[
      {
            "id": 1,
            "name": "Барвинок",
            "address": "ул. Мира, 7 (этаж цокольный)",
            "landmark": "Во дворах за Австрийской площадью",
            "cuisine": "Украинская",
            "distance": 900,
            "time": 10,
            "photo": "https://i0.photo.2gis.com/images/branch/0/30258560088758746_615f.jpg",
            "business_lunch": true,
            "price": 420
        },
        {
            "id": 2,
            "name": "Дед Хо",
            "address": "ул. Мира, 7 (этаж цокольный)",
            "landmark": "По дороге к Австрийской площади",
            "cuisine": "Вьетнамская ",
            "distance": 600,
            "time": 7,
            "photo": "https://i4.photo.2gis.com/images/branch/38/5348024602951070_5007.jpg",
            "business_lunch": true,
            "price": 500
        },
        {
            "id": 3,
            "name": "Синичка",
            "address": "Каменноостровский проспект, 14 цокольный этаж",
            "landmark": "По дороге к Австрийской площади",
            "cuisine": "СССР ",
            "distance": 800,
            "time": 10,
            "photo": "https://i3.photo.2gis.com/images/branch/0/30258560063238684_ab2c.jpg",
            "business_lunch": true,
            "price": 350
        },
        {
            "id": 4,
            "name": "Хачапури и вино",
            "address": "Большой проспект П.С., 74, 1 этаж",
            "landmark": "недалеко от м. Петроградская",
            "cuisine": "Грузинская ",
            "distance": 1500,
            "time": 15,
            "photo": "https://i8.photo.2gis.com/images/branch/0/30258560071696228_bd35.jpg",
            "business_lunch": true,
            "price": 420
        },
        {
            "id": 5,
            "name": "Паруса на крыше",
            "address": "ул. Льва Толстого, 9",
            "landmark": "К метро и на право",
            "cuisine": "Смешанная",
            "distance": 900,
            "time": 10,
            "photo": "https://avatars.mds.yandex.net/get-altay/9663145/2a0000018906aad394254c983ccde410d505/XXXL",
            "business_lunch": true,
            "price": 420
        },
        {
            "id": 6,
            "name": "Ramen Slurp Bar",
            "address": "Большой проспект П.С., 65, 1 этаж",
            "landmark": "недалеко от м. Петроградская",
            "cuisine": "Раменная",
            "distance": 1000,
            "time": 10,
            "photo": "https://i1.photo.2gis.com/images/branch/0/30258560096364628_e9c7.jpg",
            "business_lunch": false,
            "price": 0
        },
      ]
    }
  },
  components: {
    PlaceList
}
}
</script>
<style scoped>

</style>
