class SlingShot{
    constructor(pointB){
        var options = {
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling=Constraint.create(options);
        World.add(world, this.sling);
    }

     fly(){
          this.sling.pointB = null;
      }

    display(){
     var posi=this.sling.position;   
     push();
     translate(posi.x,posi.y);
     strokeWeight(3);   
     pop();
       
       }
    }