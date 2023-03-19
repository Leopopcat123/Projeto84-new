img_width = 300;
img_height = 100;
canvas = document.getElementById('myCanvas');
ctx = canvasgetContext("2d");
var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{	

		alphabethey();
		document.getElementById("d1").innerHTML="Você pressionou uma tecla do alfabeto";
		console.log("alphabet key");

	}

		//Escreva um código para verificar o tipo de tecla pressionada

	
		else {

		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{

	img_image="alfabeto.png";

	add()
	//envie as imagens com suas respectivas mensagens. 

}
function numberkey()
{
	img_image="número.png";
	add()
}
function arrowkey()
{
	img_image="direcional.png";
	add()
}
function specialkey()
{
	img_image="especial.png"
}
function otherkey()
{
	img_image="outras.png";
	add();
}