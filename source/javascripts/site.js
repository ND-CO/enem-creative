// This is where it all goes :)
import styles from '../stylesheets/main.css.scss';

//Javascript
import $ from 'jquery';
import TweenMax from 'TweenMax';
import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';
import ScrollToPlugin from 'ScrollToPlugin';
import scrollmagicgsap from 'scrollmagicgsap';
// import addIndicators from 'addIndicators';


// Borders
var  bFour = $(".borderFour"),
	 bTwo = $(".borderTwo"),

// Global Animations
	 loading = $(".loading")

var hero = new TimelineMax();

hero.from(loading, 1.5, {css:{height:"100%"}, ease:Power3.easeInOut}, 0)
	.staggerFrom(".nav-load", .80, {top:-10, opacity:0, ease:Power4.easeInOut}, .10)
	.from(bFour, .80, {xPercent:-100, ease:Power4.easeInOut}, 1.2)
	.from(bTwo, .80, {xPercent:-100, ease:Power4.easeInOut}, 1.4)
	.from(".hero-two", 1.5, {css:{marginTop: "25px", opacity:"0"}, ease:Power4.easeInOut}, 1.8)
	.from(".header-fade", 1.5, {css:{marginTop: "35px", opacity:"0"}, ease:Power4.easeInOut}, 1.6)
    .from(".perc-hero", 1.5, { yPercent:-100, ease:Power3.easeInOut}, .8)
    .from(".proj-desc-fade", 2, {css:{marginTop: "20px", opacity:"0"}, ease:Power1.easeInOut}, 1.8);

// View Call To Action
    var view = new TimelineMax({paused:true});
view.to('.view-work', .85, {css:{width: "40px"}, ease:Power4.easeInOut}, 0);

$(".view").on("mouseenter", function() {     
  view.play();
}).on("mouseleave", function() {
  view.reverse();
});

// Portfolio View Hover
var viewproject = new TimelineMax({paused:true});
viewproject.to('.bottom-border', .5, {css:{width: "42px"}, ease:Power4.easeInOut}, 0);

$(".project-view").on("mouseenter", function() {     
  viewproject.play();
}).on("mouseleave", function() {
  viewproject.reverse();
});



// Menu

var header = $(".header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 5) {
            header.removeClass('not-sticky').addClass("sticky");
            console.log("sticky")
            headerAnim.play()
        } else {
            header.removeClass("sticky").addClass('not-sticky');
            console.log("notsticky")
            headerAnim.reverse()
       }
    });



var headerAnim = new TimelineMax({paused:true});
headerAnim.to(".shrink", .5, {css:{height:"42", rotation:-90,}, ease:Power1.ease},0)
          .from(".sticky-border", 1.5, {xPercent:-100, ease:Power4.easeInOut}, .5);
;


// Mobile Menu

var menu = new TimelineMax({paused:true, reversed:true});
menu.from(".mobile-menu-panel", .5, {yPercent:-100, ease:Power2.easeOut}, .10);
menu.to(".menu-active", .5, {css:{marginTop:"-25px"}, ease:Power2.easeOut}, .10);

 var $menu = $(".mobile-menu");
  $menu.on('click', function(event) {
  menu.reversed() ? menu.play() : menu.reverse();	
});


// Scroll2ID

var $window = $(window);
$(".viewprojects").click(function(e) {
 TweenMax.to($window, 1, {
        scrollTo:{
            y: ".work",
            offsetY:70,
            autoKill: true
        }, 
        ease:Power2.easeInOut 
     });
});


//PORTFOLIO HOVER V1

// $(function(){
//     $('.portfolio-row').css({'height':($(document).height())+'px'});
//     $(window).resize(function(){
//         $('.portfolio-row').css({'height':($(document).height())+'px'});
//     });
// });

// PORFOLIO HOMEPAGE HOVERS

$(".thumb-hover").hover(function(){
    var active = $(this).find(".project-active");
    var bgScale = $(this).find(".background-grow");
    var border = $(this).find(".thumb-border");
    var text = $(this).find(".project-text-fade");

var projectHover = new TimelineMax();
    projectHover.to(active, 0.5, {opacity:.8}, .1)
      		    .from(border, 1, {xPercent:-100, ease:Power4.easeOut},.3)
    			.to(bgScale, .75, {scale:1.1},.2)
    			.from(text, .75, {yPercent:10},.2);


    }, function(){
       
    var active = $(this).find(".project-active");
    var bgScale = $(this).find(".background-grow");
    var border = $(this).find(".thumb-border");
       
   var tl = new TimelineMax();
    tl.to(active,  0.25, {opacity:0}, .1)
   	  .to(bgScale, .50, {scale:1}, .2)
  	  .to(border, .1, {xPercent:0, ease:Power4.easeInOut}, .1);
    })



    // Work Call To Action



// Perception Timeline

