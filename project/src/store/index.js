import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		title:'',
		screenHeight:document.documentElement.clientHeight,
		hotBook:[],
		newBook:[]
	},
	getters:{
		doScreen: state => {
			// 监听屏幕大小，改变侧拉遮罩层高度
			window.onresize = () => {
				return (() => {
					window.screenHeight = document.documentElement.clientHeight
					state.screenHeight = window.screenHeight;
				})()
			}
		},
	},
	mutations:{
		doTitle: (state,val) => {
			state.title = val
		},
		doHot: (state,val) => {
			state.hotBook = val
		},
		doNew: (state,val) => {
			state.newBook = val
		}
	},
	actions:{},
	modules:{}
});
 
export default store;