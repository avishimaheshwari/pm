class MANGO{
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
        this.image=loadImage("Plucking mangoes/mango.png")
    }

    display(){
   var mangopos=this.body.position.x;
   translate(mangopos.x,mangopos.y);
   rectMode(CENTER);
   image(this.image,600,450,30,30);
   image(this.image,570,470,30,30);
   image(this.image,570,440,30,30);
   image(this.image,530,470,30,30);
   image(this.image,700,470,30,30);
   image(this.image,650,470,30,30);
   image(this.image,600,500,30,30);
    
    }
}