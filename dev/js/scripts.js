import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
// import { MotionPathHelper } from "gsap/MotionPathHelper";
// import { GSDevTools } from "gsap/GSDevTools";

// gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin, MotionPathHelper);
gsap.registerPlugin(MotionPathPlugin);

//INIT
gsap.set("#topleft-path", {autoAlpha:0});


function firstAnimation(){
    
    let tl = gsap.timeline()

    tl.to("#c, #o-1, #o-2, #p", {visibility: "hidden"})
   // .to("#topleft-shape", {scale:0, duration:0.5, transformOrigin: "50% 50%",ease:"power3"})
    

    .to("#topleft-shape", {scale:3.5, duration:0.35, transformOrigin: "50% 50%",ease:"power3"})
    .to("#topright-shape", {scale:3.5, duration:0.35, transformOrigin: "50% 50%",ease:"power3"})
    .to("#bottomleft-shape", {scale:3.5, duration:0.35, transformOrigin: "50% 50%",ease:"power3"})
    .to("#bottomright-shape", {scale:3.5, duration:0.35, transformOrigin: "50% 50%",ease:"power3"})

    .to("#topleft-shape", {scale:4, duration:0.35, ease:"power3"})
    .to("#topright-shape", {scale:4, duration:0.35, ease:"power3"})
    .to("#bottomleft-shape", {scale:4, duration:0.35, ease:"power3"})
    .to("#bottomright-shape", {scale:4, duration:0.35, ease:"power3"})

    .to("#topleft-shape", {scale:3.5, duration:0.35, ease:"power3"})
    .to("#topright-shape", {scale:3.5, duration:0.35, ease:"power3"})
    .to("#bottomleft-shape", {scale:3.5, duration:0.35, ease:"power3"})
    .to("#bottomright-shape", {scale:3.5, duration:0.35, ease:"power3"})
    ;

    return tl;   
}

function spinAnimation(){

    let tl = gsap.timeline()
    tl.to("#topleft-shape", {duration:1.5, motionPath:{path:"#top-path", align:"#top-path", autorotate: true }, ease:"power3"}, 0)
    .to("#topright-shape", {duration:1.5, motionPath:{path:"#right-path", align:"#right-path", autorotate: true }, ease:"power3"}, 0)
    .to("#bottomright-shape", {duration:1.5, motionPath:{path:"#bottom-path", align:"#bottom-path", autorotate: true }, ease:"power3"}, 0)
    .to("#bottomleft-shape", {duration:1.5, motionPath:{path:"#left-path", align:"#left-path", autorotate: true }, ease:"power3"}, 0)
    ;
    
    return tl;
}

function spin2Animation(){

    let tl = gsap.timeline()
    tl.to("#bottomleft-shape", {duration:1.5, motionPath:{path:"#top-path", align:"#top-path", autorotate: true }, ease:"power3"}, 0)
    .to("#topleft-shape", {duration:1.5, motionPath:{path:"#right-path", align:"#right-path", autorotate: true }, ease:"power3"}, 0)
    .to("#topright-shape", {duration:1.5, motionPath:{path:"#bottom-path", align:"#bottom-path", autorotate: true }, ease:"power3"}, 0)
    .to("#bottomright-shape", {duration:1.5, motionPath:{path:"#left-path", align:"#left-path", autorotate: true }, ease:"power3"}, 0)
    ;
    
    return tl;
}

function spin3Animation(){

    let tl = gsap.timeline()
    tl.to("#bottomright-shape", {duration:1.5, motionPath:{path:"#top-path", align:"#top-path", autorotate: true }, ease:"power3"}, 0)
    .to("#bottomleft-shape", {duration:1.5, motionPath:{path:"#right-path", align:"#right-path", autorotate: true }, ease:"power3"}, 0)
    .to("#topleft-shape", {duration:1.5, motionPath:{path:"#bottom-path", align:"#bottom-path", autorotate: true }, ease:"power3"}, 0)
    .to("#topright-shape", {duration:1.5, motionPath:{path:"#left-path", align:"#left-path", autorotate: true }, ease:"power3"}, 0)
    ;
    
    return tl;
}

function secondAnimation(){

    let tl = gsap.timeline()
    tl.to("#topleft-shape", {scale:1, delay:0.5, duration:1.5, motionPath:{path:"#topleft-path", align:"#topleft-path", autorotate: true }, ease:"power3"}, 0)
    .to("#topright-shape", {scale:1, duration:1.5, motionPath:{path:"#topright-path", align:"#topright-path", autorotate: true }, ease:"power3"}, 0)
    .to("#bottomleft-shape", {scale:1, duration:1.5, motionPath:{path:"#bottomleft-path", align:"#bottomleft-path", autorotate: true }, ease:"power3"}, 0)
    .to("#bottomright-shape", {scale:1, duration:1.5, motionPath:{path:"#bottomright-path", align:"#bottomright-path", autorotate: true }, ease:"power3"}, 0)
    ;

    return tl;
}

function lettersAnimation(){

    let tl = gsap.timeline()
    tl.to("#topleft-shape, #topright-shape, #bottomleft-shape, #bottomright-shape", {visibility:"hidden"})
    .to("#c", {visibility:"visible"})
    .to("#o-1", {visibility:"visible"})
    .to("#o-2", {visibility:"visible"})
    .to("#p", {visibility:"visible"})
    // .to("#c, #o-1, #o-2, #p", {drawSVG:0}, {duration: 3, drawSVG:"100%"})
    ;

    return tl;

}


let mainTl = gsap.timeline();

mainTl.add(firstAnimation())

    .add(spinAnimation())
    .add(spin2Animation())
    .add(spin3Animation())
    .add(secondAnimation())
    .add(lettersAnimation())
    
;

//GSDevTools.create();

