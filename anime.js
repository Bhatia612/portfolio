let onload = gsap.timeline(defaults = {
    delay: .5
})

function onLoadA() {
    onload.from("main", {
        x: "100%",
        ease: "power4.inOut",
        duration: 1
    }).from("header", {
        y: "-100%",
        opacity: 0,
        ease: "power1.inOut",
    }).from("#intro h2:first-child", {
        x: "-100%",
        opacity: 0,
        ease: "power3.inOut",
    }).from("#intro h2:last-child", {
        x: "100%",
        opacity: 0,
        ease: "power3.inOut",
    }, "<").from("#intro h1", {
        opacity: 0,
        rotation: -45,
        scale: 1.5,
        ease: "elastic",
        duration: 1.5
    }, '<-.5')
}

function paraRevealA() {
    onload.from(".fade", {
        scrollTrigger: {
            trigger: "#intro",
            scroller: "main",
            start: "top 10%",
            end: "bottom 5%",
            scrub: true
        },
        opacity: 0,
        y: "100%",
        ease: "power4.inOut",
        duration: 1,
        stagger: .2
    })
}

function linksA() {
    onload.to("button", {
        scrollTrigger: {
            trigger: "#intro",
            scroller: "main",
            start: "top 10%",
            end: "bottom 30%",
            scrub: true
        },
        opacity: 0,
        x: "100%",
        ease: "power4.inOut",
        stagger: .2
    })
}


function gsapA() {
    onLoadA()
    paraRevealA()
    linksA()
}

gsapA()