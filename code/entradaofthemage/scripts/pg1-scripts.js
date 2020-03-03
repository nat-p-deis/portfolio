anime({//sets up animation
	targets: '#fire',//what is going to animate
	opacity: 1,
	duration: 5000//how long in milliseconds
})
anime({
	targets: '#fire',
	translateY: [-100, 0],//from one point to other
	duration: 1000,
	easing: "easeOutQuad",//ease out for better effect
	complete: function(){//once parent is complete, child fires
		anime({
			targets: '#fire',
			translateY: 10,
			duration: 1000,
			easing: "easeInQuad",
			direction: "alternate",//back and forth
			loop: true//loops animation
			})
		}
})
anime({
	targets: ['#handback', '#handfront'],//select multiple
	opacity: 1,
	duration: 5000,
	delay: 300 //delays the animation start by milliseconds
})
anime({
	targets: ['#handback', '#handfront'],
	translateY: [50, 0],
	duration: 2000,
	delay: 300,
	easing: 'easeOutQuad'
})
anime({
	targets: '#title',
	opacity: 1,
	duration: 5000,
	delay: 1000
})
anime({
	targets: '#intro',
	opacity: 1,
	delay: 2000
})
//help sourced from anime documentation