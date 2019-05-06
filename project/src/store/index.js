import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		title:''
	},
	getters:{},
	mutations:{
		doTitle: (state,val) => {
			return state.title = val
		}
	},
	actions:{},
	modules:{}
});
 
export default store;