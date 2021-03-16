class HOUSE{
    constructor(x,y,width,height){
        var options={
        isStatic:true,
        restitution:0,
        friction:0
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;  
        this.image=loadImage("Plucking mangoes/8.jpg")
    }

    display(){
   var housepos=this.body.position.x;
   translate(housepos.x,housepos.y);
   rectMode(CENTER);
   image(this.image,200,100,700,200,10);
    
    }
}