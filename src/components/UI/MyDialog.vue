<template  >
  <div 
    v-if="show"
    class="dialog" 
    @click.stop="hideDialog"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
  >
    <div @click.stop class="dialog_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-dialog',
    props: {
      show: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      hideDialog() {
        this.$emit('update:show', false)
      }
    }
  }
</script>

<style scoped>
.dialog {
  top:0;
  bottom:0;
  left:0;
  right:0;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
}
.dialog_content{
  padding: 20px;
margin: auto;
background: white;
border-radius: 12px;
min-height: 50px;
min-width: 300px;
}
@media(max-height:600px){
  .dialog_content{
    min-width: 530px;
    max-height: 320px;
  }
}
</style>