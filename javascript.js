function randomColor() {
    var num = Math.floor(Math.random() * 45) + 190;
    document.getElementById("BG").style.backgroundColor = "rgb(0,255,"+num+")";
}

document.getElementById("BG").addEventListener("click",randomColor);
randomColor();

