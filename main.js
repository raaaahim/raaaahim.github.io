var themeType = 0;

const body = document.getElementById("body");
const themeBtn = document.getElementById("theme");


function theme() {
    themeType++;   

    window.localStorage.setItem("themePref", themeType);
    
    if (window.localStorage.getItem("themePref") % 2 == 1) {
        body.style.color = "white";
        body.style.background = "black";
    } else {
        body.style.color = "black";
        body.style.background = "white";
    }
}

