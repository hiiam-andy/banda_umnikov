<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>

<style scoped>
.btn{
  padding: 1% 2%;
  margin-left: 2%;
  color:#fff;
  border: none;
  border-radius: 4px;
  background-color: #73b300;
  text-decoration: none;
  cursor: pointer;
  transition: background-color .2s;
}
.btn:hover{
  background-color: #74b300e1;
}
</style>