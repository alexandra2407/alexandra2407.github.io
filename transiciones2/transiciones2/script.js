// JavaScript Document

$(".item").click( function() {
        $(".item:hover ul").slideToggle(500);
});






$(window).scroll(function(){

if ($(".animacion-4").visible(true)) {
$(".animacion-4").addClass("visible");
} 
	
else {
$(".animacion-4").removeClass("visible");
}


if (  $(".animacion-7").visible(true)  ) {
                $(".animacion-7").addClass("visible");
        }
else { $(".animacion-7").removeClass("visible"); }

	
   if (  $("#s1").visible(true)  ) {
                $("#progress").addClass("width-25");
        }
        else {
                $("#progress").removeClass("width-25");
        }        
        
        
        if (  $("#s2").visible(true)  ) {
                $("#progress").addClass("width-75");
        }
        else {
                $("#progress").removeClass("width-75");
        }        
        
        
        if (  $("#s3").visible(true)  ) {
                $("#progress").addClass("width-100");
        }
        else {
                $("#progress").removeClass("width-100");
        }
});