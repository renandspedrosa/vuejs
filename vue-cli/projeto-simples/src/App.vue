<template>
  <div id="app">
    {{titulo}}
    <button @click="titulo+='!'">alterar</button>
  </div>
</template>

<script>
export default {
    data:function(){
      return {
        titulo:'teste data usando vue JS'
      }
    }
}
</script>

<style>
#app{
  background-color: chocolate;
  color: #fff;
}
</style>