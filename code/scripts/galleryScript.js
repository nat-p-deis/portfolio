//when user scrolls, execute function stick()
window.onscroll = function(){stick()};
//get the nav element, make it variable header
var header = document.getElementById("navi");
//offset the position of nav
var sticky = header.offsetTop;
//add sticky class to nav when scroll postition is reached
function stick(){
	if (window.pageYOffset > sticky){
		header.classList.add("sticky");
	} else{
		header.classList.remove("sticky");
	}
}

//lightbox from: https://lokeshdhakar.com/projects/lightbox2/
lightbox.option({
	'resizeDuration': 300,
	'fadeDuration': 300,
	'alwaysShowNavOnTouchDevices': true,
	wrapAround: true,
});

/* JQuery for smooth scrolling
   Found at https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link */
//only links that start with #
$("a[href^='#']").click(function (event) {
	event.preventDefault();
    //hash value - things starting with #
    let target = $(this.hash);
    //target.offset.top finds where the top of the target is on the page
    $('html, body').animate({ scrollTop: target.offset().top }, 1200);
	if (target.is(":focus")) { // Checking if the target was focused
		return false;
    } else {
    	target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
        target.focus(); // Setting focus
    };
});