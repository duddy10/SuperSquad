function Player(){
  this.x = width/5;
  this.y = height/2;
  this.width = 60;
  this.height = 120;
  this.xv = 5;
  this.yv = 0;
  this.ya = 1;
  this.jumpForce = -30;

  this.show = function(){
    fill(124,252,0);
    rect(this.x, this.y, this.width, this.height);
  }

  this.move = function(groundY){

    // LATTERLIG LØSNING SE SENERE
    if(keyIsDown(32) && (this.y+this.height >= groundY)){
      this.yv = this.jumpForce
    } else if(this.y+this.height < groundY){
      this.yv += this.ya;
    } else if(this.y+this.height >= groundY){
      this.yv = 0;
      this.y -= 1;
    }
    this.y += this.yv;

    // handle left and right keypress
    if(keyIsDown(37) || keyIsDown(65)){
      this.x -= this.xv;
    } else if(keyIsDown(39) || keyIsDown(68)){
      this.x += this.xv;
    }
  }
}
