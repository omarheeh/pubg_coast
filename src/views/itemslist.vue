<template>
  <div id="listItem" class="container">
    <tableitem/>
  </div>
</template>
<script>
import tableitem from '../components/tableitem'
export default{
  name:'listitem',
  data(){
    return{

    }
  },
  components:{
    tableitem,
  }
}
</script>