var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rect = 0
var x_mouse = 0
var y_mouse = 0
addEventListener('mousemove', function(evento){
    rect = canvas.getBoundingClientRect();
    x_mouse = evento.clientX - rect.left;
    y_mouse = evento.clientY - rect.top;
})
let ret1 = {
    x: 0,
    y: 0,
    largura: 30,
    altura: 30,
    cor: 'red'
}
function desenharRetangulos(){
    ctx.fillStyle = 'red';
    ctx.fillRect(ret1.x, ret1.y , ret1.altura, ret1.largura);
}
function seguir(){
    ctx.clearRect(0,0, canvas.width, canvas.height)

    ctx.fillStyle = ret1.cor
    if(x_mouse < 15){
        x_mouse = 15
    }
    else if(x_mouse > 285){
        x_mouse = 285
    }
    if (y_mouse < 15){
        y_mouse = 15
    }
    else if (y_mouse > 285){
        y_mouse = 285
    }
    ctx.fillRect(x_mouse - 15, y_mouse - 15, ret1.largura, ret1.altura)

    requestAnimationFrame(seguir)
}

desenharRetangulos()
seguir()