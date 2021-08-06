class Owl
{
    constructor(a)
    {
        if(a<=3)
            this.x1=width/44*(20+5*(-4+a));
        else
            this.x1=width/44*(22+5*(-3+a));
        //this.x2;
    }
   /* move( delta_time_seconds )
    {

    }*/

    draw(r, w, ko)
    {
        
        if(w==0)
        {
            if(r==1)
            {
                if(ko==0)
                {
                //     push()
                //   noStroke();
                //   fill('yellow')
                //  rect(this.x1, height/7*2, width/43*3, height/5)
                //  pop()
                    image(owl_image, this.x1, height/7*2)
                }
                else
                {
                //     push()
                //     noStroke();
                //     fill('green')
                //    triangle(this.x1, height/5+height/7*2+20, this.x1+width/43*3, height/5+height/7*2, this.x1+width/43/2*3, height/7*2+)
                //    pop()
                    image(hay_image, this.x1-40, height/7*2-50)
                
                }
                
            }
            else
            {
                // push()
                // noStroke();
                // fill('blue')
                // rect(this.x1, height/14, width/43*3, height/20)
                // pop()
                image(hw_image, this.x1, height/14)
            }
        }
        
        
        
        
    }
}