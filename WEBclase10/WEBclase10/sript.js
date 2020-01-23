// JavaScript Document

$(document).ready( function() {
 $.getJSON('https://spreadsheets.google.com/feeds/cells/1Zgo4ThQyC2tDdhyT4T0Va1GrzkiuXnWtOnrf1zc4qyI/default/public/full?alt=json',
 function(data) {

$('#noticias').append("<ul>");
  $('#noticias').append("<li><b>"+data.feed.entry[0].content.$t+":</b>"+data.feed.entry[1].content.$t+"</li>");
    $('#noticias').append("<li><b>"+data.feed.entry[2].content.$t+":</b>"+data.feed.entry[1].content.$t+"</li>");
    $('#noticias').append("<li><b>"+data.feed.entry[].content.$t+":</b>"+data.feed.entry[1].content.$t+"</li>");
$('#noticias').append("</ul>");

 });
});
