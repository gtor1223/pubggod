var pu, b, g;

function setup() { 
  createCanvas(720, 400);
	background(127)
	pu = random(255);
	b = random(255);
	g = random(255);
} 

function mouseDragged() { 
	
	strokeWeight(2);
	stroke(pu, b, g);
	fill(pu, b, g,120);
ellipse(mouseX, mouseY, 150, 150);	
}

function mousePressed() {
	
	pu = random(255);
	b = random(255);
	g = random(255);
	
}



function mouseWheel() {
	background(127)
}
