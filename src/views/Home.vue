<template>
  <div id="home" class="container">
    <slider/>
    <card/>
    <tableitem/>
  </div>
</template>
<script>
import slider from '../components/slider'
import tableitem from '../components/tableitem'
import card from '../components/cards'
export default{
  name:'home',
  data(){
    return{

    }
  },
  components:{
    slider,
    tableitem,
    card
  }
}
</script>