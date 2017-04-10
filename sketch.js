var col1 = '#f9a851';
var col2 = '#0aaa87';
var col3 = '#e55f53'
var side = 30;


function setup(){
	createCanvas(700,700);
	
	
}

function draw(){
	//background
	background(150,200,200);
		
	//mouseIsPressed
	if (mouseIsPressed){
		side=side+1
	//new ellipse
		noStroke();
		fill(col1);
		ellipse (-mouseX+width,-mouseY+height, side, side);
	//new rectangle
		fill(col2);
		rect(mouseX-side/2, mouseY-side/2, side, side);
	} else {
    //ellipse
		noStroke();
		fill(col1);
		ellipse(mouseX, mouseY, side, side);
	//rectangle
		fill(col2);
		rect (-mouseX+width-side/2,-mouseY+height-side/2, side, side);
	}
	//button
	if (keyIsPressed){
		side=30;
	}
}