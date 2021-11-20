var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function desenharRetangulos(){
    ctx.fillStyle = 'red';
    ctx.fillRect(300 - 60,0,60,60);

    ctx.fillStyle ='blue';
    ctx.fillRect(0,0,60,60);

    ctx.fillStyle ='cyan';
    ctx.fillRect(0,120,30,60);

    ctx.fillStyle ='cyan';
    ctx.fillRect(270,135,30,30);

    ctx.fillStyle ='red';
    ctx.fillRect(105,150,45,45);

    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,300-30,60,30);

    ctx.fillStyle = 'yellow';
    ctx.fillRect(0,300-60,30,60);

    ctx.fillStyle = 'black';
    ctx.fillRect(300-60,300-30,60,30);

    ctx.fillStyle = 'black';
    ctx.fillRect(300-30,300-60,30,60);
}
function desenharLinhas(){
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(150,150);
    ctx.strokeStyle = 'blue';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300,0);
    ctx.lineTo(150,150);
    ctx.strokeStyle = 'red';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0,150);
    ctx.lineTo(300,150);
    ctx.strokeStyle = 'green';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(150,150);
    ctx.lineTo(150,300);
    ctx.strokeStyle = 'gray';
    ctx.stroke();
}
function colocarTexto(){
    ctx.font = "20px Arial";
    ctx.fillText("Canvas", 117, 50);
}
function desenharArcos(){
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.arc(150,300,60,1 * Math.PI,1.5 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.arc(150,300,50,1.5 * Math.PI,2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.arc(150,150,80,1 * Math.PI,1.25 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.arc(150,150,60,1 * Math.PI,2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.arc(150,150,80,1.75 * Math.PI,2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.fillStyle = 'yellow';
    ctx.arc(75,235,15,0,2.0 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.fillStyle = 'yellow';
    ctx.arc(300-75,235,15,0,2.0 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'cyan';
    ctx.arc(150,115,15,0,2.0 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.fillStyle = 'cyan';
    ctx.arc(150,300,30,1 * Math.PI,2.0 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

desenharRetangulos()
desenharRetangulos()
colocarTexto()
desenharLinhas()
desenharArcos()