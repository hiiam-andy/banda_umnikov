<template>
  <div>
  Страница поста с id = {{ $route.params.id }}
  </div>
</template>

<script>
  export default {
    props: {
      place:{
        type: Object,
        required:true
      }
    },
    data(){
      return{
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>