function setup() 
{
  createCanvas (windowWidth, windowHeight);
  frameRate(1);
  colorMode(RGB, 255, 255, 255, 100);
}


function draw() 
{
	print(frameRate());
	
  background( random(0, 255), random(0, 255), random(0, 255) );
  
  //Olá lol
  fill (250);
  stroke (0, 0, 0);
  strokeWeight (30);
  rectMode(CENTER);
  noFill();
  rect (width/2, height/2, 250, 250);
  
  strokeWeight(10);
  fill (250, 0, 0);
  ellipse (width/2, height/2, 200, random(20,500));
  ellipseMode (CORNER);
  
  strokeWeight(10);
  line(width/2, 0, width/2, height);
  
  strokeWeight(100);
  point(width/2, height/2);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}