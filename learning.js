var img;
var imgThere = false;
function preload() {
  img = loadImage("rabbit.jpg");
}

function setup() {
  var c = createCanvas(windowWidth, windowHeight);
  background(150, 200, 130);
  noLoop();
}

function defaultSetup(){
	
	var g = createCanvas(windowWidth, windowHeight);
	background(150, 200, 130);
	redraw();
}

function draw() {

    ellipse( 140, 130, 40, 30);
	if (!imgThere){
		image(img, 120, 90, 50, 50);
		imgThere = true;
	}
	else{
		imgThere = false;
	}
	ellipse( 240, 130, 40, 30);
	ellipse( 340, 130, 40, 30);
	ellipse( 140, 230, 40, 30);
	ellipse( 140, 330, 40, 30);
	ellipse( 240, 230, 40, 30);
	ellipse( 340, 230, 40, 30);
	ellipse( 340, 330, 40, 30);
	ellipse( 240, 330, 40, 30);
	
	
}


function mouseClicked(){
	if ((mouseX >= 120) && (mouseX <= 120 +50) && 
			(mouseY >= 90) && (mouseY <= 50+ 90))
		defaultSetup();
	
	else{
		
	}
	
}
