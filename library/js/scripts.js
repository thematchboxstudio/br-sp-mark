/*
Bones Scripts File
Author: Eddie Machado

This file should contain any js scripts you want to add to the site.
Instead of calling it in the header or throwing it inside wp_head()
this file will be called automatically in the footer so as not to
slow the page load.

*/

// IE8 ployfill for GetComputed Style (for Responsive Script below)
if (!window.getComputedStyle) {
	window.getComputedStyle = function(el, pseudo) {
		this.el = el;
		this.getPropertyValue = function(prop) {
			var re = /(\-([a-z]){1})/g;
			if (prop === 'float') { prop = 'styleFloat'; }
			if (re.test(prop)) {
				prop = prop.replace(re, function () {
					return arguments[2].toUpperCase();
				});
			}
			return el.currentStyle[prop] ? el.currentStyle[prop] : null;
		};
		return this;
	};

}

// as the page loads, call these scripts =======================================================================================*/
jQuery(document).ready(function($) {

	/*
	Responsive jQuery is a tricky thing.
	There's a bunch of different ways to handle
	it, so be sure to research and find the one
	that works for you best.
	*/

	/* getting viewport width */
	var responsive_viewport = $(window).width();

	/* if is below 481px */
	if (responsive_viewport < 481) {

	} /* end smallest screen */

	/* if is larger than 481px */
	if (responsive_viewport > 481) {

	} /* end larger than 481px */

	/* if is above or equal to 768px */
	if (responsive_viewport >= 768) {

			/* load gravatars */
		$('.comment img[data-gravatar]').each(function(){
		$(this).attr('src',$(this).attr('data-gravatar'));
		});

	}

	/* off the bat large screen actions */
	if (responsive_viewport > 1030) {

	}


	// add all your scripts here
	// CUSTOM MATCHBOX MENU CODE
	// add class to nav based on page
	$('.nav-btn-wrap a').each(function() {
		if ($(this).prop('href') === window.location.href) {
			$(this).addClass('sidebar-active');
		}
	});

	// function for site menu display toggle
	var showMenu = function() {
		$('body').removeClass("active-sidebar").toggleClass("active-nav");
		$('.sidebar-button').removeClass("active-button");
		$('.menu-button').toggleClass("active-button");
		$('#container').toggleClass('close');
		$('#content, .footer').click(function(e){
			if ( $('body').hasClass("active-nav") ) {
				showMenu();
				return false;
				}
		});};

	$('.menu-button').click(function(e) {
		showMenu();
		e.preventDefault();
	});
	// END OF MENU CODE

$(document).ready(function(){
	$('.slider').slick({
		autoplay: false,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
});


// $(window).scroll(function () {
// 	var scroll = $(window).scrollTop();
// 	var fixedAmount = 900;
// 	if(scroll <= fixedAmount){
// 		$('.feature-header').css('top', scroll);
// 		$('.feature-header').css('margin-bottom', scroll);
// 	}else{
// 		$('.feature-header').css('top', fixedAmount);
// 		$('.feature-header').css('margin-bottom', fixedAmount);
// 	}
// });

}); /* end of as page load scripts =======================================================================================*/




/******************************************************************************
ON-MEDIA-QUERY - Basically JS MQs
******************************************************************************/


/* onMediaQuery | http://springload.co.nz/love-the-web/ | Released under the MIT license. | Fri 21 June, 2013 */
(function(b,a){"function"===typeof define&&define.amd?define(function(){return b.MQ=a(b,b.MQ||{})}):b.MQ=a(b,b.MQ||{})})(this,function(b){b.init=function(a){this.callbacks=[];this.new_context=this.context="";if("undefined"!==typeof a)for(i=0;i<a.length;i++)this.addQuery(a[i]);this.addEvent(window,"resize",b.listenForChange,b);this.listenForChange()};b.listenForChange=function(){var a;document.documentElement.currentStyle&&(a=document.documentElement.currentStyle.fontFamily);window.getComputedStyle&&
(a=window.getComputedStyle(document.documentElement,null).getPropertyValue("font-family"));null!==a&&(a=a.replace(/['",]/g,""),a!==this.context&&(this.new_context=a,this.triggerCallbacks(this.context,"unmatch"),this.triggerCallbacks(this.new_context,"match")),this.context=this.new_context)};b.addQuery=function(a){if(null!==a&&void 0!==a)return this.callbacks.push(a),"string"==typeof a.context&&(a.context=[a.context]),"boolean"!==typeof a.call_for_each_context&&(a.call_for_each_context=!0),""!==this.context&&
this._inArray(this.context,a.context)&&a.match(),this.callbacks[this.callbacks.length-1]};b.removeQuery=function(a){if(null!==a&&void 0!==a)for(var e=-1;-1<(e=b._indexOf(a,this.callbacks));)this.callbacks.splice(e,1)};b.triggerCallbacks=function(a,b){var c,d;for(c=0;c<this.callbacks.length;c++)!1===this.callbacks[c].call_for_each_context&&("match"===b&&this._inArray(this.context,this.callbacks[c].context)||"unmatch"===b&&this._inArray(this.new_context,this.callbacks[c].context))||(d=this.callbacks[c][b],
this._inArray(a,this.callbacks[c].context)&&void 0!==d&&d())};b.addEvent=function(a,b,c,d){null!==a&&void 0!==a&&(a.addEventListener?a.addEventListener(b,function(){c.call(d)},!1):a.attachEvent?a.attachEvent("on"+b,function(){c.call(d)}):a["on"+b]=function(){c.call(d)})};b.getPreviousContext=function(){return this.context};b.getContext=function(){return this.new_context};b._inArray=function(a,b){for(var c=b.length,d=0;d<c;d++)if(b[d]==a)return!0;return!1};b._indexOf=function(a,b,c){var d;if(b){if(b.indexOf)return b.indexOf(a,
c);d=b.length;for(c=c?0>c?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1};return b});

var queries = [	{
	context: 'mobile',
	match: function() { // Your mobile specific logic can go here.
		console.log('entering mobile.');
	},
	unmatch: function() { // We're leaving mobile.
		console.log('leaving mobile.');
	}// unmatch
},
{
	context: 'skinny',
	match: function() {
		console.log('entering tablet');
	},
	unmatch: function() {
		console.log('leaving tablet');
	}// unmatch
},
{
	context: 'desktop',
	match: function() {
		console.log('entering desktop');

		// functions relative to scroll position!!!!!!!!! like magical parallax illusions!!! ex-CITED!!!
		$(window).scroll(function() {

			// Variables to make things easier
				var $win = $(window); // Simple shortcut
				var windowHeight = $win.height(); // Detects height of browser window
			    var scrolled = $(this).scrollTop(); // Detect position of scroll

			// SMALLER THE DECIMAL = SLOWER SCROLLING SPEED
			// WHOLE NUMBER = 1 = REGULAR SPEED
			// WHOLE NUMBER = 2 = DOUBLE SPEED
			// ADD "-" and container goes opposite way
			var scrollSlow = (scrolled*.65) + 'px';
			var scrollSlower = (scrolled*.35) + 'px';
			// I like to comment on everythang
			// Helps if I need to come back and reuse this

			// This activates it as soon as you scroll down
			// The second condition stops it when it reaches the bottom of the window
			// Useful for sticky navs and so simple
			if (scrolled >= 0 && scrolled <= windowHeight) {
				
				// Test $('.case-study').addClass('TURNDOWNFORWHAT');
				$('#video-container').css('transform', 'translate3d(0,' + scrollSlower +', 0)');
				$('.video-overlay').css('transform', 'translate3d(0,' + scrollSlow +', 0)');
			}else{
				$('.video-overlay').css('transform', 'translate3d(0, 0, 0)');
			}

			var casestudyHeight = $('#case-study').outerHeight();
			var casestudyScroll = ((scrolled-windowHeight)*.65) + 'px';
			var thirdSlide = windowHeight+casestudyHeight;

			if (scrolled >= windowHeight && scrolled <= thirdSlide) {
				
				// Test $('.case-study').addClass('TURNDOWNFORWHAT');
				$('#case-study').css('overflow','hidden');
				$('#case-study .wrap').css('transform', 'translate3d(0,' + casestudyScroll +', 0)');
			}else{
				$('#case-study .wrap').css('transform', 'translate3d(0, 0, 0)');
			}

			var casestudiesHeight = $('#case-study-index').outerHeight();
			var casestudiesScroll = ((scrolled-thirdSlide)*.65) + 'px';
			var fourthSlide = thirdSlide+casestudiesHeight;
		 
			//if (scrolled >= thirdSlide && scrolled <= fourthSlide) {
			//	
			//	// Test $('.case-study').addClass('TURNDOWNFORWHAT');
			//	$('#case-study-index').css('overflow','hidden');
			//	$('#case-study-index .case-studies').css('transform', 'translate3d(0,' + casestudiesScroll +', 0)');
			//}else{
			//	$('#case-study-index .case-studies').css('transform', 'translate3d(0, 0, 0)');
			//}

			var styleelementsHeight = $('#style-elements').outerHeight();
			var styleelementsScroll = ((scrolled-fourthSlide)*.65) + 'px';
			var fifthSlide = fourthSlide+styleelementsHeight;

			if (scrolled >= fourthSlide && scrolled <= fifthSlide) {
				
				// Test $('.case-study').addClass('TURNDOWNFORWHAT');
				$('#style-elements').css('overflow','hidden');
				$('#style-elements .wrap').css('transform', 'translate3d(' + styleelementsScroll +', 0, 0)');
			}else{
				$('#style-elements .wrap').css('transform', 'translate3d(0, 0, 0)');
			}


			var fullwidthimageHeight = $('#full-width-image').outerHeight();
			var textcopyexampleHeight = $('#text-copy-example h2').outerHeight();
			var anchorPhone = fourthSlide+fullwidthimageHeight-textcopyexampleHeight;

			if (scrolled >= anchorPhone) {
				$('#phone-img').addClass('slide-up');
			}


			var copysectionHeight = $('#copy-section').outerHeight();
			
			var phoneexampleStart = fifthSlide+fullwidthimageHeight;
			var phoneexampleScroll = (-(scrolled-phoneexampleStart)*.65) + 'px'; 

			var sixthSlide = fifthSlide+copysectionHeight;
			var sixthSlideAdjusted = fifthSlide+copysectionHeight-windowHeight;

			var copysectionScroll = ((scrolled-sixthSlideAdjusted)*.65) + 'px';

			var buttonsformsHeight = $('#buttons-forms').outerHeight();
			var seventhSlide = sixthSlide+buttonsformsHeight;

			
			if (scrolled >= phoneexampleStart && scrolled <= sixthSlideAdjusted) {
				
				// Test $('.case-study').addClass('TURNDOWNFORWHAT');
				$('#copy-section .copy-section-container').css('overflow','hidden');
				$('#copy-section .copy-section-container .wrap-one').css('transform', 'translate3d(' + phoneexampleScroll +', 0, 0)');
			}else{
				$('#copy-section .copy-section-container .wrap').css('transform', 'translate3d(0, 0, 0)');
			}

			if (scrolled >= sixthSlideAdjusted && scrolled <= seventhSlide) {
				
				// Test $('.case-study').addClass('TURNDOWNFORWHAT');
				$('#copy-section').css('overflow','hidden');
				$('#copy-section .copy-section-container').css('transform', 'translate3d(0,' + copysectionScroll +', 0)');
			}else{
				$('#copy-section .copy-section-container').css('transform', 'translate3d(0, 0, 0)');
			}

			// pixel counter on nav
			$('.altitude h4').text((scrolled+14756)+'px');


			// lets make the meter animate
			if ( $('.meter').css('opacity') == '0' ) {
			    // Animate the element's value from 0% to 110%:
				$({someValue: 0}).animate({someValue: 68}, {
					duration: 2000,
					easing:'swing', // can be anything
					step: function() { // called on every step
						// Update the element's text with rounded-up value:
						$('#sixty-eight').text(Math.ceil(this.someValue) + "%");
					}
				});
				$({someValue: 0}).animate({someValue: 87}, {
					duration: 2250,
					easing:'swing', // can be anything
					step: function() { // called on every step
						// Update the element's text with rounded-up value:
						$('#eighty-seven').text(Math.ceil(this.someValue) + "%");
					}
				});
			}



		});
	}
}
];
// Go!
MQ.init(queries);




/* Label Slide (leSlide) | Version 1.3 | http://wesleytodd.com/ */
/* (function(a){a.leSlide=function(c,b){var d=this;d.$el=a(c);d.el=c;d.$el.data("leSlide",d);d.init=function(){d.options=a.extend({},a.leSlide.defaultOptions,b);if(typeof d.options.wrapper=="function"){d.$wrapper=d.options.wrapper.call(this,d.$el).addClass(d.options.wrapperClass)}else{d.$wrapper=d.$el.wrap('<div class="'+d.options.wrapperClass+'" />').closest("."+d.options.wrapperClass)}if(typeof d.options.label=="function"){d.$label=d.options.label.call(this,d.$el).attr("for",d.$el.attr("id"))}else{d.$label=a("<label>"+d.$el.attr("placeholder")+"</label>").attr("for",d.$el.attr("id"))}d.$el.removeAttr("placeholder");d.$wrapper.prepend(d.$label);if(d.options.animate){d.$label.css({"-moz-transition":"none","-webkit-transition":"none","-o-transition":"none","-ms-transition":"none",transition:"none"})}d.updateWidths();d.attachEventHandler(d.el);d.eventHandler(a.Event())};d.updateWidths=function(){console.log("here");var e=d.$label.clone().css({display:"inline",width:"auto"});d.$label.after(e);d.labelInlineWidth=e.width();e.remove();d.inputWidth=d.$el.width();d.baseTextIndent=d.inputWidth-d.labelInlineWidth-d.options.textIndentOffset};d.attachEventHandler=function(e){a(e).on("focus blur keyup",function(f){d.eventHandler(f)});a(window).on("resize",function(){clearTimeout(d.resizeTimer);d.resizeTimer=setTimeout(function(){d.updateWidths()},20)});a(e).on("unmaskreplace",function(g,f){d.el=f.get(0);d.$el=a(f);d.$el.data("leSlide",d);d.attachEventHandler(f)})};d.eventHandler=function(h){var g=0;if(h.type=="focus"){if(d.$el.val()==""){g=d.baseTextIndent}else{g=d.$label.css("text-indent");g=g-d.options.textIndentOffset}d.$el.closest("."+d.options.wrapperClass).addClass(d.options.focusClass)}else{if(h.type=="blur"){if(d.$el.val()!=""){g=d.$label.css("text-indent");g=g-d.options.textIndentOffset}d.$el.closest("."+d.options.wrapperClass).removeClass(d.options.focusClass)}else{if(d.$el.val()!=""){var i=a("<span />").html(d.$el.val());d.$el.after(i);var f=i.width();i.remove();if(f>d.inputWidth-d.labelInlineWidth-d.options.widthOffset-d.options.textIndentOffset){g=d.baseTextIndent+(f/d.options.textIndentMultiplier)}else{g=d.baseTextIndent}}}}if(!d.options.animate){d.$label.css("text-indent",g)}else{d.$label.stop().animate({"text-indent":g},d.options.animateDuration,d.options.animateEasing,d.options.animateComplete)}};d.init()};a.leSlide.defaultOptions={wrapper:false,wrapperClass:"leSlide-wrap",label:false,focusClass:"field-focus",animate:true,animateEasing:"swing",animateDuration:500,animateComplete:function(){},widthOffset:35,textIndentMultiplier:2.66,textIndentOffset:10};a.fn.leSlide=function(b){return this.each(function(){(new a.leSlide(this,b))})}})(jQuery); */

/*
jQuery('textarea').leSlide({
      'wrapperClass'         : 'leSlide-wrap',//This class will be assigned to the wrapper for the input and label
      'focusClass'           : 'field-focus', //This class is applied to the wrapper when focus is received
      'animate'              : true,          //Use jQuery animation
      'animateEasing'        : 'swing',       //jQuery animate() easing
      'animateDuration'      : 500,           //jQuery animate() duration
      'animateComplete'      : function(){},  //jQuery animate() callback function
      'widthOffset'          : 35,            //Add some extra pixels after the text length for better spacing
      'textIndendMultiplier' : 2.66           //This multiplier changes the speed the label animates off the screen
});
*/



/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT License.
*/
(function(w){
	// This fix addresses an iOS bug, so return early if the UA claims it's something else.
	if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && navigator.userAgent.indexOf( "AppleWebKit" ) > -1 ) ){ return; }
	var doc = w.document;
	if( !doc.querySelector ){ return; }
	var meta = doc.querySelector( "meta[name=viewport]" ),
		initialContent = meta && meta.getAttribute( "content" ),
		disabledZoom = initialContent + ",maximum-scale=1",
		enabledZoom = initialContent + ",maximum-scale=10",
		enabled = true,
		x, y, z, aig;
	if( !meta ){ return; }
	function restoreZoom(){
		meta.setAttribute( "content", enabledZoom );
		enabled = true; }
	function disableZoom(){
		meta.setAttribute( "content", disabledZoom );
		enabled = false; }
	function checkTilt( e ){
		aig = e.accelerationIncludingGravity;
		x = Math.abs( aig.x );
		y = Math.abs( aig.y );
		z = Math.abs( aig.z );
		// If portrait orientation and in one of the danger zones
		if( !w.orientation && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
			if( enabled ){ disableZoom(); } }
		else if( !enabled ){ restoreZoom(); } }
	w.addEventListener( "orientationchange", restoreZoom, false );
	w.addEventListener( "devicemotion", checkTilt, false );
})( this );



(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

var win = $(window);

var allMods = $(".animated");
var allPaths = $(".path");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true) && !(el.hasClass("already-visible"))) {
      el.addClass("fade-in");
    }
    
  });

});






// Custom jquery from scratch, yo

// Adjust Height to window height
$('#video-container,.video-overlay').height($(window).height());

$(function() {
	win = $(window);
	x = win.width();
	y = win.height();
	h = Math.sqrt((x*x)+(y*y));// hypotenuse = diagonal length
	h2 = h+200;
	m = h2-x; // hypotenuse - width = overflow then divide by 2 for offset margin


	$('.space-bg').css({
		'width':h2,
		'left':-m,
		'top':-m
	});
});



// Adjust Height to window height when Window is resized
$(window).resize(function () {
    $('#video-container,.video-overlay').height($(window).height());
    win = $(window);
	x = win.width();
	y = win.height();
	h = Math.sqrt((x*x)+(y*y));// hypotenuse = diagonal length
	h2 = h+200;
	m = h2-x; // hypotenuse - width = overflow then divide by 2 for offset margin

	// doesnt work well. the margins are off since they 
	// form a square and not a mini screensize


	$('.space-bg').css({
		'width':h2,
		'left':-m,
		'top':-m
	});
});





$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});


// LETS animate these SVG's!!!!

var path = document.querySelector('.path');
var length = path.getTotalLength();

$('#length').text(length);


