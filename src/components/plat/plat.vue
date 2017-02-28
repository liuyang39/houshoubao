<template>
	<div id="list-right">
		<div id="srcollR">
		   	<ul>
		   		<li v-for="item in items" class="item">{{item.phone}}</li>
		   	</ul>
	   </div>
	</div>
   

</template>


<script>
	export default{
		data(){
			return {
				items: [],
			}
		},
		methods(){
            
        },
        ready(){
        	this.$http.get('/src/json/phone.json').then(function(res) {
                console.log(res);


                this.items = res.body;
            })
        }
	}
</script>

<style type="text/css">
	#list-right{
		width: 0.80rem;
		position: absolute;
		top: 0.60rem;
		bottom: 0;
		overflow: hidden;
	}
	#list-right #srcollR{
		overflow: auto;
	}
	#list-right ul{
		width: 0.80rem;
	}
	#list-right li.item{
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
</style>