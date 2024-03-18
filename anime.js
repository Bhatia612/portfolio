let onload = gsap.timeline(defaults = {
    delay: .5
})


onload.from("main", {
    y: "100%",
    ease: "power1",
})
    .from("header", {
        x: "-100%",
        opacity: 0,
        ease: "power1.inOut",

    })