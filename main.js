var type = 0;

var body = document.getElementById("body");
var themeBtn = document.getElementById("theme");

function theme() {
    type++;   
    
    if (type % 2 == 1) {
        body.style.color = "white";
        body.style.background = "black";
        themeBtn.innerHTML = "dark";
    } else {
        body.style.color = "black";
        body.style.background = "white";
        themeBtn.innerHTML = "light";
    }
}

