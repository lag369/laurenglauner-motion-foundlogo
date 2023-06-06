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
    tl.to("#topleft-shape", {scale:0, duration:0.5, ease:"power3"})

    .to("#topleft-shape", {scale:3.5, duration:0.5, ease:"power3"})
    .to("#topright-shape", {scale:3.5, duration:0.5, ease:"power3"})
    .to("#bottomleft-shape", {scale:3.5, duration:0.5, ease:"power3"})
    .to("#bottomright-shape", {scale:3.5, duration:0.5, ease:"power3"})

    .to("#topleft-shape", {scale:4, duration:0.5, ease:"power3"})
    .to("#topright-shape", {scale:4, duration:0.5, ease:"power3"})
    .to("#bottomleft-shape", {scale:4, duration:0.5, ease:"power3"})
    .to("#bottomright-shape", {scale:4, duration:0.5, ease:"power3"})

    .to("#topleft-shape", {scale:3.5, duration:0.5, ease:"power3"})
    .to("#topright-shape", {scale:3.5, duration:0.5, ease:"power3"})
    .to("#bottomleft-shape", {scale:3.5, duration:0.5, ease:"power3"})
    .to("#bottomright-shape", {scale:3.5, duration:0.5, ease:"power3"})

    .to("#topleft-shape", {scale:2.5, duration:0.5, ease:"power3"})
    .to("#topright-shape", {scale:2.5, duration:0.5, ease:"power3"})
    .to("#bottomleft-shape", {scale:2.5, duration:0.5, ease:"power3"})
    .to("#bottomright-shape", {scale:2.5, duration:0.5, ease:"power3"})
    ;

    return tl;   
}

function secondAnimation(){

    let tl = gsap.timeline()
    tl.to("#topleft-shape", {scale:1, delay:9, duration:2, motionPath:{path:"#topleft-path", align:"#topleft-path", autorotate: true }, ease:"power3"})
    .to("#topright-shape", {scale:1, duration:2, motionPath:{path:"#topright-path", align:"#topright-path", autorotate: true }, ease:"power3"})
    .to("#bottomleft-shape", {scale:1, duration:2, motionPath:{path:"#bottomleft-path", align:"#bottomleft-path", autorotate: true }, ease:"power3"})
    .to("#bottomright-shape", {scale:1, duration:2, motionPath:{path:"#bottomright-path", align:"#bottomright-path", autorotate: true }, ease:"power3"})
    ;

    return tl;
}

function lettersAnimation(){

    let tl = gsap.timeline()
    tl.to("#coop-logo", {delay:13})
}


let mainTl = gsap.timeline();
mainTl.add(firstAnimation())
    .add(secondAnimation())
    .add(lettersAnimation())

;

//GSDevTools.create();

    // not right maybe usable??

    // .from("#topright-shape", {scale:0, duration:0.25, ease:"none"})
    // .from("#bottomleft-shape", {scale:0, duration:0.25, ease:"none"})
    // .from("#bottomright-shape", {scale:0, duration:0.25, ease:"none"})

    // .from("#topleft-shape", {scale:2.5, duration:0.75, ease:"power3"})
    // .from("#topright-shape", {scale:1, duration:0.75, ease:"power3"})

    // .from("#topleft-shape", {scale:3, duration:0.75, ease:"power3"})
    // .from("#topright-shape", {scale:2, duration:0.75, ease:"power3"})

    // .from("#topleft-shape", {scale:3.5, duration:0.75, ease:"power3"})
    // .from("#topright-shape", {scale:2.5, duration:0.75, ease:"power3"})
    // .from("#bottomleft-shape", {scale:1, duration:0.75, ease:"power3"})

    // .from("#topleft-shape", {scale:3, duration:0.75, ease:"power3"})
    // .from("#topright-shape", {scale:2.5, duration:0.75, ease:"power3"})
    // .from("#bottomleft-shape", {scale:2, duration:0.75, ease:"power3"})
    
    // .from("#topleft-shape", {scale:2.5, duration:0.75, ease:"power3"})
    // .from("#topright-shape", {scale:3, duration:0.75, ease:"power3"})
    // .from("#bottomleft-shape", {scale:2.5, duration:0.75, ease:"power3"})
    // .from("#bottomright-shape", {scale:1, duration:0.75, ease:"power3"})

    // .from("#topleft-shape", {scale:2.5, duration:0.75, ease:"power3"})
    // .from("#topright-shape", {scale:3, duration:0.75, ease:"power3"})
    // .from("#bottomleft-shape", {scale:3, duration:0.75, ease:"power3"})
    // .from("#bottomright-shape", {scale:2, duration:0.75, ease:"power3"})

    // .from("#topleft-shape", {scale:2.5, duration:0.75, ease:"power3"})
    // .from("#topright-shape", {scale:2.5, duration:0.75, ease:"power3"})
    // .from("#bottomleft-shape", {scale:3.5, duration:0.75, ease:"power3"})
    // .from("#bottomright-shape", {scale:2.5, duration:0.75, ease:"power3"})

    // .from("#bottomleft-shape", {scale:2.5, duration:0.75, ease:"power3"})
    // .from("#bottomright-shape", {scale:3, duration:0.75, ease:"power3"})

    // .from("#bottomright-shape", {scale:3, duration:0.75, ease:"power3"})
    // .from("#bottomright-shape", {scale:2.5, duration:0.75, ease:"power3"})

    // .from("#topleft-shape", {scale:2, duration:0.75, ease:"power3"})
    // .from("#topright-shape", {scale:2, duration:0.75, ease:"power3"})
    // .from("#bottomleft-shape", {scale:2, duration:0.75, ease:"power3"})
    // .from("#bottomright-shape", {scale:2, duration:0.75, ease:"power3"})