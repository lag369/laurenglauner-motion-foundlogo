import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

//INIT
gsap.set("#tl-shape", {scale:0.25});
gsap.set("#topleft-path", {autoAlpha:0});


function shapeAnimation(){
    
    let tl = gsap.timeline();
    tl.from("#tl-shape", {duration:0.5, ease:"none"})
        .to("#tl-shape", {duration:0.5, scale:0.5, ease:"none"})

}


let mainTl = gsap.timeline();
mainTl.add(shapeAnimation())

;


GSDevTools.create();