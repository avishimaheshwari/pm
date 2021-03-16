class Chain{
    constructor(bodyA, pointB){
        var options = {
            isStatic:false,
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
   
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB=pointB
    }
     attach(){
        this.chain.bodyA=Stone.body;
      }
      fly(){
        this.chain.bodyA = null;
      }

  

     display(){
        if(this.chain.bodyA != null){
            stroke("white"); 
            strokeWeight(4); 
            var pointA=this.chain.bodyA.position;
            var pointB = this.chain.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
        }
    }
    
    