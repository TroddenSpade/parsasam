function Star() {
    this.time = random(0,25);
    this.x = random(width);
    this.y = random(height/3);

    this.update = function() {
      this.time += 0.1;
      if(this.time>=25){
        this.x = random(width);
        this.y = random(height/3);
        this.time = 0;
      }
    }
  
    this.show = function() {
      stroke(255,255,255);
      ellipse(this.x, this.y, 0.5, 0.5);
    }
  }