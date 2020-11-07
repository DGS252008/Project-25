class Bin{
    constructor(x, y, width, height){
        var options= {
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(this.x, this,y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.pos;

        push();
        translate(this.x, this.y);
        rectMode(CENTER);
        fill("silver");
        rect(0, 0, this.width, this.height);
        pop();
    }
}