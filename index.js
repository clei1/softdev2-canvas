var c, ctx, st, clear, toggle;

c = document.getElementById("slate");
ctx = c.getContext("2d");
st = true; //true is circle, false is square
clear = document.getElementById("clear");
toggle = document.getElementById("toggle");

ctx.beginPath();

var shape = function(){
    let x = event.offsetX; let y = event.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    if (st) {
	ctx.arc(x, y, 10, 0, 2 * Math.PI);
	ctx.fill();
    }
    else{
	ctx.fillRect(x, y, 10, 10);
    }
    ctx.moveTo(x, y); //so that lines start at circle's center
};

var tog = function(){
    st = !st;
};

var cl = function(){
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
};

c.addEventListener("click", shape);
toggle.addEventListener("click", tog);
clear.addEventListener("click", cl);

