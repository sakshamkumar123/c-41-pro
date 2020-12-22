class Ball {
  constructor(x, y, radius) {
    var options = {
        isStatic:false,
        "density":10,
        "friction":0.1
        
    }
    this.body = Bodies.circle(x, y, radius, options);
   
    this.radius=radius;
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("blue");
    circle(0, 0, 6);
    pop();
  }
};