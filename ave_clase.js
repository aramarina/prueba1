class pajaro extends clasebase
{
    constructor(x,y)
    {
        super(x,y,50,50);
        this.image= loadImage("IMAS/AVEE.png");
    }
    display() 
    {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}