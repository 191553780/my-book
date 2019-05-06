<template>
	<div class="bookCity">
		<main>
			<!-- 轮播图 -->
			<section class="carousel">
				<swiper :options="swiperOption" ref="mySwiper">
					<!-- slides -->
					<swiper-slide><img src="@/assets/images/swiper.jpg" alt=""></swiper-slide>
					<swiper-slide><img src="@/assets/images/swiper1.jpg" alt=""></swiper-slide>
					<swiper-slide><img src="@/assets/images/swiper2.jpg" alt=""></swiper-slide>
					<swiper-slide><img src="@/assets/images/swiper3.jpg" alt=""></swiper-slide>
					<!-- Optional controls -->
					<div class="swiper-pagination"  slot="pagination"></div>
				</swiper>
			</section>
			<!-- 分类 -->
			<section class="classify">
				<div class="rank">
					<p>
						<router-link to="/">
							<i></i>
							<span>排行榜</span>
						</router-link>
					</p>
				</div>
				<div class="freeBook">
					<p>
						<router-link to="/">
							<i></i>
							<span>免费</span>
						</router-link>
					</p>
				</div>
				<div class="endBook">
					<p>
						<router-link to="/">
							<i></i>
							<span>完本</span>
						</router-link>
					</p>
				</div>
			</section>
			<!-- 热门 -->
			<section class="hotBook">
				<div class="title">
					<h3>热门小说</h3>
					<span>一周热销小说</span>
					<p><router-link to="/">更多>></router-link></p>
				</div>
				<div class="bookContent">
					<ul>
						<li v-for="item in hotBook">
							<div class="bookItem">
								<router-link :to="{name:'bookDetail',params:{data:item}}">
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
				</div>
			</section>
			<!-- 新书 -->
			<section class="newBook">
				<div class="title">
					<h3>新书抢鲜</h3>
					<span>24小时热销新书</span>
					<p><router-link to="/">更多>></router-link></p>
				</div>
				<div class="bookContent">
					<ul>
						<li v-for="item in newBook">
							<div class="bookItem">
								<router-link :to="{name:'bookDetail',params:{data:item}}">
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
				</div>
			</section>
		</main>
	</div>
</template>

<script>
export default {
  name: 'bookCity',
  data () {
    return {
		hotBook:[],
		newBook:[],
		swiperOption: {//swiper3
			loop:true,
			autoplay:true,
			pagination:{
				el:'.swiper-pagination'
			}
		}
    }
  },
  methods:{
	// 请求数据，并赋值为全局变量
	getBook(url,callback){
		this.axios({
			url:url,
			method:'post',
			data:{}
		}).then(callback).catch((res) => {
			console.log(res)
		})
	}
  },
  mounted(){
	this.getBook('/api/getHot',res => this.hotBook = res.data)
	this.getBook('/api/getNew',res => this.newBook = res.data)
  }
}
</script>

<style scoped>
main{width: 100%;padding-top: 0.625rem;;}
/* 轮播图 */
.carousel{height: calc(.314 * (100vw - 1.5rem));padding: 0 0.625rem;}
.carousel>div{height: 100%;}
.carousel>.swiper-container{border-radius: 0.625rem;}
.carousel>.swiper-container>.swiper-wrapper>.swiper-slide>img{height: 100%;}
/* 分类 */
.classify{height: 4.5rem;margin:.375rem 0;padding: .75em .625rem;}
.classify>div{width: 33.33%;float: left;font-size: .75rem;display: flex;justify-content: center;}
.classify>div>p{width: 3.5rem;height: 100%;}
.classify>div>p>a{color:#000;height: 100%;display: block;text-align: center;}
.classify>div>p>a>i{display: block;width: 1.625rem;height: 1.625rem;margin: 0 auto;margin-bottom: 0.3125rem;background-image: url(../assets/images/sprite.png);background-repeat: no-repeat;background-size: 5.4375rem;;}
.classify>div.rank>p>a>i{background-position: 0 0;}
.classify>div.freeBook>p>a>i{background-position: 0 -30px;}
.classify>div.endBook>p>a>i{background-position: 0 -60px;}

/* 热门 | 新书 */
.hotBook,.newBook{height: 25.5rem;margin: .75rem 0;}
.title{height: 1.75rem;padding:0 1rem;}
.title>h3{display: inline-block;height: 100%;font-size: 100%;font-weight: 400;line-height: 1.75rem;}
.title>h3:before{display: inline-block;box-sizing: border-box;width: .625rem;height: 1em;content: '';vertical-align: -.22ex;color: transparent;border-left: 2px solid #ed424b;}
.title>span,.title>p{font-size: .8125rem;color: #969ba3;}
.title>span{margin-left: .5rem;}
.title>p{display: inline-block;float: right;line-height: 1.75rem;}
.title>p>a{color:#969ba3}
.bookContent{height: 22.75rem;}
.bookContent>ul>li{height: 7.5625rem;}
.bookContent>ul>li>.bookItem{width: 100%;height: 100%;padding: 1rem;}
.bookContent>ul>li>.bookItem>a{color:#000;display: flex;height: 100%;}
.bookContent>ul>li>.bookItem>a>div{float: left;}
/* 书籍图片 */
.bookImg{width: 4.125rem;height: 5.5rem;margin-right: 0.3125rem;}
.bookImg>img{height: 100%;}
/* 书籍信息 */
.bookDetail{width: 100%;overflow: hidden;}
.bookDetail>h3{font-size: 100%;}
.bookDetail>p{color:#969ba3;}
.bookDetail>p:nth-of-type(1){height: 2.25rem;overflow: hidden;font-size: .875rem;-webkit-box-orient: vertical;-webkit-line-clamp: 2;display: -webkit-box;margin: 0.375rem 0;line-height: 1.1875rem;}
.bookDetail>p:nth-of-type(2){font-size: .8125rem;display: flex;align-items: center;}
.bookDetail>p:nth-of-type(2)>i{display: inline-block;width: 0.75rem;height: 0.75rem;margin-right: 0.3125rem;background: url(../assets/images/author.png) no-repeat center center/100%;}
/* 热门 */
.hotBook{}
/* 新书 */
.newBook{}
</style>
