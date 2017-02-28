<template>
  <div>
    <!-- <header class="m-topbar">
        <a href="#" class="logo"></a>
        <a href="#" class="list">
            <img src="images/one.png" class="line top">
            <img src="images/one.png" class="line mid">
            <img src="images/one.png" class="line btm">
        </a>
    </header>
    <section class="m-banner">
        <div>
            <a href="#">
                <img src="images/banner.png">
            </a>
        </div>
        <a href="#" class="search">
            脣脩脣梅脛茫脪陋脗么碌脛禄煤脨脥
        </a>
    </section> -->
    <div class="m-type">
      <div class="type">
          <a href="#" class="phone act" >{{phone}}</a>
          <a href="#" class="plat" @click="click()">{{plat}}</a>
      </div>
      <span class="box-search">
          <a href="#" class="t-search"></a>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      phone: '手机' ,
      plat: '平板'
    }
  }
  
}
</script>


<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>