var gameState = 0;

 var boy , boyImg;
 var choc,chocImg;
 var mom , momImg;
 var edges;

function preload(){
  boyImg = loadImage ("boy.gif");  
  chocImg = loadImage("choc.png");
  momImg = loadImage("mom.webp");
}

function setup(){
   
   createCanvas(1200,600);
  
   edges = createEdgeSprites();
   
   boy = createSprite(100,450,20,50);
   boy.addImage(boyImg);
   boy.scale = 0.5;
   
   choc = createSprite(800,50,20,50);
   choc.addImage(chocImg);
   choc.scale = 0.4;
  
   mom = createSprite(800,200,20,50);
   mom.addImage(momImg);
   mom.scale = 0.5
   mom.velocityX = -3;

   

    
}

function draw(){
    background("white");
    if (keyDown("Up")){
       boy.y = boy.y-5;
    }
    
    if (keyDown("Down")){
        boy.y = boy.y+5;
     }
     if (keyDown("right")){
        boy.x = boy.x+5;
     }

     if (keyDown("left")){
        boy.x= boy.x-5;
     }
     mom.bounceOff(edges);
     boy.collide(edges);

     if(boy.isTouching(mom)){
        boy.destroy();
        textSize(34);
        text("YOU GOT CAUGHT",500,500);
       
     }

     if(boy.isTouching(choc)){
        choc.destroy();
        mom.destroy();
        textSize(34);
        text("Have fun Eating choclate,lets try to get some more!!",250,200)
     }

    drawSprites();
}
