<template>
	<div id='plat-left'>
		<ul>
			<li>全部平板</li>
		</ul>
	</div>
    <div id="plat-right">
    	<ul>
    	<li  v-for="item in items" class="item">{{$index+1}}&nbsp;&nbsp;{{item}}</li>
    	</ul>
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
        	this.$http.get('/src/json/plat.json').then(function(res) {
                this.items = res.body.plat;

            })
        }
	}
</script>

<style type="text/css">
     body{
     	 overflow: hidden;
     }
	#plat-left{
		width: 0.80rem;
		position: absolute;
		top: 0.60rem;
		overflow: hidden;
		background-color: #f5f5f5;
		height: 100%;
		border-top: 1px solid #e1e1e1;

	}
	#plat-left ul{
        height: 0.44rem;
		line-height: 0.44rem;
		background-color: #fff;
	    color: #f9be00;
	    border-right-color: #fff;
	    text-align: center;
	}
	#plat-right {
		width:2.4rem;
		position: absolute;
		left: 0.8rem;
		top: 0.60rem;
		background: none;
		height: 100%;
		overflow: auto;
	}
	#plat-right ul{
		overflow: auto;
	}
	#plat-right li.item{
		font-size: 0.14rem;
		height: 0.44rem;
		line-height: 0.44rem;
		border-top: 1px solid #e1e1e1;
		color: #333;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: left;
		text-indent: .2rem;
	}
	#plat-right li.item:gt(3){

	}
</style>