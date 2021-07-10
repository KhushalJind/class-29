class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.catapult1 = loadImage("sprites/sling1.png");
        this.catapult2 = loadImage("sprites/sling2.png");
        this.rubberband = loadImage("sprites/sling3.png");

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke(66, 31, 1)
            if(pointA.x<250){
            strokeWeight(10);
            line(pointA.x-20, pointA.y, pointB.x+40, pointB.y-50);
            line( pointA.x-20, pointA.y+12, pointB.x+80, pointB.y-50)
            image(this.rubberband,pointA.x-25,pointA.y,10,15)
            }else{
                strokeWeight(5);
                line(pointA.x+20, pointA.y, pointB.x+40, pointB.y-50);
            line( pointA.x+20, pointA.y, pointB.x+80, pointB.y-50)
            image(this.rubberband,pointA.x+25,pointA.y,10,15)
            }
           }
           image(this.catapult1,250,25);
           image(this.catapult2,220,25);

    }
    
}