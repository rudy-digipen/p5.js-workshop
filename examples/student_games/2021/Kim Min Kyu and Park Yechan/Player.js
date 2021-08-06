class Player{
    constructor(start_x,start_y,size){
        this.position = new p5.Vector(start_x, start_y);
        this.size=size;
    }
    update(){

    }
    move(distance_x,distance_y)
    {
        if((this.position.x>this.size/2 && distance_x<0) ||this.position.x<width-this.size && distance_x>0){
            this.position.x+=distance_x;
        }
        if((this.position.y>this.size/2 && distance_y<0) ||this.position.y<height-this.size && distance_y>0){
            this.position.y +=distance_y;
        }
    }
    draw(barrier_on){
        push()
        if (barrier_on==0){
            fill("blue");
            noStroke();
            circle(this.position.x,this.position.y,this.size);
        }else if(barrier_on==1){
            rectMode(CENTER);
            fill("purple");
            circle(this.position.x,this.position.y,this.size*2);
            fill("blue");
            noStroke();
            circle(this.position.x,this.position.y,this.size);
        }else if(barrier_on==2){
            fill("blue");
            stroke("yellows");
            circle(this.position.x,this.position.y,this.size);
        }pop()
    }
}