<template>
  <div id="app">

    <div class="m-type-switch">
      <div class="type">
        <a v-for="o in selectArr" v-link="{path: o.url}"  :class="{'active':urlAct==o.url}" >{{o.name}}</a>
       
      </div>  
      <span id="search-label" class="box-to-search">
        <a href="javascript:;" class="u-to-search" @click="searchGo()"></a>
      </span>
    </div>

    <router-view></router-view>


    <!-- //搜索框 -->
    <div id="bbbb" style="display: none;" class="searchBox">

      <div class="m-search f-cb">
        <div class="search">
          <input type="search" id="text-search" class="text-search js-text-search" placeholder="搜索您要卖的机型">
        </div>
        <div id="search-cancel" class="search-btn" @click="searchGo1()">取消</div>
      </div>

      <div class="m-search-history">
        <div class="b-tit">
          <div class="tit">我搜索过的</div>
          <a href="javascript:;" class="clear js-history-clear">清除</a>
        </div>
        <ul class="list js-history-list">          
        </ul>
      </div>

     


      <div class="m-search-hot">
        <div class="b-tit">
          <div class="tit">热门搜索</div>
        </div>
        <ul class="list">
                      <li class="hot-list-item"> <span class="hot-list-index">1</span> iPhone 6</li>
                      <li class="hot-list-item"> <span class="hot-list-index">2</span> iPhone 5s</li>
                      <li class="hot-list-item"> <span class="hot-list-index">3</span> 华为 Mate 8</li>
                      <li class="hot-list-item"> <span class="hot-list-index">4</span> iPhone 6s Plus</li>
                     
        </ul>
      </div>



    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      id:0,
      urlAct:'/phone/phonelist/0',
      searchOK:false,
      state: null,
      selectArr:[
                  { name:"手机",url:'/phone/phonelist/0'},
                  { name:"平板",url:'/pb'}
                ]
     


      // msg: 'Hello Vue!'
    }
  },
  methods:{
    
    searchGo(){

      history.pushState(true, null, null);

      document.getElementById('bbbb').style.display = 'block';
    },
    searchGo1(){
      document.getElementById('bbbb').style.display = 'none';
    },
  },
  replace: false,

  watch:{
      $route:function(val){
        // console.log(val);
        this.urlAct = val.path;
        // console.log(this.urlAct);
      }
  }
}

window.onpopstate = function() {

  if (!history.state) {
    // 要显示主页
    document.getElementById('bbbb').style.display = 'none';
  } else {
    // 要显示搜索页
    document.getElementById('bbbb').style.display = 'block';
  }
}


console.log(window.location);


</script>


<style>
  #app{
    min-width: 320px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

  }
  .searchBox{

    width: 100%;
    height: 100%;
    background: white;
    position: absolute;



  }
  .m-search{
    padding: 0.12rem 0;
    background-color: #fff;
    position: relative;
    display: flex;

  }
  .m-search .search{
    
    width: 2.58rem;
    height: 0.29rem;
    border: 1px solid #f9be00;
    border-radius: 30px;
    margin-left: 0.09rem;
    box-sizing: border-box;
    display: flex;

  }

  .m-search .search::before {
    content: '';
    display: block;
    width: 0.16rem;
    height: 0.16rem;
    margin: 0.065rem 0.05rem 0.065rem 0.1rem;
    background: url(img/sprite_1.png) no-repeat;
    background-size: 1.5rem 3.84rem;
    background-position: 0 -0.22rem;
  }

  .m-search .search .text-search {
      
      width: 2.18rem;
      height: 100%;
      border: 0;
      background: none;
      font-size: 0.12rem;
      color: #f9be00;
  }

  .m-search .search-btn {
      
      width: 0.50rem;
      height: 0.30rem;
      line-height: 0.30rem;
      font-size: 0.12rem;
      color: #666;
      text-align: center;
  }

  .m-search-history {
      z-index: 6;
  }


  .b-tit {
      padding: 0 0.09rem;
      height: 0.29rem;
      line-height: 0.29rem;
      background-color: #f5f5f5;
      border-top: 1px solid #e1e1e1;
      border-bottom: 1px solid #e1e1e1;
  }

  .b-tit .tit {
      float: left;
      font-size: 0.12rem;
      color: #999;
  }

  .b-tit .clear {
    float: right;
    font-size: 0.10rem;
    color: #f9be00;
  }

  .list {
    padding: 0.1rem 0.09rem;
    overflow: hidden;
  }

  .m-search-hot .list li {
    float: left;
    height: 0.22rem;
    line-height: 0.22rem;
    width: 50%;
    font-size: 0.11rem;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .hot-list-item {
    margin-bottom: .13rem;
  }

  .hot-list-index {
    display: inline-block;
    text-align: center;
    width: .15rem;
    color: #fff;
    line-height: 1.5;
    border-radius: 4px;
    background-color: #d8dddf;
  }
  .m-search-hot .list li:nth-child(1) span{
    background-color: #ff9200;
  }
   .m-search-hot .list li:nth-child(2) span{
    background-color: #ffd300;
  }
   .m-search-hot .list li:nth-child(3) span{
    background-color: #58b7e3;
  }




  .m-type-switch{
    height: 0.60rem;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid #e1e1e1;
  }
  .type{
    width: 1.3rem;
    height: 0.30rem;
    line-height: 0.30rem;
    border: 1px solid #f9be00;
    margin: 0.15rem auto;
    border-radius: 8px;
    display: flex;
  }
  .type>a{
    flex: 1;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    font-size: 0.12rem;
    color: #333;
  }
  a.active{
    background-color: #f9be00;
    color: #fff;
  }
  .type>a:nth-child(1){
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .type>a:nth-child(2){
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .box-to-search{
    width: 0.36rem;
    height: 0.36rem;
    display: block;
    position: absolute;
    right: 0.26rem;
    top: 22%;
    /*background: red;*/
  }
  .u-to-search{
    width: 0.16rem;
    height: 0.16rem;
    background: url(img/sprite_1.png) no-repeat;
    background-size: 1.5rem 3.84rem;
    background-position: 0 -0.22rem;
    position: absolute;
    right: 0.1rem;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
