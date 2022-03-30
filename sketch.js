var Player,PlayerImg,Player_Right,Player_Left;
var Ground;
var Ground1;
var Cloud,Cloud1,Cloud2,Cloud3,Cloud4,Cloud5,CloudsImg,Clouds1Img;
var backGroundImg;
var boundary;
var middleBoundary;
var Alien,Alien_Animation;
var Alien1;
var Life1,Life2,Life3,LifeImages;

function preload() {
   PlayerImg = loadAnimation("PLAYER.png");
   CloudsImg = loadImage("Cloud.png");
   Clouds1Img = loadImage("Cloud1.png"); 
   backGroundImg = loadImage("BackGround.png");
   Player_Left = loadAnimation("LeftMove.png");
   Player_Right = loadAnimation("Player2Face.png");
   Alien_Animation = loadAnimation("Alien1.png","Alien2.png");
   LifeImages = loadImage("Heart.png");
  }

function setup() {
  createCanvas(windowWidth,windowHeight);

  Player = createSprite(width/9, height/1.4);
  Player.addAnimation("Stoped",PlayerImg);
  Player.addAnimation("Player2",Player_Right);
  Player.addAnimation("LeftMove",Player_Left);
  Player.scale= 0.5;

  Alien = createSprite(width/1.3, height/1.4);
  Alien.addAnimation("Moving",Alien_Animation);
  Alien.scale = 0.4;

  Alien1 = createSprite(Alien.x, height/1,4);
  Alien1.addAnimation("Moving",Alien_Animation);
  Alien1.scale = 0.4;

  Ground = createSprite(width/2, height/1.2, 1500, 15);
  Ground.shapeColor = "green";

  Ground1 = createSprite(width/2, height/1, 1500, 210);
  Ground1.shapeColor = "brown";



  Cloud = createSprite(width/9,height/9.4);
  Cloud.addImage(CloudsImg);
  Cloud.scale = 0.5;

  Cloud1 = createSprite(width/2,height/9.4);
  Cloud1.addImage(CloudsImg);
  Cloud1.scale = 0.5;

  Cloud2 = createSprite(width/1.2,height/9.4);
  Cloud2.addImage(CloudsImg);
  Cloud2.scale = 0.5;
 
  Life1 = createSprite(width/1.02,height/7);
  Life1.addImage(LifeImages);
  Life1.scale = 0.5;

  Life2 = createSprite(width/1.1,height/7);
  Life2.addImage(LifeImages);
  Life2.scale = 0.5;

  Life3 = createSprite(width/1.2,height/7);
  Life3.addImage(LifeImages);
  Life3.scale = 0.5;

  boundary = createSprite(width/1, height/2, 10,1200 )
  middleBoundary = createSprite(width/2, height/2, 10,1200 )
 
  Alien1.destroy();
}

function draw() {
  background(backGroundImg);
  drawSprites();


  boundary.visible = false;
  middleBoundary.visible = false;


  Player.collide(Ground);
  Alien.collide(Ground);
  Alien1.collide(Ground);

  Player.setCollider("circle", 50, 0, 150);
  Player.debug = false;

  Alien.setCollider("circle", 30, 0, 100);
  Alien.debug = false;

  Alien1.setCollider("circle", 30, 0, 100);
  Alien1.debug = false;

  if(keyDown("right")) {
    Player.x = Player.x + 8;
    Player.changeAnimation("Player2",Player_Right);
  }

  else if(keyDown != "right"){
      Player.changeAnimation("Stoped",PlayerImg);
  }

  else if(keyDown != "left"){
    Player.changeAnimation("Stoped",PlayerImg);
  }

  if(keyDown("left")) {
    Player.x = Player.x - 8;
    Player.changeAnimation("LeftMove",Player_Left);
  }

  if(keyDown("space")&& Player.y >= 280) {
    Player.velocityY = -13;
  }

  if(Player.isTouching(boundary)) {
    Player.velocityX = 0;
    boundary.destroy();
    middleBoundary.destroy();
    Alien.destroy();
    Alien1.destroy();
    Player.destroy();
  }

  if(Alien1.isTouching(boundary)) {
    Alien1.destroy();
    Alien1.velocityX = 0;
    Alien = createSprite(Alien1.x, height/1.4);
    Alien.addAnimation("Moving",Alien_Animation);
    Alien.scale = 0.4;
  }

  if(Alien.isTouching(middleBoundary)) {
    Alien.velocityX = 0;
    Alien.destroy();
    Alien1 = createSprite(Alien.x, height/1.4);
    Alien1.addAnimation("Moving",Alien_Animation);
  }

  if(Player.isTouching(Alien)) {
     Life3.destroy();
  }

  if(Player.isTouching(Alien1)) {
   Life2.destroy();
   Life3.destroy();
  }

  fill("black");
  textSize(40);
  text("Press arrows key For Move and press space for jump", width/6, height/8)
  Player.velocityY = Player.velocityY + 5;
  Alien.velocityY = Alien.velocityY + 5;
  Alien.velocityX = Alien.velocityX -0.2;
  Alien1.velocityY = Alien1.velocityY + 5;
  Alien1.velocityX = Alien1.velocityX + 0.2;
}

function RightMove() {
  Player.velocityX = 6;
  Player.changeAnimation("Player2",Player_Right);
}

function LeftMove(){
  Player.velocityX = -6;
  Player.changeAnimation("LeftMove", Player_Left);
}

function StopMove() {
  Player.velocityX = 0;
  Player.changeAnimation("Stoped",PlayerImg);
}