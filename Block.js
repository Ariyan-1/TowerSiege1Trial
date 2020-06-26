class Block {
    constructor() {
      
      this.width = width
      this.height = height
      this.block=Bodies.rectangle(x,y,width,height);
    
    World.add(world,this.block)
    }
    
    display(){
      var pose=this.body.position;
      push();
      translate(pose.x, pose.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };