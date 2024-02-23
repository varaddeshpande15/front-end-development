var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-10+"px"
    crsr.style.top = dets.y-10+"px"
    blur.style.left = dets.x-150+"px"
    blur.style.top = dets.y-150+"px"
})





gsap.to("#nav",{
    backgroundColor : "#000",
    height: "110px",
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        markers:false,
        start:"top-10%",
        end:"top -11%",
        scrub: 1,
    }
    // duration:0.5,
    // delay:1
})