class Ground {
    constructor(x, y,radius) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.width = width;
      this.height = height;
      this.raduis = radius;
      World.add(world, this.body);
    }
  }