var s1;
class Round3{
    constructor()
    {
        this.s1 = new star();
        this.p = [];
        //this.block = [];
        this.width;
        this.height;
        this.b1 = new Ball(400,50);
        this.p[0] = new Draw_block(400,300,50,20);// r4
        this.p[1] = new Draw_block(400,500,50,20);
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
        this.s1.Draw(400,600);

        // for(let i=1;i<20;i++){
        //     this.p[i].x = this.p[i-1] + 150;
        //     this.p[i].y = this.p[i-1],y; 
        //     this.p[i].width = this.p[i-1].width; 
        //     this.p[i].height = this.p[i-1].height;
        //     block.Draw(this.p[i].x,this.p[i].y,this.p[i].width,this.p[i].height);
        // }
    }
}
