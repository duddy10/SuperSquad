// The ground object
function Ground(){
  // x start
  this.x = -2*width;
  // x length
  this.x2 = 4 * width;
  // y should be 15 above screen bottom
  this.y = (1-0.15) * height;
  this.y2 = height

  // function to draw the ground (Could implement multiple ground objects if we want falling)
  this.show = function(){
    fill(255,20,147);
    rect(this.x, this.y, this.x2, this.y2);
  }

  // function to move the ground according to the player, takes a velocity input
  this.move = function(velocity){
    this.x += velocity;
  }


}
