var s1;
class Round1{
    constructor()
    {
        this.s1 = new star();
        this.p = [];
        //this.block = [];
        this.width;
        this.height;
        this.b1 = new Ball(100,200);
        this.p[0] = new Draw_block(150,300,150,30);
        this.p[1] = new Draw_block(300,370,30,30);
        this.p[2] = new Draw_block(350,470,30,30);
        this.p[3] = new Draw_block(590,290,90,30);
        this.p[4] = new Draw_block(420,570,30,30);
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
