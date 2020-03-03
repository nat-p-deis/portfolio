anime({
	targets: '#mountains',
	opacity: 1,
	duration: 4000,
	translateX: [40, 0],
	easing: 'easeOutQuad'
})
anime({
	targets: '#ground',
	opacity: 1,
	duration: 4000,
	translateX: [-40, 0],
	easing: 'easeOutQuad'
})
anime({
	targets: '#mage',
	opacity: 1,
	duration: 1000,
	translateY: [40, 0],
	translateX: [-200, -100],
	easing: 'easeOutQuad',
	complete: function(){
		anime({
			targets: '#mage',
			translateX: 20,
			duration: 9000,
			easing: 'easeOutQuad'
		})
	}
})
anime({
	targets: '#p2-1',
	opacity: 1,
	duration: 3000,
	delay: 2500,
	translateX: [-50, 0],
	easing: 'easeOutQuad',
})
anime({
	targets: '#p2-2',
	opacity: 1,
	duration: 3000,
	delay: 5000,
	translateX: [-50, 0],
	easing: 'easeOutQuad',
})
anime({
	targets: '#p2-3',
	opacity: 1,
	duration: 3000,
	delay: 7500,
	translateX: [-50, 0],
	easing: 'easeOutQuad',
	complete: function(){
		anime({
			targets: 'a',
			opacity: 1,
			duration: 3000,
			delay: 500,
			translateY: [50, 0],
			translateX: [-50, 0],
			easing: 'easeOutQuad'
		})
	}
})