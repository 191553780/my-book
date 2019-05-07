<template>
	<div class="bookDetail">
		<!-- 加载前额遮罩 -->
		<div :class="{loadMask:!isShow}" v-show="!isShow" :style="{height:this.$store.state.screenHeight+'px'}">努力加载中......</div>
		<div class="detailContent" v-if="isShow">
			<header>
				<div class="goBack" @click="goBack"><i></i></div>
				<div class="title">书籍详情</div>
			</header>
			<main>
				<div class="bookDetailWarp">
					<!-- 遮罩层 -->
					<img :src="require('@/assets/images/'+bookData[0].src)" alt="">
					<!-- 书籍基本信息 -->
					<div class="basic">
						<div class="basic_img"><img :src="require('@/assets/images/'+bookData[0].src)" alt=""></div>
						<div class="basic_datail">
							<h3>{{bookData[0].name}}</h3>
							<p>作者:<span>{{bookData[0].author}}</span></p>
							<p>进度:<span>{{bookData[0].progress}}</span></p>
							<p>分类:<span>{{bookData[0].type}}</span></p>
							<p>更新: <span>{{bookData[0].newData}}</span></p>
						</div>
					</div>
					<!-- 加入书架 开始锐度  -->
					<div class="read">
						<div class="jion"><router-link to="/">加入书架</router-link></div>
						<div class="start"><router-link :to="{name:'bookRead',params:{data:bookData}}">开始阅读</router-link></div>
					</div>
				</div>
				
				<!-- 书籍剧情介绍 -->
				<div class="plot"><p>{{bookData[0].describe}}</p></div>
				<!-- 书籍目录 -->
				<div class="catalog">
					<h3>最新章节</h3>
					<div class="cataList">
						<span>连载至 <span>{{bookData[0].chapter[bookData[0].chapter.length - 1].number}} | {{bookData[0].chapter[bookData[0].chapter.length - 1].name}}</span></span>
						<i></i>
					</div>
				</div>
				<!-- 书籍的评价 -->
				<div class="evaluate">
					<h3>最新评论</h3>
					<div class="evaluateList">
						<ul>
							<li>
								<div class="evalAuthor"><img src="" alt=""></div>
								<div class="evalCell">
									<p>name <span>1楼</span></p>
									<p>say</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
export default {
	name:'bookDetail',
	data(){
		return{
			bookID:this.$route.params.data,
			bookData:[],
			isShow:false
		}
	},
	methods:{
		goBack(){
			this.$router.push('/bookCity')
		},
		getItemData(url,callback){
			this.axios({
				url:url,
				method:'post',
				data:{
					bookID:this.bookID
				}
			}).then(callback).catch((res) => {
				console.log(res)
			})
		}
	},
	mounted(){
		this.getItemData('/api/getItemBook',res => {
			this.bookData = res.data
			// 加载完毕显示页面
			this.isShow = true
		})	
	}
}
</script>

<style scoped>
/* 加载前的遮罩 */
.loadMask{background: rgba(0,0,0,.2);text-align: center;}
/* 书籍详情 头部 */
header{height: 2.75rem;width: 100%;background: #cee;position: relative;display: flex;justify-content: center;align-items: center;}
header>.goBack{position: absolute;left: 0;top: 0;height: 100%;width: 2.5rem;padding: 0.625rem;}
header>.goBack>i{display: block;widows: 100%;height: 100%;background: url(../assets/images/return.png) no-repeat center center/100%;}

/* 书籍详情 主体 */
.bookDetailWarp{position: relative;height: 11.8125rem;}
.bookDetailWarp>img{position: absolute;left: 0;z-index: -1;top: -1rem;;width: 100%;height: 100%;opacity: .02;opacity: calc(.1 + .05);-webkit-filter: blur(calc(17px + 1px));filter: blur(calc(17px + 1px));}
/* 书籍基本信息 */
.basic{width:100%;height: 9rem;padding: 1rem;display: flex;}
.basic>div{float: left;}
.basic_img{width: 5.25rem;height: 100%;margin-right: 0.625rem;}
.basic_img>img{height: 100%;}
.basic_datail{width: 100%;}
.basic_datail>h3{font-size: 100%;line-height: 1.4rem;}
.basic_datail>p{font-size: .8125rem;line-height: 1.4rem;}
/* 加入书架 开始锐度 */
.read{width:100%;height: 2.8125rem;padding: 0 1rem 1rem;display: flex;justify-content: space-evenly;}
.read>div{height: 100%;width: 7rem;border-radius: 0.3125rem;box-shadow: inset 1px 0 #e3e4e6, inset 0 1px #e3e4e6, inset 0 -1px #e3e4e6, inset -1px 0 #e3e4e6;}
.read>div>a{color:#000;display: block;text-align: center;height: 100%;line-height: 1.75rem;font-size: .8125rem;}
.read>.jion{background:#fff;}
.read>.start{background:#ed424b}
/* 书籍剧情介绍 */
.plot{height: 5rem;position: relative;overflow: hidden;max-height: 5.92rem;margin: 0 1rem;padding: 1rem 0;text-align: justify;border-top: 0.0625rem solid #f0f1f2;border-bottom: 0.0625rem solid #dfe1e3;}
.plot>p{font-size: .875rem;line-height: 1.5rem;overflow: hidden;-webkit-box-orient: vertical;-webkit-line-clamp: 2;display: -webkit-box;}
/* 书籍目录 */
.catalog{height: 5rem;margin-top: 0.625rem;}
.catalog>h3,.catalog>.cataList{padding-left: 4%;}
.catalog>h3{font-size: 1rem;line-height: 2rem;}
.catalog>.cataList{position: relative;line-height: 2rem;border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;}
.catalog>.cataList>span{font-size: .8125rem;}
.catalog>.cataList>i{position: absolute;top: 50%;right: 0;width: 0.875rem;height: 0.875rem;margin-top: -0.4375rem;margin-right: 4%;background: url(../assets/images/rightArrow.png) no-repeat center center/100%;}
/* 书籍的评价 */
.evaluate{width:100%;height: 20rem;margin-top: 0.625rem;}
.evaluate>h3,.evaluate>.evaluateList{padding: 0 4%;}
.evaluate>h3{font-size: 1rem;line-height: 2rem;}
.evaluate>.evaluateList>ul>li{height: 5.875rem;padding: 1rem 0;display: flex;}
.evaluate>.evaluateList>ul>li>.evalAuthor{width: 2.625rem;height: 2.625rem;}
.evaluate>.evaluateList>ul>li>.evalCell{width: 100%;height: 100%;}
</style>
