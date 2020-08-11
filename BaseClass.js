class BaseClass {

    constructor(x,y,width,height){

        this.body = Bodies.rectangle(x,y,width,height,{restitution: 0.3,friction: 0.5,dencity: 1.2});
        this.width = width;
        this.height = height;

        this.image = loadImage("base.png");
        World.add(world,this.body);

        Matter.Body.setStatic(this.body,true);

       
    }
   
    display(){

        var angle = this.body.angle;

        push();

        translate(this.body.position.x,this.body.position.y);
        rotate(angle);

        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);

        pop();
       
    }
}