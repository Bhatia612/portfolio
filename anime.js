let animate = gsap.timeline(defaults = {
    delay: .5
})

function onLoadA() {
    animate.from("main", {
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
    animate.from(".fade", {
        scrollTrigger: {
            trigger: "#intro",
            scroller: "main",
            start: "top 5%%",
            end: "bottom 5%",
            scrub: true
        },
        opacity: 0,
        y: "100%",
        ease: "power4.inOut",
        stagger: .2
    })
}

function linksA() {
    animate.from("#btn", {
        y: "-150%",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    }).to("#btn", {
        scrollTrigger: {
            trigger: "#intro",
            scroller: "main",
            start: "top 5%",
            end: "bottom 20%",
            scrub: true
        },
        opacity: 0,
        x: "100%",
        ease: "power4.inOut",
        stagger: .2
    })
}

function skillsA() {
    animate.from("#skills h1", {
        ScrollTrigger: {
            trigger: "#intro",
            scroller: "main",
            start: "bottom 50%",
            end: "bottom 20%",
        },
        opacity: 0,
        y: "100%"
    })

}

function gsapA() {
    onLoadA()
    paraRevealA()
    linksA()
    skillsA()
}

gsapA()