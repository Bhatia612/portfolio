let onload = gsap.timeline(defaults = {
    delay: .5
})

function headerA() {
    onload.from("main", {
        y: "100%",
        duration: .5,
        opacity: 0,
        ease: "power1.inOut"
    })
        .from("header", {
            y: "-100%",
            opacity: 0,
            duartion: .8
        })
}

function buttonA() {

    gsap.from("#btn", {
        y: "-50%",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    })
    gsap.to("#btn", {
        scrollTrigger: {
            trigger: "#hero",
            scroller: "main",
            start: "-5% top",
            end: "bottom 80%",
            scrub: true
        },
        x: "-150%",
        opacity: 0,
        ease: "power4.inOut"
    })
}


function introA() {

    onload.from("#intro small:first-child", {
        duration: 1,
        delay: .3,
        x: "100%",
        opacity: 0,
        ease: "power4"
    }).from("#intro small:last-child", {
        duration: 1,
        x: "-100%",
        opacity: 0,
        ease: "power4"
    }, "<").from("#intro big", {
        rotation: -45,
        duration: 1,
        scale: 1.5,
        opacity: 0,
        ease: "elastic"
    }, "<.2").from("#about p", {
        scrollTrigger: {
            trigger: "#hero",
            scroller: "main",
            start: "-5% top",
            end: "bottom 50%",
            scrub: true
        },
        opacity: 0,
        y: "50%",
        ease: Power1,
        stagger: .2
    })

}

function skillsA() {
    gsap.from("#skills big", {
        scrollTrigger: {
            trigger: "#skills",
            scroller: "main",
            start: "-5% 20%",
            end: "60% 50%",
            scrub: true
        },
        x: "100%",
        opacity: 0,
        ease: "power4"
    })
}



headerA()
buttonA()
introA()
skillsA()

