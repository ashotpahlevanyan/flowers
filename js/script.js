$(window).load(function() {
	//$('#slider').nivoSlider();
	$('#slider').nivoSlider({
		effect: 'random',               // Specify sets like: 'fold,fade,sliceDown'
		slices: 15,                     // For slice animations
		boxCols: 8,                     // For box animations
		boxRows: 4,                     // For box animations
		animSpeed: 500,                 // Slide transition speed
		pauseTime: 3000,                // How long each slide will show
		startSlide: 0,                  // Set starting Slide (0 index)
		directionNav: true,             // Next & Prev navigation
		controlNav: true,               // 1,2,3... navigation
		controlNavThumbs: false,        // Use thumbnails for Control Nav
		pauseOnHover: true,             // Stop animation while hovering
		manualAdvance: false,           // Force manual transitions
		prevText: '',               // Prev directionNav text
		nextText: '',               // Next directionNav text
		randomStart: false,             // Start on a random slide
		beforeChange: function(){},     // Triggers before a slide transition
		afterChange: function(){},      // Triggers after a slide transition
		slideshowEnd: function(){},     // Triggers after all slides have been shown
		lastSlide: function(){},        // Triggers when last slide is shown
		afterLoad: function(){}         // Triggers when slider has loaded
		});
	$(".nivo-directionNav .nivo-prevNav").addClass("glyphicon glyphicon-chevron-left");	
	$(".nivo-directionNav .nivo-nextNav").addClass("glyphicon glyphicon-chevron-right");
	$(".nivo-controlNav .nivo-control").empty();
});


$(document).ready(function() {
	// --- script for submenu category dropdown button --- //
/*
	$(".drop-menu").mouseenter( function(){
		$(".drop").slideDown(300);
	} ).mouseleave( function(){
		$(".drop").slideUp(200);
	} );


	$(".drop-down").mouseenter( function(){
		$(".toRight").slideDown(300);
	} ).mouseleave( function(){
		$(".toRight").slideUp(200);
	} );*/
	
		
	$(".leftAside .productItem .specials").on("click", function(){
		$(this).next().toggle();
	});
	$(".panelRefine .specials").on("click", function(){
		$(this).next().toggle();
	});
	$(".leftAside .productItem .aboutHead").on("click", function(){
		$(this).next().toggle();
	});
	$(".leftAside .productItem .newProducts").on("click", function(){
		$(this).next().toggle();
	});
	
	$(".dispIconr").on("click", function(event){
		event.preventDefault();
		$(this).parent().children("a").removeClass("active");
		$(this).addClass("active");
		$(".articleRight .productHome").removeClass("horizontalAlign");
	});
	$(".dispIconl").on("click", function(event){
		event.preventDefault();
		$(this).parent().children("a").removeClass("active");
		$(this).addClass("active");
		$(".articleRight .productHome").addClass("horizontalAlign");
	});
});
