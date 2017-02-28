<template>
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
		   		<li v-for="phonetype in itemsR.phonetype " class="item">{{phonetype}}</li>
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
            	this.$http.get('/src/json/phone.json').then(function(res) {
	                this.itemsR = res.body[index];
	            })
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

	#list-left{
		width: 0.80rem;
		position: absolute;
		top: 0.60rem;
		bottom: 0;
		overflow: auto;
		height: 100%;
	}
	 ::-webkit-scrollbar{
	 	width:0px
	 }
	#list-left #srcollL{
		   
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
		text-align: center;
		color: #333;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		background: #fff;
		width: 2.40rem;
	}
</style>