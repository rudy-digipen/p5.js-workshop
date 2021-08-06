var cnt2=0;
class Enemy{

    constructor(start_x,start_y,size){
        this.position = new p5.Vector(start_x, start_y);
        this.size=size;
    }
    update(enemydistance_y){
        if(cnt2==0){
            if (this.position.y>this.size/2){
                this.position.y-=enemydistance_y;
            }else{
                cnt2=1;
            }
        }else if(cnt2==1){
            if (this.position.y<height-this.size/2){
                this.position.y+=enemydistance_y;
            }else{
                cnt2=0; 
            }
        }
    }
    draw(){
        push()
        translate(this.position.x, this.position.y)
        fill('#FFFF00')
        ellipse(100, 50, 500, 300)
        fill(' ')
        fill('#5F4C0B')
        rect(200, -100, 70, 300)
        rect(300, -80, 70, 260)
        fill('#181907')
        ellipse(500, 50, 100, 50)
        ellipse(0, 0, 50, 50)
        ellipse(50, 0, 50, 50)
        fill('#FE2E2E')
        rect(-10, 50, 70, 100)
        fill('#58FAF4')
        ellipse(200, -150, 70, 150)
        ellipse(240, -150, 70, 150)
        pop()
    }
} 