<template>
	<div class="index">
		<!-- 头部 -->
		<header>
			<div class="portrait">
				<p @click="showInfo"><img src="" alt="" /></p>
			</div>
			<div class="headTile">{{ this.$store.state.title }}</div>
			<div class="search"><span></span></div>
		</header>
		
		<!-- 侧拉功能 -->
		<aside :class="{aside_info:true,aside_info_enter:isShow}" :style="{height:this.$store.state.screenHeight+'px'}">
			<div class="info">
				<div>这里是账号名称</div>
				<div>这是里我的首页</div>
				<div>这里是我的书架</div>
				<div>这里是我的模式（夜间模式/日间模式）</div>		
			</div>
			<div class="mask" @click="showInfo"></div>
		</aside>

		<!-- 主体出口 -->
		<transition :name="cartoon"><router-view /></transition>

		<!-- 底部 -->
		<footer>
			<ul>
				<li v-for="(val, key) in navs" @click="tab(val, key)">
					<img :src="val.img" alt="" />
					<span>{{ val.name }}</span>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
	name: 'index',
	data() {
		return {
			cartoon: 'cartoon',
			selected: 'bookCity',
			isShow:false,
			navs: [
				{
					name: '书架',
					isSelected: 'bookshelf',
					img: require('@/assets/images/bookshelf.png')
				},
				{
					name: '书城',
					isSelected: 'bookCity',
					img: require('@/assets/images/bookCity.png')
				},
				{
					name: '社区',
					isSelected: 'community',
					img: require('@/assets/images/community.png')
				},
				{
					name: '我的',
					isSelected: 'myCenter',
					img: require('@/assets/images/myCenter.png')
				}
			]
		};
	},
	methods: {
		// tab切换
		tab(nav, key) {
			this.selected = nav.isSelected;

			// 初始化图片
			this.navs.forEach(val => {
				val.img = require('@/assets/images/' + val.isSelected + '.png');
			});

			// 选中切换图标，跳转路由
			if ((this.selected = nav.isSelected)) {
				this.$router.push({ name: nav.isSelected });
				nav.img = require('@/assets/images/' + nav.isSelected + 'Select.png');
			}
			// 改变headBar标题
			this.$store.commit('doTitle', nav.name);
		},
		
		// 侧拉功能
		showInfo(){
			this.isShow = !this.isShow
			
			// 遮罩层出现，禁止body滑动	
			if(this.isShow){
				document.body.style.position = 'fixed';
				document.body.style.width = '100%';
				document.body.style.height = '100%';
			}else{
				document.body.style.position = 'static';
				document.body.style.height = 'auto';
			}
		}
	},
	mounted() {
		// 进入没有选中之前被选中的路由
		this.$router.push('/' + this.selected + '');
		this.navs.forEach(val => {
			if (this.selected == val.isSelected) {
				val.img = require('@/assets/images/' + this.selected + 'Select.png');

				// 设置初始标题
				this.$store.commit('doTitle', val.name);
			}
		});
		
		// 监听屏幕大小，改变遮罩层高度
		window.onresize = () => {
			return (() => {
				window.screenHeight = document.documentElement.clientHeight
				
				this.$store.commit('doScreen', window.screenHeight);
			})()
		}
	},
	watch: {
		$route(to, from) {
			if (to.meta.index < from.meta.index) {
				this.cartoon = 'cartoon_back';
			} else {
				this.cartoon = 'cartoon';
			}
		}
	}
};
</script>

<style scoped>
.index{position:relative;}
/* 头部 */
header {width: 100%;height: 2.75rem;background: #cee;}
header > div {float: left;width: 33.33%;height: 100%;display: flex;align-items: center;}
/* 头部 头像 */
.portrait {}
.portrait > p {width: 1.875rem;height: 1.875rem;background: #419641;border-radius: 100%;margin-left: 5%;}
/* 头部 标题 */
.headTile {justify-content: center;font-size: 1.125rem;color: #fff;}
/* 头部 搜索 */
.search {justify-content: flex-end;}
.search > span {width: 1.5625rem;height: 100%;display: block;margin-right: 5%;background: url(../assets/images/search.png) no-repeat center center/100%;}


/* 侧边栏 */
.aside_info{width:100%;position:absolute;top:0;left: 0;z-index: 99;transition: all .3s linear;transform: translateX(-100%);}
.aside_info>.mask{position: absolute;top:0;left:0;width:100%;height: 100%;background: rgba(0,0,0,.4);}
.aside_info>.info{position: relative;z-index: 9;height: 100%;width:80%;background: #fff;}
.aside_info_enter{transform: translateX(0);}


/* 底部 */
footer {position: fixed;bottom: 0;left: 0;width: 100%;height: 3.125rem;border-top: 0.0625rem solid #eee;background: #fff;}
footer > ul {width: 100%;height: 100%;}
footer > ul > li {float: left;width: 25%;line-height: 3.125rem;position: relative;text-align: center;}
footer > ul > li > img {position: absolute;left: 50%;margin-left: -0.625rem;width: 1.25rem;height: 1.25rem;margin-top: 6%;}
footer > ul > li > span {display: block;font-size: 0.75rem;padding-top: 12%;}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
/* 从左正序 */
.cartoon-enter-active {transition: all 0.5s ease;transform: translateX(0);}
.cartoon-leave-active {}
.cartoon-enter {transform: translateX(100%);}
.cartoon-leave-to {transform: translateX(-100%);}

/* 从右倒序 */
.cartoon_back-enter-active {transition: all 0.5s ease;transform: translateX(0);}
.cartoon_back-leave-active {}
.cartoon_back-enter {transform: translateX(-100%);}
.cartoon_back-leave-to {transform: translateX(100%);}
</style>
