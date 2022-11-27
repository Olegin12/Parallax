import {gsap} from "../libs/gsap/gsap.min";
import {ScrollTrigger} from "../libs/gsap/ScrollTrigger.min";
import {ScrollSmoother} from "../libs/gsap/ScrollSmoother.min";

window.addEventListener('scroll', e=> {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: 'content'
})


