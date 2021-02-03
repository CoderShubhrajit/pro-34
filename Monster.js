class Monster
{
    constructor()
    {
        var properties = {
            'isStatic': false,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(550,320,120,160, properties);
        this.image = loadImage("Monster-01.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,160,200);
        pop();
    }
}
