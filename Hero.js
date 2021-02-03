class Hero
{
    constructor()
    {
        var properties = {
            'isStatic': false,
            'density' : 1.0
        }
        this.body = Bodies.rectangle(250, 270, 200, 120, properties);
        this.image = loadImage("Superhero-01.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,200,120);
        pop();
    }
}
