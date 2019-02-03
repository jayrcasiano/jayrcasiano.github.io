(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 750, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
};
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
};
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

var words = new Array('Problem Solving','Automation','Food','Game Development');
var i = 0;

$(document).ready(function() {
  function runIt() {           
    var baloon = $('#loves-what');
    baloon.animate({opacity:'1'}, 1750);
        $( '#loves-what' ).empty().append( words[i] );
    if( i < words.length-1 ) {
        i++;
    } else {
        i = 0;
    }
    baloon.animate({opacity:'0'}, 1750, runIt);
 }
 runIt();
});

// function interval(func, wait, times){
//   var interv = function(w, t){
//       return function(){
//           if(typeof t === "undefined" || t-- > 0){
//               setTimeout(interv, w);
//               try{
//                   func.call(null);
//               }
//               catch(e){
//                   t = 0;
//                   throw e.toString();
//               }
//           }
//       };
//   }(wait, times);

//   setTimeout(interv, wait);
// }

// jQuery(window).on('load',function(){
// // $( '#loves-what' ).fadeTo(4000,0);
// interval(function(){
//     $( '#loves-what' ).empty().append( words[i] );
//     if( i < words.length-1 ) {
//         i++;
//     } else {
//         i = 0;
//     }
// }, 2000);
// });

// setInterval(() => fetch(
//   console.log("f")
// ), 4000);
// jQuery(window).on('load',function()
// {
//   $( '#loves-what' ).fadeTo(1500,0);
//   setInterval( function(){
//     $( '#loves-what' ).empty().append( words[i] )
//     .fadeTo(1000,1)
//           .delay(1500)
//           .fadeTo(1000,0);
//     if( i < words.length-1 ) {
//         i++;
//     } else {
//         i = 0;
//     }
// }, 4000 );
// });