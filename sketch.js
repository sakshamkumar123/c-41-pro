
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball = []
var person
var block
var thunder
function preload()
{
  person = loadImage("walk.png")
  thunder = loadImage("1.png")
}

function setup() {
	createCanvas(400, 800);


	engine = Engine.create();
	world = engine.world;

	block = new Ground(250,500,110)


	Engine.run(engine);
  
}


function draw() {
  background("black")

  image(person,30,340,400,500)

  if (frameCount%2===0){
    ball.push(new Ball(random(0,width),10,0.1))
  }
  for(var a= 0;a<ball.length;a++){
    ball[a].display();
  }
  if(frameCount>100 && frameCount<150 || frameCount>300 && frameCount<350 || frameCount>500 && frameCount<550  ){
    imageMode(CENTER)
    image(thunder,200,180,500,400)
  }


  drawSprites();
 
}



