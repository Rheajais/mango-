class Boy{
    constructor(x,y,width,height){
   var options={
       restitution:0,
       friction:1,
       density:1.2,
       isStatic:true
   }

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("images/boy.png");
World.add(world,this.body);
}

display(){
var pos=this.body.position;
rectMode(CENTER);
//fill("white");
image(this.image,pos.x,pos.y,this.width,this.height);
}



}