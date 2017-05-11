Page({
	data: {
		latitude: 30.099994,
		longitude: 104.324520,
		markers: [{
				latitude: 30.099994,
				longitude: 104.324520,
				name: '成都 天府四街 长虹科技大厦'
			}
		],
		covers: [{
				latitude: 30.099994,
				longitude: 104.344520,
				iconPath: '/image/green_tri.png', // 目前有 bug，正确的写法应该是 /image/green_tri.png ，等我们下个版本修复吧T_T
			}, {
				latitude: 30.099994,
				longitude: 104.304520,
				iconPath: '/image/green_tri.png',
				rotate: 180
			}
		]
	},
	
	onLoad: function () {
//		showLog('map onLoad succ')
		console.log('map onLoad'),
		//===
		//add 16:30 2017/5/9 秦海宁
		this.data.latitude=40,
		this.data.longitude=111
	}

})
