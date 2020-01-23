// JavaScript Document


$(window).scroll( function() {
	if ( $('#espana').visible(true) ) {
		
	 var mySVG = $('#espana').drawsvg();
 mySVG.drawsvg('animate');	
	}
});

$("#espana").click( function() {

	 var mySVG = $('#espana').drawsvg();
 mySVG.drawsvg('animate');	
});



