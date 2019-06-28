function Line(i) {
  this.x = 0;
  this.y = height / 2;
  this.y = (height * 548) / 1080;
  let speed = -i*(0.3);

  this.update = function() {
    speed += (0.1);
    if(speed>=0){
      this.y = this.y + speed;
    }
    if (this.y >= height) {
      this.y = (height * 548) / 1080;
      speed = 0;
    }
  };

  this.show = function() {
    if(speed>=0){
      fill(255, 0, 0);
      line(this.x, this.y, width, this.y);
    }
  };
}
