<template>
	<div class="bookRead">
		<!-- 阅读显示内容 -->
		<div class="readContent">
			{{this.$route.params.data.chapter[index].content}}
		</div>
		<!-- 自定义控件 -->
		<div class="readControl" :style="{height:this.$store.state.screenHeight+'px'}">
			<!-- 退出阅读 -->
			<div class="outRead">
				<p>{{this.$route.params.data.name}}</p>
				<p><router-link :to="{name:'/',params:{}}">退出阅读</router-link></p>
			</div>
			<!-- 下一章 | 下一章 -->
			<div class="changeRead">
				<!-- 上一章 -->
				<p @click="prevBook">上一章</p>
				<!-- 下一章 -->
				<p @click="nextBook">下一章</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			index:0
		}
	},
	methods:{
		nextBook(){
			this.index = Math.min(++this.index,this.$route.params.data.chapter.length-1)
		},
		prevBook(){
			this.index = Math.max(--this.index,0)
		}
	},
	mounted(){
		
	}
}
</script>

<style scoped>
.bookRead{position: relative;}
/* 阅读 内容 */
.readContent{position:absolute}
/* 锐度 控件 */
.readControl{position: relative;width:100%;top:0;left: 0;}
/* 控件 瑞出阅读 */
.outRead{height: 2.5rem;width: 100%;background: rgba(0,0,0,.8);display: flex;justify-content: space-between;align-items: center;font-size: 0.875rem;}
.outRead>p:nth-of-type(1){color:#fff;margin-left: 0.625rem;}
.outRead>p:nth-of-type(2){margin-right: 1.25rem;border:1px solid #fff;}
.outRead>p:nth-of-type(2)>a{color:#fff;display: block;height: 100%;padding: 0.3125rem;}
/* 控件 上|下一章 */
.changeRead{position: absolute;bottom: 0;left: 0;height: 2.5rem;width:100%;background: rgba(0,0,0,.8);display: flex;justify-content: space-around;align-items: center;}
.changeRead>p{width: 44%;text-align: center;padding:0.625rem;font-size: 0.875rem;position: relative;color:#fff;}
.changeRead>p:nth-of-type(1)::after{content: '';display: block;height: 100%;position: absolute;top: 0;right: -0.75rem;width: 0.0625rem;background:#fff;}
</style>
