let tar = document.querySelector("#hero")

tar.onmousemove = function (e) {

    let y = e.pageY - tar.offsetTop;
    let x = e.pageX - tar.offsetLeft;
    tar.style.setProperty("--x", x + 'px')
    tar.style.setProperty("--y", y + 'px')
}

let btn = document.querySelector("#btn")

btn.onmousemove = function (e) {

    let y = e.pageY - btn.offsetTop;
    let x = e.pageX - btn.offsetLeft;
    btn.style.setProperty("--x", x + 'px')
    btn.style.setProperty("--y", y + 'px')
}