class Ball {
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Images/ball.gif");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    
    
    rotate(angle);
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);
    
  }
}

 