var s1;
class Round5{
    constructor()
    {
        this.s1 = new star();
        this.p = [];
        //this.block = [];
        this.width;
        this.height;
        this.b1 = new Ball(100,200);
        this.p[0] = new Draw_block(0,400,30,150);//r5
        this.p[1] = new Draw_block(30,520,90,30);
        this.p[2] = new Draw_block(150,540,30,30);
        this.p[3] = new Draw_block(210,580,90,30);
        this.p[4] = new Draw_block(270,490,120,30);
        this.p[5] = new Draw_block(420,400,120,30);
        this.p[6] = new Draw_block(570,310,120,30);
        this.p[7] = new Draw_block(720,220,80,30);
        this.p[8] = new Draw_block(770,100,30,120);
        //this.b1.x = 500;
        //for(let i=0;i<this.block.length;i++){
         //   this.p.push(this.block[i]);
       // }
    }
    Draw()
    {
        for (let i = 0; i < this.p.length; i++) {
            this.p[i].Draw();
        }
        this.s1.Draw(700,250);

        // for(let i=1;i<20;i++){
        //     this.p[i].x = this.p[i-1] + 150;
        //     this.p[i].y = this.p[i-1],y; 
        //     this.p[i].width = this.p[i-1].width; 
        //     this.p[i].height = this.p[i-1].height;
        //     block.Draw(this.p[i].x,this.p[i].y,this.p[i].width,this.p[i].height);
        // }
    }
}
