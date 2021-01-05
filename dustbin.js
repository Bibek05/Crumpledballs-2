class DustBin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }

        this.bodyb = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.bodyb);
        
        this.bodyl= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    World.add(world, this.bodyl);
        
        this.bodyr = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.bodyr);
        
        this.bodyb.width = width
        this.bodyb.height = height 

        this.image = loadImage("Images/dustbin.png");
        
   }
   display(){
       fill("red ");
       rect(this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width, this.bodyb.height)
       rect((this.bodyb.position.x-(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
       rect((this.bodyb.position.x+(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)

       imageMode(CENTER);
       image(this.image, 720,350, 140,170);
       
   }
}