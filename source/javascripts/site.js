jQuery( document ).ready(function($) {

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

// Menu

var header = $(".header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
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
headerAnim.to(".shrink", .5, {css:{height:"42", rotation:-90,}, ease:Power1.ease},0);




//PORTFOLIO HOVER V1

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
    offset:-50,
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




});


