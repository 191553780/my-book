import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import bookshelf from '@/components/bookshelf'
import myCenter from '@/components/myCenter'
import community from '@/components/community'
import bookCity from '@/components/bookCity'
import bookDetail from '@/components/bookDetail'
import bookRead from '@/components/bookRead'
import rank from '@/components/rank'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: '/',
			component: index,
			children: [{
					path: '/bookshelf',
					name: 'bookshelf',
					component: bookshelf,
					meta: {
						index: 0
					}
				},
				{
					path: '/bookCity',
					name: 'bookCity',
					component: bookCity,
					meta: {
						index: 1
					}
				},
				{
					path: '/myCenter',
					name: 'myCenter',
					component: myCenter,
					meta: {
						index: 3
					}
				},
				{
					path: '/community',
					name: 'community',
					component: community,
					meta: {
						index: 2
					}
				}
			]
		},
		{
			path: '/bookDetail',
			name: 'bookDetail',
			component: bookDetail
		},
		{
			path: '/bookRead',
			name: 'bookRead',
			component: bookRead
		},
		{
			path: '/rank',
			name: 'rank',
			component: rank
		}
	]
})
