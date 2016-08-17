var img;
var imgHeight = 40;
var imgWidth = 40;
var imgThere = false;
var bunsCurLocation = 0;
var bunsLocX; 
var bunsLocY;
var locations = [
    { x:140,y: 130 },
    { x:140, y: 230 },
    { x:140, y: 330}, 
	{ x:240, y:130 },
    { x:240, y:230}, 
	{ x:240, y:330 },
    { x:340, y:130}, 
	{ x:340, y:230 },
    { x:340, y:330}
];

function preload() {
  img = loadImage("rabbit.jpg");
}

function setup() {
  var c = createCanvas(windowWidth, windowHeight);
  setBackground();
  
  bunsLocX = locations[bunsCurLocation].x - 20;
  bunsLocY = locations[bunsCurLocation].y - 40;
  noLoop();
}

function setBackground(){
	clear();
	background(150, 200, 130);
	ellipse( locations[0].x, locations[0].y, 40, 30);
	ellipse( locations[1].x, locations[1].y, 40, 30);
	ellipse( locations[2].x, locations[2].y, 40, 30);
	ellipse( locations[3].x, locations[3].y, 40, 30);
	ellipse( locations[4].x, locations[4].y, 40, 30);
	ellipse( locations[5].x, locations[5].y, 40, 30);
	ellipse( locations[6].x, locations[6].y, 40, 30);
	ellipse( locations[7].x, locations[7].y, 40, 30);
	ellipse( locations[8].x, locations[8].y, 40, 30);
}
function defaultSetup(){
	
	var g = createCanvas(windowWidth, windowHeight);
	background(150, 200, 130);
	redraw();
}

function draw() {

    
  
	if (!imgThere){
		image(img, bunsLocX, bunsLocY, imgWidth , imgHeight);
		imgThere = true;
	}
	else{
		//window.setTimeout(makeDisappearAgain(), 3000);
		//imgThere = false;
	}
	
		
	
}


function mouseClicked(){
	if (imgThere && (mouseX >= bunsLocX) && (mouseX <= bunsLocX +imgWidth) && 
			(mouseY >= bunsLocY) && (mouseY <= imgHeight+ bunsLocY)){
		bunsCurLocation = (bunsCurLocation+1)%9;
		bunsLocX = locations[bunsCurLocation].x - 20;
		bunsLocY = locations[bunsCurLocation].y - 40;
		setBackground();
		imgThere = false;
		window.setTimeout(redraw, 2000);
		
		
		//defaultSetup();
		
	}
	else if (imgThere && !((mouseX >= bunsLocX) && (mouseX <= bunsLocX +imgWidth) && 
			(mouseY >= bunsLocY) && (mouseY <= imgHeight+ bunsLocY)) ){
		setBackground();
		imgThere = false;
		window.setTimeout(redraw, 2000);
	}
	
}

function makeDisappearAgain(){
	draw();
	imgThere = false;
	
}
