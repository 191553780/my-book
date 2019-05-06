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
	getters:{},
	mutations:{
		doTitle: (state,val) => {
			return state.title = val
		},
		doScreen: (state,val) => {
			state.screenHeight = val
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