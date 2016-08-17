var img;
var imgHeight = 40;
var imgWidth = 40;
var imgThere = false;
var bunsCurLocation = 0;
var bunsLocX; 
var bunsLocY;
var locations = [];
var molesSpots = [5, 7, 2, 3, 5,2, 1, 6, 8, 1, 0, 2, 5, 1, 3, 8, 4, 6, 1, 0, 3, 1];
var i = 0;
var mouseIsClicked = false;
var intervalID;
var intervalTime = 1500;
function preload() {
  img = loadImage("rabbit.jpg");
}

function windowResized(){
	  locations = [
    { x:(windowWidth/4), y: windowHeight/4 },
    { x:windowWidth/4, y: windowHeight/2 },
    { x:windowWidth/4, y: windowHeight*0.75}, 
	{ x:windowWidth/2, y:windowHeight/4 },
    { x:windowWidth/2, y:windowHeight/2}, 
	{ x:windowWidth/2, y:windowHeight*0.75 },
    { x:windowWidth*0.75, y:windowHeight/4}, 
	{ x:windowWidth*0.75, y:windowHeight/2 },
    { x:windowWidth*0.75, y:windowHeight*0.75}
];
resizeCanvas(windowWidth, windowHeight);
setBackground();
if (imgThere){
	imgThere = false;
	redraw();
}
	
}
function setup() {
  locations = [
    { x:(windowWidth/4), y: windowHeight/4 },
    { x:windowWidth/4, y: windowHeight/2 },
    { x:windowWidth/4, y: windowHeight*0.75}, 
	{ x:windowWidth/2, y:windowHeight/4 },
    { x:windowWidth/2, y:windowHeight/2}, 
	{ x:windowWidth/2, y:windowHeight*0.75 },
    { x:windowWidth*0.75, y:windowHeight/4}, 
	{ x:windowWidth*0.75, y:windowHeight/2 },
    { x:windowWidth*0.75, y:windowHeight*0.75}
];
	
  var c = createCanvas(windowWidth, windowHeight);
  setBackground();
  bunsCurLocation = molesSpots[i];
  bunsLocX = locations[bunsCurLocation].x - 20;
  bunsLocY = locations[bunsCurLocation].y - 40;
  noLoop();
  
  intervalID = setInterval(move, intervalTime);
}

function setBackground(){
	imgThere = false;
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


function draw() {
	//mouseIsClicked = false;
   bunsLocX = locations[bunsCurLocation].x - 20;
   bunsLocY = locations[bunsCurLocation].y - 40;
	if (!imgThere){
		image(img, bunsLocX, bunsLocY, imgWidth , imgHeight);
		imgThere = true;
	}
	else{
		
	}
}


function mouseClicked(){
	//mouseIsClicked = true;
	//console.log(mouseX + "   " + mouseY);
	console.log("here");
	//setBackground();
		
	if (imgThere && (mouseX >= bunsLocX) && (mouseX <= bunsLocX +imgWidth) && 
			(mouseY >= bunsLocY) && (mouseY <= imgHeight+ bunsLocY)){
		bunsCurLocation = molesSpots[(++i)%molesSpots.length];
		clearInterval(intervalID);
		intervalID = setInterval(move, intervalTime);
		
	}
	else if(mouseX < 0 || mouseY < 0 || mouseX > windowWidth || mouseY > windowHeight  ){
		//do nothing
	}
	else if (imgThere && !((mouseX >= bunsLocX) && (mouseX <= bunsLocX +imgWidth) && 
			(mouseY >= bunsLocY) && (mouseY <= imgHeight+ bunsLocY)) ){
		//
	}
	
}


function move() {
		imgThere = false;
		redraw();
		
		window.setTimeout(setBackground, intervalTime*0.666);
}