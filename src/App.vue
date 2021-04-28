<template>
  <div id="app">
    <div id="nav">
      <navbar/>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import navbar from './components/navbar'
  export default{
    name:'app',
    data(){
      return{

      }
    },
    components:{
      navbar
    }
  }
</script>
<style>
body{
}
</style>
