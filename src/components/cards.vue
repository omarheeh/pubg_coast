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
    <button type="button" class="btn btn-primary mt-4 btn-showall"><router-link class="btnall" :to="{name:'allcard'}">عرض الكل</router-link></button>

  </div>
</template>
<script>
import db from "./firebaseinti";
export default {
  name:'card',
  data(){
    return {
      cards:[],
    }
  },
  created() {
    let x =0;
    db.collection('imgs').get().then((queryS)=>{
      queryS.forEach(doc =>{
        x++;
        if(x>3){
          return ;
        }
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

.btn-showall a{
  color:#fff !important;
  text-decoration: none;
}
</style>
