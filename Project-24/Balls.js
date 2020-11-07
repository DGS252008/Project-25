class Balls{
    constructor(x, y, r){
        var options= {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
    this.x = x;
    this.y = y;
    this.r = r;
    
    this.body = Bodies.circle(this.x, this.y, this.r/2, options);
    this.image = loadImage("trashBall.png");
    World.add(world, this.body);
    }
    
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}