var us, attack;
var score = 0;
//Variable para agregar enemigos

var us_Img;
var exp_Img;
var attack_Img;
var background_Img;

var attack_group;

function preload(){
  /*trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  groundImage = loadImage("ground2.png");*/

  us_Img = loadAnimation("US.png","US 2.png","US 3.png","US  4.png",
  "US 5.png","US 6.png","US 7.png","US 8.png","US 9.png","US 10.png",
  "US 11.png","US 12.png","US 13.png","US 14.png","US 15.png","US 16.png",
  "US 17.png","US 18.png","US 19.png","US 20.png","US 21.png","US 22.png", "US 23.png");
 
  exp_Img = loadAnimation("Explosion 1.png", "Explosion 2.png", "Explosion 3.png", "Explosion 4.png",
  "Explosion 5.png", "Explosion 6.png");

  attack_Img = loadAnimation("US Fire 1.png","US Fire 2.png");

  background_Img = loadImage("Space Background.png");
}

function setup() {
  createCanvas(1500, 700);
  us = createSprite(120,height-420);
  us.scale = 0.5;
  //Sólo en addAnimation, se agrega una etiqueta
  us.addAnimation("Flying", us_Img);

  us_2 = createSprite(190,height-420);
  us_2.scale = 0.5;
  //Sólo en addAnimation, se agrega una etiqueta
  us_2.addAnimation("Flying", us_Img);

  attack_group = new Group();
}

function attackF(){
  if(frameCount % 6 == 0){
    attack = createSprite(width/2,height/2);
    attack.addAnimation("Laser", attack_Img);
    attack.x = us.x;
    attack.y = us.y;
    attack.scale = .4;
    attack.velocityY = -5;
    attack_group.add(attack);

    //Parte para agregar el sonido del ataque
  }
}

function draw() {
  background(background_Img);

  textSize(30);
  text("Puntuación: " + score, width-800, 30);
  score = score + Math.round(getFrameRate()/60);

  edges = createEdgeSprites();
  us.collide(edges[0]);
  us.collide(edges[1]);
  us.collide(edges[2]);
  us.collide(edges[3]);

  if(keyDown("X")){
    attackF();
  }

  if(keyDown("UP_ARROW")){
    //us.velocityY = -10;
    us.y = us.y - 10;
  }

  if(keyDown("DOWN_ARROW")){
    //us.velocityY = 10;
    us.y = us.y + 10;
  }

  if(keyDown("RIGHT_ARROW")){
    //us.velocityY = -10;
    us.x = us.x + 10;
  }

  if(keyDown("LEFT_ARROW")){
    //us.velocityY = 10;
    us.x = us.x - 10;
  }

  //Código para agregar gravedad
  //us.velocityY = us.velocityY + 0.8;

  drawSprites();
}

