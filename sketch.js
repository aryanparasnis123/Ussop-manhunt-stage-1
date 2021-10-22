var bg,bgImage,ussop,ussopImage,lucciImage,kakuImage,jabraImage,bluenoImage
function preload(){
	bgImage=loadImage("Bg.jpg");
	ussopImage=loadImage("ussop.png")
	lucciImage=loadImage("lucci.png")
	kakuImage=loadImage("kaku.png")
	bluenoImage=loadImage("blueno.png")
	jabraImage=loadImage("jabra.png")
}

function setup() {
	createCanvas(1200, 700);

bg=createSprite(600,350,1200,700)
	bg.addImage(bgImage);
bg.scale=1.4

ussop=createSprite(107,325,20,20)
ussop.addImage(ussopImage)
ussop.scale=0.2
	
  
}


function draw() {
  background(0);
  
  if(keyDown("DOWN_ARROW")){
	  ussop.y=ussop.y+15
  }

   
  if(keyDown("UP_ARROW")){
	ussop.y=ussop.y-15
}

  drawSprites();
  fill("black")
  text(mouseX+","+mouseY,mouseX,mouseY)
 
}



