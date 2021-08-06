var s1;
class Round4{
    constructor()
    {
        this.s1 = new star();
        this.p = [];
        //this.block = [];
        this.width;
        this.height;
        this.b1 = new Ball(400,130);
        this.p[0] = new Draw_block(400,100,50,450);// r4
        this.p[1] = new Draw_block(400,650,50,400);
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
