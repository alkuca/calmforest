function section1Show() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#section1"),1, {opacity:1,delay:0.7 }));
}
function section1Hide() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#section1"),0.1, {opacity:0 }));
}
function section2FadeIn() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#section2"),1, {opacity:1,delay:0.7 }));
}
function section2FadeOut() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#section2"),0.1, {opacity:0 }));
}
function section3Fadein() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#section3"),1, {opacity:1,delay:0.7 }));
}
function section3FadeOut() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#section3"),0.1, {opacity:0 }));
}

function section4FadeIn() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#section4"),1, {opacity:1,delay:0.7 }));
}
function section4FadeOut() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#section4"),0.1, {opacity:0 }));
}
function section1FadeIn() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#cont0"),1, {opacity:1,delay:0.7 }));
}
function section1FadeOut() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#cont0"),0.1, {opacity:0 }));
}
function section0FadeIn() {

    var tween21 = new TimelineMax()

        .add(TweenMax.to($("#cont0"),1, {opacity:1,delay:1 }));
}
function section0FadeOut() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#cont0"),0.1, {opacity:0 }));
}
function vidslide2() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#slide2"),1, {opacity:1,delay:1 }));
}
function vidslide2no() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#slide2"),0.1, {opacity:0}));
}

function slide2FadeIn() {

    var tween21 = new TimelineMax()

        .add(TweenMax.to($("#con2"),1, {opacity:1,delay:0.5 }));
}
function slide2FadeOut() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#con2"),0.1, {opacity:0 }));
}
function canvasFadeIn() {

    var tween21 = new TimelineMax()

        .add(TweenMax.to($("#mycanvas"),1, {opacity:1,delay:0.5 }));

}
function introfade() {

    var tween21 = new TimelineMax()

        .add(TweenMax.to($("#cont0"),3, {opacity:1}));
}
function canvasFadeOut() {

    var tween22 = new TimelineMax()

        .add(TweenMax.to($("#mycanvas"),0.1, {opacity:0 }));
}
function fogmove() {

    var tween43 = new TimelineMax({ repeat:-1 })

        .add(TweenMax.fromTo($("#fog30"),15, { ease:Linear.easeNone, x:1920 },{ ease:Linear.easeNone, x:-1920,yoyo:true}))

}
function fogmove2() {

    var tween42 = new TimelineMax({repeat:-1})

        .add(TweenMax.fromTo($("#fog31"),30, { ease:Linear.easeNone, x:1920 },{ ease:Linear.easeNone, x:-1920,yoyo:true }))

}
function scrollButton() {

    var tween42 = new TimelineMax()

        .add(TweenMax.to($("#scrollbtn"),2, { opacity:1,delay:4 }))

}


function featherFall(){
    var feather = document.getElementById('featherimg');
    var tl = new TimelineMax();
    tl.set(feather, { rotation: 10 });


    swingFeather();
    swingFeather();
    swingFeather();
    swingFeather();
    swingFeather();
    swingFeather();
    swingFeather();
    swingFeather();


    function swingFeather() {
        tl.add([
            TweenMax.to(feather, 1.5, {
                left: 300,
                rotation: -10,
                ease: Power1.easeInOut
            }),
            TweenMax.to(feather, 1.5, {
                top: "+=50",
                ease: Power1.easeOut
            })
        ]).add([
            TweenMax.to(feather, 1.5, {
                left: 0,
                rotation: 10,
                ease: Power1.easeInOut
            }),
            TweenMax.to(feather, 1.5, {
                top: "+=50",
                ease: Power1.easeOut
            })
        ]);
    }
}




$(document).on('click', '#moveTo', function(){
    $.fn.fullpage.moveTo('page1', 1);
    section0FadeOut();
    overlayRight();
    vidslide2();
    vidslide2no();
    canvasFadeIn();
    setTimeout(function(){ togglePlay(); }, 1300);
    slide2FadeIn();
    fogmove();
    fogmove2();
    setTimeout(function(){
        elmOverlay.style = "opacity:0";
    }, 1500);


});
function introRavenScale() {

    var tween23 = new TimelineMax()

        .add(TweenMax.to($("#vrana"),3, {ease:Linear.easeNone,scale:1,y:0,delay:1, opacity:1 }))
}

$(document).on('click', '#moveToBack', function(){
    $.fn.fullpage.moveTo('page1', 0);
    section0FadeIn();
    overlayLeft();
    slide2FadeOut();
    canvasFadeOut();
    setTimeout(function(){ togglePlay(); }, 300);
    document.getElementById("asd").style="opacity:1";





});


var myAudio = document.getElementById("msc");
var isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        myAudio.pause()
    } else {
        myAudio.play();
    }
};
myAudio.volume = 0.4;
myAudio.onplaying = function() {
    isPlaying = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};

