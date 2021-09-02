var hamb = document.querySelector(".hamb")
var close = document.querySelector(".close")
var navMob = document.querySelector(".navtab")

hamb.onclick = () => {
    navMob.classList.add("show")
    hamb.classList.add("close")
    close.classList.add("show")
}

close.onclick = () => {
    navMob.classList.remove("show")
    hamb.classList.remove("close")
    close.classList.remove("show")
}