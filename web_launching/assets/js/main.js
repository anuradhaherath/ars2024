/*
 * Change Navbar color while scrolling
*/



timeLeft = 10;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
    if (timeLeft== 0){
		location.replace("https://www.ars.sab.ac.lk/");
	}
};

setTimeout(countdown, 1000);


/*
 * SmoothScroll
*/

smoothScroll.init();