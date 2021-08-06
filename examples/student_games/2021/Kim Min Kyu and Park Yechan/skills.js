var skillmove_x;
var skillmove_y;
var skillback_x;
var skillback_y;
var enemy1_x;
var enemy1_y;
var start1_x;
var start1_y;
var moveskill_x;
var moveskill_y;
var movedistance_x;
var movedistance_y;
var cnt3=0;
var cnt5=0;
var cnt6=0;
function preload(){
    bg_image=loadImage('imagefile/bridge.png');
    bg_image2=loadImage('imagefile/queue.png');
    bg_music=loadSound('musicfile/smallairman2.mp3');
    sk_image=loadImage('imagefile/zedq.png');
    append(sk_music,loadSound('musicfile/dravenlong.mp3'));
    append(sk_music,loadSound('musicfile/zedwq.mp3'))
  }
class skills{
    constructor(start_x,start_y,size_x,size_y,player,enemy,skilltype2){
        this.position = new p5.Vector(start_x, start_y);
        this.width=size_x;
        this.height=size_y;
        this.skillend=0;
        if (skilltype2==0){// || skilltype2==2){
            skillmove_x=200+size_x/2;
            skillmove_y=player.position.y;
            this.alpha_light=0;
        }else if (skilltype2==1){
            skillmove_x=player.position.x;
            skillmove_y=player.position.y;
        }
        enemy1_x=enemy.position.x;
        enemy1_y=enemy.position.y;
        //start1_x=start_x;
        //start1_y=start_y;
        if (skilltype2==1 && cnt5==0){
            console.log("엄")
            start1_x=abs(start_x-round(random(200+size_x,400+size_x)))+size_x;
            start1_y=abs(start_y-round(random(200+size_y,400+size_y)))+size_y;
            this.position=new p5.Vector(start1_x,start1_y);
            cnt5=1;
        }
    }
    update(skilldraw,movingsecond,enemy,stage1){
        if(skilldraw==0){
            moveskill_x=abs(enemy1_x-skillmove_x);
            moveskill_y=abs(enemy.position.y-skillmove_y);
            var movedistance_x=moveskill_x/movingsecond;
            var movedistance_y=moveskill_y/movingsecond;
            if (cnt3==0){
                this.skillend=0;
                this.position.x-=movedistance_x;
                if(this.position.x>skillmove_x){
                    if (this.position.y>=skillmove_y){
                        this.position.y-=movedistance_y;
                    }else if(this.position.y<skillmove_y){
                        this.position.y+=movedistance_y;
                    }
                }
                if (this.position.x<=skillmove_x){
                    skillback_x=enemy1_x;
                    skillback_y=enemy1_y;
                    moveskill_x=abs(enemy.position.x-this.position.x);
                    moveskill_y=abs(this.position.y-enemy.position.y);
                    cnt3=1; 
                }
            }
            else if (cnt3==1){
                if (this.position.x<=skillback_x){
                    this.position.x+=movedistance_x;
                    if (this.position.y>skillback_y){
                        this.position.y-=movedistance_y;
                    }else if(this.position.y<skillback_y){
                         this.position.y+=movedistance_y;
                    }
                }if (this.position.x>skillback_x){
                    this.skillend=1;
                    cnt3=0; 
                }
            }
        }else if(skilldraw==1){
            cnt6++;
            moveskill_x=abs(start1_x-skillmove_x);
            moveskill_y=abs(start1_y-skillmove_y);
            var movedistance_x=25/3*(stage1+1)/sqrt(stage1);//moveskill_x/movingsecond;
            console.log(movedistance_x);
            var movedistance_y=moveskill_y/movingsecond;
            this.skillend=0;
            this.position.x-=movedistance_x;
            //if(this.position.x>skillmove_x){
                if (this.position.y>=skillmove_y){
                    this.position.y-=movedistance_y;
                }else if(this.position.y<skillmove_y){
                    this.position.y+=movedistance_y;
                }
                //}
            if (cnt6>=180|| this.position.x<(160+this.width/2)){
                this.skillend=1;
                cnt3=0; 
                cnt5=0;
                cnt6=0;
                }
        }/*else if (skilldraw==2){
            alpha_light+=stage1;
            this.skillend=0;
            if (alpha_light>=240){
                this.skillend=1;
                cnt3=0;
                alpha_light=0;
            }
        }*/
    }
    draw(skilldraw){
        push();
        if (skilldraw==0){
            fill("grey");
            stroke(0);
            strokeWeight(2);
            rectMode(CENTER);
            rect(this.position.x,this.position.y-this.height*8,this.width*3,this.height*4);
            rect(this.position.x,this.position.y+this.height*8,this.width*3,this.height*4);
        }else if(skilldraw==1){
            if(dist(start1_x,start1_y,enemy1_x,enemy1_y)>200){
                push();
                fill(0,0,0);
                circle(start1_x,start1_y,this.width*4);
                pop();
            }
            tint(255,255,255,255);
            imageMode(CENTER);
            image(sk_image,this.position.x,this.position.y,this.width*4,this.height*4);
        }/*else if (skilldraw==2){
            fill(255-alpha_light,255,alpha_light,alpha_light++);
            stroke(0);
            strokeWeight(2);
            rectMode(CORNER);
            rect(width-220,skillmove_y-this.height/2,width-400,this.height);
        }*/ //error
        pop()
    }
    
      
} 