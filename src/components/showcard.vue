<template>
  <div id="showcard" dir="rtl">
    <div class="col-lg-8 mx-auto p-3 py-md-5">
      <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
          <h1 class="fs-4">{{name}}</h1>
      </header>

      <div class="container mb-3">
        <div class="row">
          <div class="col-sm">
            <h4>للشراء تواصل على <span>0569162687</span>  </h4>
          </div>
          <div class="col-sm">
            <h4> او على الفيس بوك<span><a href="https://www.facebook.com/Steam-Hebron-556072474583316" class="link-primary">facebook</a></span> </h4>
          </div>
        </div>
      </div>

      <img :src="url" class="img-fluid" alt="...">

      <h2 class="mt-4">المزيد من المعلومات</h2>
      <p class="fs-5 col-md-8">{{textContent}}.</p>

      <div class="mb-5">
        <span  class="btn btn-primary btn-lg px-4">{{price}}شيكل</span>
      </div>

      <hr class="col-3 col-md-2 mb-5">

      <div class="row g-5">
        <div class="col-md-6">
          <h2>تواصل على</h2>
          <ul class="icon-list">
            <li><a  href="https://www.facebook.com/Steam-Hebron-556072474583316" >facebook</a></li>
            <li class="text-muted">0569162687</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import db from './firebaseinti'
export default{
  name:'showcard',
  data(){
    return{
      id:null,
      textContent:null,
      price:null,
      name:null,
      url:null
    }
  },beforeRouteEnter(to,from,next){
    db.collection('imgs').where('card_id', '==' ,to.params.card_id).get().
    then((querySnapshot)=>{
      querySnapshot.forEach(doc=>{
        next(vm =>{
          vm.name= doc.data().name;
          vm.id=doc.data().card_id;
          vm.price = doc.data().price;
          vm.textContent = doc.data().text_content;
          vm.url = doc.data().url;
        })
      })
    }).catch(e=>{
      alert(e)
    })
  }
}
</script>
<style>
.icon-list {
  padding-left: 0;
  list-style: none;
}
.icon-list li {
  display: flex;
  align-items: flex-start;
  margin-bottom: .25rem;
}
.icon-list li::before {
  display: block;
  flex-shrink: 0;
  width: 1.5em;
  height: 1.5em;
  margin-right: .5rem;
  content: "";
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23212529' viewBox='0 0 16 16'%3E%3Cpath d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'/%3E%3C/svg%3E") no-repeat center center / 100% auto;
}

</style>
