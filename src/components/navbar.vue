<template>
  <div id="navbar">
    <nav dir="rtl" class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" :to="{name:'Home'}">الرئيسية</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link "  :to="{name:'Itemlist'}" href="#">شدات ببجي</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link "  :to="{name:'allcard'}" href="#">خدماتنا</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                للتواصل معي
              </a>
              <ul  class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="https://www.facebook.com/Steam-Hebron-556072474583316">facebook</a></li>
                <li><a class="dropdown-item" href="#">0569162687</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default{
  data(){
    return{

    }
  }
}
</script>
<style>
nav{
}
.navbar-brand{
  padding-left: 20px;
}

</style>