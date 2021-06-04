class Monster{
    constructor(x,y,width,height){
        var options={
            
            restitution:0,
            friction:1,
            density:2
                    }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("images/Monster-01.png")
        World.add(world, this.body);
    }
    display(){
        
      
      
            imageMode(CENTER);
            fill("red")
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
            
           
    
}
}