class Polygon{
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:1,
            density:1,
        }
        this.body = Bodies.circle(x,y,20,options)
        this.width = 50;
        this.height = 50;
        this.image = loadImage("Sprites/polygon.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
       imageMode(CENTER)
       image(this.image,0,0,this.width,this.height);
        pop();
    }
}