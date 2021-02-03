class Plane
{
    constructor()
    {
        var properties = {
            'isStatic': true,
        }
        this.body = Bodies.rectangle(400, 440, 650, 110, properties);
        this.image = loadImage("aeroplane.png");
        World.add(world,this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,700,250);
        pop();
    }
}
