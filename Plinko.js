class Plinko{
    constructor(x,y,r){
    var options = {
        isStatic:true
    }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,this.r,options);
    //  this.color = color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);
    }
    display(){
      //  stroke(this.color);
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.r);
    }
}