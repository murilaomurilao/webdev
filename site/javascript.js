function randomColor() {
    var num = Math.floor(Math.random() * 75) + 180;
    document.body.style.backgroundColor = rgb(0,255,num);
}

botaoGeral.addEventListener("click",randomColor);
