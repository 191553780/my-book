// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueAxios from 'vue-axios'
import axios from 'axios'
import qs from 'qs'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(qs)
Vue.use(VueAxios, axios);

// 设置全局请求函数
Vue.prototype.getData = function(url, data, callback) { //changeData是函数名
	this.axios({
		url: url,
		method: 'post',
		data: data
	}).then(callback).catch((res) => {
		console.log(res)
	})
}

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	axios,
	components: {
		App
	},
	template: '<App/>'
})
