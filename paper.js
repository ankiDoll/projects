class paper extends BaseClass{

    constructor(x,y,width,height){

        super(x,y,width,height);
        this.image = loadImage("paper.png");

        Matter.Body.setStatic(this.body,false);
       }
       
       display(){
        
        super.display();
        
       }
}