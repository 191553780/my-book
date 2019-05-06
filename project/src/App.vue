<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
*{margin: 0;padding: 0;box-sizing: border-box;}
li{list-style: none;}
a{text-decoration: none;}
a:active{-webkit-top-highlight-color:rgba(0,0,0,0)}
#app{overflow: hidden;}
</style>
