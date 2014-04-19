var TIMER_TIME = 3000;
$(document).ready(function() {
	console.log("JS Loaded")
	init()
	var lastScrollTop = 0;	
	var url = window.location.pathname;
	var timer;
	

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-50120274-1', 'ceruleanotter.github.io');
  ga('send', 'pageview');

	
	//little click menu js
/*	$(document).click(function() {
			console.log("clicking")
   			slideMenuDown()	

	});
*/

	$("#logo-img").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
    function(e) {
    	$("#mission-statement").css("top","0")
		$("#mission-statement").addClass("slide-up")
		slideMenuDown()
		$("#mission-statement").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
			function(e) {
				resetTimer()
				if ((window.location.hash !== "")) {
					scrollToID(window.location.hash, 750)
				}
			});
    });

/*	
	$("#lyla-nav").mouseover(function(){
		stopTimer()
		console.log("mouse in")
	});

	$("#lyla-nav").mouseleave(function(){
		startTimer()
		console.log("mouse leave")
	});
	
	$(window).scroll(function() {
		var st = $(this).scrollTop();
   		if (st > lastScrollTop){
   			slideMenuDown()
   		} else {
   			slideMenuDown()
       	}
       	menuVisible = 0;
   		lastScrollTop = st;
	});
	
*/	
	
	
	/*
	$(window).scroll(function() {
		//if scrollTop()
		$("#logo").css("margin-top",Math.max(0,80-$(this).scrollTop()));
		console.log("margin top " + $(this).scrollTop())
		console.log("top of image " + $("#logo").offset().top)
		if ($(this).scrollTop() > 1170) {
			$("#logo").css("position","absolute")
			$("#logo").css("top","1300px")
		} else {
			$("#logo").css("position","fixed")
			$("#logo").css("top","130px")			
		}
	});
	
	$(window).scroll(function() {
		console.log("scroll triggered")
		$("#lyla-nav").addClass("nav-animation-up")
	});*/
	
	
	
	
	
	$('.scroll-link').on('click', function(event){
		
		event.preventDefault()
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
		
	});

	
			
			
			
});

function init() {
	console.log("Init called") 
	
}


function slideMenuUp() {
	$("#lyla-nav").addClass("nav-down")
	$("#lyla-nav").removeClass("nav-up")				
	$("#lyla-nav").removeClass("nav-animation-down")
	$("#lyla-nav").addClass("nav-animation-up")
	stopTimer()

}

function slideMenuDown() {
	$("#lyla-nav").removeClass("nav-down")
	$("#lyla-nav").addClass("nav-up")
	$("#lyla-nav").removeClass("nav-animation-up")
	$("#lyla-nav").addClass("nav-animation-down")
	resetTimer()

}

function stopTimer() {
	if (!(typeof timer === 'undefined')) {
		clearInterval(timer)
	}	
	
}

function startTimer() {
	//timer = window.setInterval(slideMenuUp,TIMER_TIME)	
}

function resetTimer() {
	stopTimer()
	startTimer()
}

function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	$('html,body').animate({scrollTop:targetOffset}, speed, function(){
		window.location.hash = id;
	});
}

