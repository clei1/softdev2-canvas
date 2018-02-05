var c, ctx, st, clear, toggle;

c = document.getElementById("slate");
ctx = c.getContext("2d");
st = true; //true is circle, false is square
clear = document.getElementById("clear");
toggle = document.getElementById("toggle");

var shape = function(){
    ctx.beginPath();
    let x = event.offsetX;
    let y = event.offsetY;
    if (st) {
	ctx.arc(x, y, 10, 0, 2 * Math.PI);
    }
    else{
	ctx.fillRect(x, y, 10, 10);
    }
    ctx.fill();
}

var tog = function(){
    st = !st;
}

var cl = function(){
    ctx.clearRect(0, 0, 500, 500);
}

c.addEventListener("click", shape);
toggle.addEventListener("click", tog);
clear.addEventListener("click", cl);

