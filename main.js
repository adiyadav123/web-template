let link = document.getElementById("ul")
let button = document.getElementById("btn")
let nav = document.getElementById("nav")

function show(){
    link.style.marginTop  = "0px";
    button.setAttribute("class", "fa-solid fa-xmark");
    button.setAttribute("id", "cross");
    var next = document.getElementById("cross")
    next.setAttribute("onclick", "hide()")

}

function hide(){
    link.style.marginTop = "-195px";
    button.setAttribute("onclick", "show()")
    button.setAttribute("class", "fa-solid fa-bars")
}