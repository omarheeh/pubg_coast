<template>
  <div id="card" class="mt-4">


    <div class="container ">
      <div class="row" >

        <div dir="rtl" class="col-sm p-0" v-for="(card , index) in cards" :key="index">
          <div class="card" style="width: 18rem;">
            <img :src="card.url" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{card.name}}</h5>
              <p class="card-text">{{card.content}}</p>
              <router-link href="#" class="btn btn-primary" :to="{name:'showcard',params:{card_id:card.card_id}}">عرض المزيد</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import db from "./firebaseinti";
export default {
  name:'allcard',
  data(){
    return {
      cards:[],
      imgs:{
        netflex:'https://firebasestorage.googleapis.com/v0/b/pubg-coast.appspot.com/o/img%2Fnetflix-logo.png?alt=media&token=eec0552d-e59f-479c-ac0e-b315df2d50a8',
        steam:'https://firebasestorage.googleapis.com/v0/b/pubg-coast.appspot.com/o/img%2Fsteam.jpeg?alt=media&token=c835d441-9cc9-4d77-9a90-b85fe529867c',
        itunes:'https://firebasestorage.googleapis.com/v0/b/pubg-coast.appspot.com/o/img%2Fr8sqT31505.png?alt=media&token=378975d7-5d58-4e9e-b952-d9cc4c3aee72'
      }
    }
  },
  created() {
    db.collection('imgs').get().then((queryS)=>{
      queryS.forEach(doc =>{
        const item = {
          name:doc.data().name,
          content:doc.data().content,
          url:doc.data().url,
          card_id:doc.data().card_id
        }
        this.cards.push(item)
      })
    })
    console.log(this.card)
  }

}
</script>
<style>
.card{
  margin:auto !important;
}

@media (max-width: 576px) {
  .card{
    margin-top:20px !important;
  }

}

</style>