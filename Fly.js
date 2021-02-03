class SupernaturalPower
{
    constructor(bodyA,pointB)
    {
        var properties = {
            bodyA: bodyA, pointB: pointB, stiffness: 1.0, length: 100
        }
        this.flier = Constraint.create(properties);
        this.pointB = pointB;
        World.add(world,this.flier);
    }
    display()
    {
      if (this.flier.bodyA){
        push();
        strokeWeight(0);
        line(this.flier.bodyA.position.x, this.flier.bodyA.position.y, this.pointB.x, this.pointB.y);
        pop();
      }
    }
}