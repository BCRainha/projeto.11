var rua, homem
var ruaImg, homemImg
var barreira1, barreira2
function preload(){
  //imagens pré-carregadas
  ruaImg = loadImage("path.png")
  homemImg = loadImage("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  rua = createSprite (200,400)
  rua.addImage(ruaImg)
  rua.velocityY = 5

  homem = createSprite (200,350)
  homem.addImage (homemImg)
  homem.scale = 0.08
  homem.velocityX = 2

  barreira1 = createSprite (30,300,50,400)
  barreira1.visible = false
  barreira2 = createSprite (380,300,50,400)
  barreira2.visible = false

  
  }

function draw() { 
  background(0);
  drawSprites()
  if (rua.y > 400)
  rua.y = height / 4

  homem.x = mouseX

  homem.collide(barreira1)
  homem.collide(barreira2)

  
}
