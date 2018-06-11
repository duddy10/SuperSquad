let canvas,
  ground,
  player,
  height = window.innerHeight,
  width = window.innerWidth;

// Initializing of variables
function setup(){
  canvas = createCanvas(width, height);
  background(0,0,0);
  ground = new Ground();
  player = new Player();
}

// Endles loop
function draw(){
  background(0,0,0);
  ground.show();
  playerAct();
}


function keyPressed(){
  console.log(keyCode);
}






// function to handle resizing
window.onresize = onResize;
function onResize(){
  height = window.innerHeight;
  width = window.innerWidth;
}

function playerAct(){
  player.show();
  player.move(ground.y);
}
