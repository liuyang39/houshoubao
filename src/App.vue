<template>
  <div>
    <div class="m-type">
      <div class="type">
          <a  v-link="{name: 'phone'}" class="phone act" >手机</a>
          <a v-link="{name: 'plat'}" class="plat">平板</a>
      </div>
      <span class="box-search">
          <a href="#" class="t-search" @click='search()'></a>
      </span>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  data(){
    return{
       isTrue : true
    }
  }
}
</script>


<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>