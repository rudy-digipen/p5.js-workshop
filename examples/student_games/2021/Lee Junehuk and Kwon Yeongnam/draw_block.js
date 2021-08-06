class Draw_block{
    constructor(x,y,width,height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    Draw()
    {
        push();
        strokeWeight(3);
        rectMode( CENTER );
        fill(104, 104, 91);
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}