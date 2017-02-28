<template>
  <div>
  <div id='meun' v-if='!isTrue'>
     <div class="m-type">
      <div class="type">
          <a  v-link="{name: 'phone'}" :class="{'act':isA,'phone':'true'}" @click='clickA()'>手机</a>
          <a  v-link="{name: 'plat'}" :class="{'act':isB,'plat':'true'}" @click='clickB()' >平板</a>
      </div>
      <span class="box-search">
          <a  href="javascript:;" class="t-search" @click='searchGo()'></a>
      </span>
    </div>
     <router-view></router-view>
  </div>
   
   

   <!-- 搜索页面 -->
   <div v-if='isTrue' id='search'>
   <!-- 搜索框 -->
       <div class="nav">
          <div class="searchinput">
            <input type="" name="" placeholder="搜索你要卖的机型">
          </div>        
        <div class="close" @click='close()'>取消</div>
       </div>
  

   <!-- 我搜索过的 -->
     <div class="m-search-history">
        <div class="b-tit">
          <div class="tit">我搜索过的</div>
          <a href="javascript:;" class="clear js-history-clear" @click='clear()'>清除</a>
        </div>
        <ul class="search-list" id='searlist'>
           <li> ipone</li>
        </ul>
      </div>

    <!-- 热门搜索 -->
    <div class="m-search-hot">
        <div class="b-tit">
          <div class="tit">热门搜索</div>
        </div>
        <ul class="listd">
                      <li class="hot-list-item"> <span class="hot-list-index">1</span> iPhone 6</li>
                      <li class="hot-list-item"> <span class="hot-list-index">2</span> iPhone 5s</li>
                      <li class="hot-list-item"> <span class="hot-list-index">3</span> 华为 Mate 8</li>
                      <li class="hot-list-item"> <span class="hot-list-index">4</span> iPhone 6s Plus</li>
                      <li class="hot-list-item"> <span class="hot-list-index">5</span> 红米Note 2</li>
                      <li class="hot-list-item"> <span class="hot-list-index">6</span> OPPO R9</li>
                      <li class="hot-list-item"> <span class="hot-list-index">7</span> 华为 Mate 7</li>
                      <li class="hot-list-item"> <span class="hot-list-index">8</span> 三星 Galaxy S3</li>
                      <li class="hot-list-item"> <span class="hot-list-index">9</span> 魅蓝 Note2</li>
                      <li class="hot-list-item"> <span class="hot-list-index">10</span> 荣耀 6 Plus</li>
                  </ul>
     </div>

   </div>

  </div>

</template>

<script>
export default {
  data(){
    return{
       isTrue : false,
       isA:true,
       isB:false
    }
  },
  methods:{
    close(){
      this.isTrue = false;
    },
    clickA(){
      this.isB= false;
      this.isA = true;
    
    },
    clickB(){
      this.isA= false;
      this.isB = true;      
    },
    clear(){
     document.getElementById('searlist').innerHTML='';
    },
    searchGo(){
       history.pushState(true, null, null);
       this.isTrue = !this.isTrue;
    },
    close(){
       this.isTrue = !this.isTrue;
    }
  },
  ready(){
     var hrefString = window.location.href.split('#!/')[1];
     if(hrefString == 'phone'){
       this.isB= false;
       this.isA = true;
     }
     else if(hrefString =='plat'){
       this.isA= false;
       this.isB = true;  
     }
  }
}

window.onpopstate =function(){
  if (!history.state) {
    // 要显示主页
    this.isTrue =false;
  } else {
    // 要显示搜索页
   this.isTrue =true;
  }
}
</script>


<style>
body {
  font-family: Helvetica, sans-serif;
}
#search .nav{
    padding: 0.12rem 0;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}
#search .nav .searchinput{
  float: left;
    width: 2.58rem;
    height: 0.29rem;
    border: 1px solid #f9be00;
    border-radius: 30px;
    margin-left: 0.09rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
#search .nav .searchinput:before{
      content: '';
    float: left;
    width: 0.16rem;
    height: 0.16rem;
    margin: 0.065rem 0.05rem 0.065rem 0.1rem;
    background: url(images/sprite_1.png) no-repeat;
    background-size: 1.5rem 3.84rem;
    background-position: 0 -0.22rem;
}
#search .nav .searchinput input{
      float: left;
    width: 2.18rem;
    height: 100%;
    border: 0;
    background: none;
    font-size: 0.12rem;
    color: #f9be00;
}
#search .close{
      float: right;
    width: 0.50rem;
    height: 0.30rem;
    line-height: 0.30rem;
    font-size: 0.12rem;
    color: #666;
    text-align: center;
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
#search .search-list {
   width: 100%;
    padding: 0.1rem 0.09rem;
    overflow: hidden;
    font-size: 0.11rem;
}
#search .search-list li{
    width: auto;
    border-radius: .05rem;
    background-color: #f5f7fa;
    padding: .05rem .1rem;
    margin-right: .12rem;
    margin-bottom: .1rem;
    float: left;
    height: 0.22rem;
    line-height: 0.22rem;
    font-size: 0.11rem;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.listd{
    padding: 0.1rem 0.09rem;
    overflow: hidden;
}
#search .listd li{
   float: left;
    height: 0.22rem;
    line-height: 0.22rem;
    width: 50%;
    font-size: 0.11rem;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
.hot-list-item:first-child .hot-list-index {
    background-color: #ff9200;
}
.hot-list-item:nth-child(2) .hot-list-index {
    background-color: #ffd300;
}
.hot-list-item:nth-child(3) .hot-list-index {
    background-color: #58b7e3;
}
</style>