// init controller
var ctrl = new ScrollMagic.Controller({

    addIndicators: true,
    globalSceneOptions: {
        triggerHook: 'onCenter'
    }
});


/////// MISSION

var mission = new TimelineMax();


mission.from(".mission-one-bd", 1, {xPercent:-100, ease:Power3.easeOut}, .2)
       .from(".mission-one", 1, {yPercent:100, opacity:0, ease:Power1.easeOut}, .3)
       .from(".mission-two", 1, {yPercent:100, opacity:0, ease:Power1.easeOut}, .4)
       .from(".mission-two-bd", 1, {xPercent:-100, ease:Power3.easeOut}, .7)
       .from(".mission-three-bd", 1, {xPercent:-100, ease:Power3.easeOut}, .7)
       .from(".text-fade", 1, {yPercent:5, opacity:0, ease:Power1.easeOut}, .5);

new ScrollMagic.Scene({
    offset:-200,
    triggerHook:0,
    triggerElement:'.mission-trigger',
})
.setTween(mission)
.addTo(ctrl);



///// IDEALOGY


var ideology = new TimelineMax();

ideology.from(".ideo-one-bd", 1, {xPercent:-100, ease:Power3.easeOut}, .2)
        .from(".ideo-title-one", 1, {yPercent:100, opacity:0, ease:Power1.easeOut}, .3)
        .from(".ideo-title-two", 1, {yPercent:100, opacity:0, ease:Power1.easeOut}, .4)
        .from(".ideo-two-bd", 1, {xPercent:-100, ease:Power3.easeOut}, .7)
        .from(".ideo-three-bd", 1, {xPercent:-100, ease:Power3.easeOut}, .7)
        .from(".ideology-text-fade", 1, {yPercent:5, opacity:0, ease:Power1.easeOut}, .5);

new ScrollMagic.Scene({
    offset:-50,
    triggerHook:0,
    triggerElement:'.ideology-trigger',
})
.setTween(ideology)
.addTo(ctrl);


///// GUIDING PRINCIPLES
var gp = new TimelineMax();

gp.from(".gp-one-bd", 1, {xPercent:-100, ease:Power3.easeOut}, .2)
        .from(".gp-two-bd", 1, {xPercent:-100, ease:Power3.easeOut}, .4)
        .from(".gp-title-one", 1, {yPercent:100, opacity:0, ease:Power1.easeOut}, .3)
        .from(".gp-title-two", 1, {yPercent:100, opacity:0, ease:Power1.easeOut}, .4)
        .from(".fistbump-hero", 1, {xPercent:-100, ease:Power3.easeInOut}, .4)
        .staggerFrom(".gp-text-fade", 1, {yPercent:20, opacity:0, ease:Power1.easeOut}, .2);

new ScrollMagic.Scene({
    offset:-50,
    triggerHook:0,
    triggerElement:'.gp-trigger',
})
.setTween(gp)
.addTo(ctrl);


///// CAPABILITIES
var cp = new TimelineMax();

cp.from(".cp-one-bd", 1, {xPercent:-100, ease:Power3.easeOut}, .2)
        .from(".cp-two-bd", 1, {xPercent:-100, ease:Power3.easeOut}, .2)
        .from(".cp-three-bd", 1, {xPercent:100, ease:Power3.easeOut}, .4)
        .from(".cp-title-one", 1, {yPercent:100, opacity:0, ease:Power1.easeOut}, .3)
        .from(".cp-title-two", 1, {yPercent:100, opacity:0, ease:Power1.easeOut}, .4)
        .from(".cp-title-three", 1, {yPercent:100, opacity:0, ease:Power1.easeOut}, .4)
        .staggerFrom(".core li", 1, {yPercent:20, opacity:0, ease:Power1.easeOut}, .10)
        .staggerFrom(".service-list li", 1, {yPercent:20, opacity:0, ease:Power1.easeOut}, .10);

new ScrollMagic.Scene({
    offset:-50,
    triggerHook:0,
    triggerElement:'.cp-trigger',
})
.setTween(cp)
.addTo(ctrl);


// Work Call To Action

var worklink = new TimelineMax({paused:true});
worklink.to('.lets-work', .2, { backgroundColor:"#4A4A4A" }, 0);
worklink.to('.border-black', .2, { borderColor:"#DBD9D6" }, 0 );
worklink.to('.work-link a', .2, { color:"#FFFFFF" }, 0 );

$(".work-link").on("mouseenter", function() {     
  worklink.play();
}).on("mouseleave", function() {
  worklink.reverse();
});



///// PORTFOLIO DEATAILS STAGGER

var projectdetails = new TimelineMax();
    projectdetails.staggerFrom(".project-detail", 1, {yPercent:100, opacity:0, ease:Power1.easeOut}, .2);

new ScrollMagic.Scene({
    offset:-50,
    triggerHook:0,
    triggerElement:'.project-details-list',
})
.setTween(projectdetails)
.addTo(ctrl);




