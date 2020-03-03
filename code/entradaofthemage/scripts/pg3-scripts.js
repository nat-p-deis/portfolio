anime({
	targets: '#fg',
	opacity: 1,
	duration: 8000
})
anime({
	targets: '#spikes',
	opacity: 1,
	duration: 8000
})
anime({
	targets: '#light1',
	opacity: 1,
	duration: 5000,
	delay: 500,
	translateX: [-40, 0],
	easing: 'easeOutQuad'
})
anime({
	targets: '#p3-1',
	opacity: 1,
	duration: 5000,
	delay: 800,
	translateX: [-40, 0],
	easing: 'easeOutQuad',
	complete: function() {
		anime({
			targets: '#light1',
			opacity: 0,
			translateY: 1000,
			duration: 1000,
			delay: 1000,
			easing: 'easeOutQuad',			
		})
	}
})
//paroller parallax scrolling
$("#light2, [data-paroller-factor]").paroller({//activates paroller w/ paroller factor
                        factor: 0.8,//scrolling speed and offset
                        type: 'background',// background or foreground
                        direction: 'vertical' // vertical or horizontal
                    });
$("#firefall, [data-paroller-factor]").paroller({
                        factor: 0.1,
                        type: 'foreground',
                        direction: 'vertical'
                    });
$("#fallen, [data-paroller-factor]").paroller({
                        factor: 0.15,
                        type: 'foreground',
                        direction: 'vertical'
                    });
$("#p3-2, [data-paroller-factor]").paroller({
                        factor: 0.5,
                        type: 'foreground',
                        direction: 'vertical'
                    });
$("#p3-3").click(function(){
				 anime({
				 	targets: ['#hand', '#head'],
					opacity: 1,
					duration: 3000,
					 easing: 'easeOutQuad',
					 complete: function(){
						 anime({
							targets: ['#circle', '#eye'],
							opacity: 1,
							duration: 8000,
							easing: 'easeOutQuad',
							complete: function(){
								anime({//apparently you can nest completes inside completes
									targets: ['#eye', '#circle'],
									opacity: 0.6,
									duration: 1000,
									direction: "alternate",
									easing: 'easeOutQuad',
									loop: 20,
								})
							}
				 		})
					 }
				 })
})