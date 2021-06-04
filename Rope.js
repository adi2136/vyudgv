class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    Launch(bodyA){
        this.throw.bodyA=null;
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        
       
           
           
     
    
        
    }
    
}