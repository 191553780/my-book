<template>
	<div class="hank">
		<header>
			<div class="goBack"><router-link :to="{name:'/',params:{}}"><i></i></router-link></div>
			<p>{{this.$route.params.title}}</p>
		</header>
		<main>
			<ul>
				<li v-for="(item,key) in bookData">
					<div class="bookItem">
						<router-link :to="{name:'bookDetail',params:{data:item}}">
							<p>{{key+1}}</p>
							<div class="bookImg">
								<img :src="require('@/assets/images/'+item.src)" alt="">
							</div>
							<div class="bookDetail">
								<h3>{{item.name}}</h3>
								<p>{{item.describe}}</p>
								<p><i></i>作者: <span>{{item.author}}</span></p>
							</div>
						</router-link>
					</div>
				</li>
			</ul>
		</main>
	</div>
</template>

<script>
export default {
	data(){
		return{
			bookData:this.$route.params.data
		}
	}
}
</script>

<style scoped>
/* 头部 */
header{height: 2.75rem;width: 100%;background: #cee;position: relative;display: flex;justify-content: center;align-items: center;}
header>.goBack{position: absolute;left: 0;top: 0;height: 100%;width: 2.5rem;padding: 0.625rem;}
header>.goBack>a>i{display: block;widows: 100%;height: 100%;background: url(../assets/images/return.png) no-repeat center center/100%;}

/* 排行列表 */
main>ul>li{height: 7.5625rem;border-bottom: 1px solid #eee;}
main>ul>li>.bookItem{width: 100%;height: 100%;padding: 1rem;}
main>ul>li>.bookItem>a{color:#000;display: flex;height: 100%;position:relative;}
main>ul>li>.bookItem>a>div{float: left;}
main>ul>li>.bookItem>a>p{position: absolute;top: 0.1875rem;left: 0.1875rem;width: 0.9375rem;height: 1.25rem;background: rgba(204,238,238,.5);text-align: center;}
main>ul>li>.bookItem>a>p::after{content: '';display: block;position: absolute;right: -0.3125rem;top: 50%;margin-top: -0.25rem;border-left: 0.3125rem solid rgba(204,238,238,.5);border-bottom: 0.3125rem solid transparent;border-top: 0.3125rem solid transparent;}	
.bookImg{width: 4.125rem;height: 5.5rem;margin-right: 0.3125rem;}
.bookImg>img{height: 100%;}
/* 书籍信息 */
.bookDetail{width: 100%;overflow: hidden;}
.bookDetail>h3{font-size: 100%;}
.bookDetail>p{color:#969ba3;}
.bookDetail>p:nth-of-type(1){height: 2.25rem;overflow: hidden;font-size: .875rem;-webkit-box-orient: vertical;-webkit-line-clamp: 2;display: -webkit-box;margin: 0.375rem 0;line-height: 1.1875rem;}
.bookDetail>p:nth-of-type(2){font-size: .8125rem;display: flex;align-items: center;}
.bookDetail>p:nth-of-type(2)>i{display: inline-block;width: 0.75rem;height: 0.75rem;margin-right: 0.3125rem;background: url(../assets/images/author.png) no-repeat center center/100%;}
</style>
