<template>
    <div id='hide'>
    	<span class="loading"></span>
    </div>
	<div id="list-left">
		<div id="srcollL">
		   	<ul>
		   		<li v-for="phone in itemsL" :class="{'item':true, 'act':id==$index}" @click="click($index)">{{phone.phone}}</li>
		   	</ul>
	   </div>
	</div>
    <div id="list-right">
		<div id="srcollR">
		   	<ul>
		   		<li v-for="phonetype in itemsR.phonetype " class="item"><span>{{$index+1}}</span>{{phonetype}}</li>
		   	</ul>
	   </div>
	</div>
</template>


<script>
	export default{
		data(){
			return {
				itemsL: [],
				itemsR: [],
				id: 0
			}
		},
		methods:{
            click(index){
            	this.id = index;
            	var self = this;
            	document.getElementById('hide').style.display ='block';
            	document.getElementById('list-right').style.display='none';
            	setTimeout(function(){
            		document.getElementById('hide').style.display ='none';
            		document.getElementById('list-right').style.display='block';
            		self.$http.get('/src/json/phone.json').then(function(res) {
	                self.itemsR = res.body[index];
	            })
            	},500)
            	
            }
        },
        ready(){

        	this.$http.get('/src/json/phone.json').then(function(res) {
                console.log(res);
                this.itemsL = res.body;
                console.log(res.body)
                 this.itemsR = res.body[0];
            })

            
        }
	}
</script>

<style type="text/css">
body,html{
	height: 100%;
	width: 100%;
	position: relative;
}
#hide{
	position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 9999;
    display: none;
}
#hide .loading{
		display: block;
		position: absolute;
		margin: auto;
		width: 50px;
		height: 50px;
		background: red;
		top: 53%;
		left: 0;
		right: 0;
		background: url(../../images/load.gif);
		background-size: cover;
	}
	#list-left{
		width: 0.80rem;
		position: absolute;
		top: 0.60rem;
		bottom: 0;
		overflow: auto;
		height: 100%;
		border-top: 1px solid #e1e1e1;
	}
	 ::-webkit-scrollbar{
	 	width:0px
	 }
	#list-left ul{
		width: 0.80rem;

	}
	
	#list-left li.item{
		font-size: 0.14rem;
		height: 0.44rem;
		line-height: 0.44rem;
		border-top: 1px solid #e1e1e1;
		border-right: 1px solid #e1e1e1;
		text-align: center;
		background-color: #f5f5f5;
		color: #333;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	#list-left li.item:nth-child(1){
		border-top: none;
	}
	#list-left li.act{
		background-color: #fff;
	    color: #f9be00;
	    border-right-color: #fff;
	}
	#list-right{
		width: 2.40rem;
		position: absolute;
		top: 0.60rem;
		bottom: 0;
		left: 0.80rem;
		right: 0;
		overflow: auto;
		height: 100%;
		border-top: 1px solid #e1e1e1;
	}
	#list-right #srcollR{
		overflow: auto;
	}
	#list-right ul{
		width: 2.40rem;
		background: #fff;

	}
	#list-right li.item{
		font-size: 0.14rem;
		height: 0.44rem;
		line-height: 0.44rem;
		border-top: 1px solid #e1e1e1;
		color: #333;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		background: #fff;
		width: 2.40rem;
	}
	#list-right li.item span{
		display: block;
	 float: left;
    min-width: 0.15rem;
    height: 0.15rem;
    line-height: 0.15rem;
    background-color: #f5f5f5;
    border-radius: 3px;
    text-align: center;
    margin: 0.14rem 0.08rem 0.14rem 0.17rem;
	}
	#list-right li.item:nth-child(1) span{
		background-color: #f9be00;
        color: #fff;
	}
	#list-right li.item:nth-child(2) span{
		background-color: #f9be00;
        color: #fff;
	}
	#list-right li.item:nth-child(3) span{
		background-color: #f9be00;
        color: #fff;
	}
	#list-right li.item:nth-child(1){
		border-top: none;
	}
</style>