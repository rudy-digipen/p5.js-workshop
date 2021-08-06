/*
Player needs:
    X,Y position
    ammo (depends to weapons, but let's think about it after I made one working weapon.)
    sound and sprites
    maybe jump function should be included in this class?
    remaining lives
    weapon
*/
class player {
    constructor(StartX, StartY) {
        this.position = new p5.Vector(StartX,StartY)
        this.velocity = new p5.Vector()
        this.acceleration = new p5.Vector()
        this.playerWeapon = new weapon(this.position.x,this.position.y)
        this.side
        this.camera_x = 0
        this.i =0
        //this.ammo : using basic weapon now and it's ammo is infinite
    }
    update() {
        this.movement()
        this.acceleration.y=500
        if(this.isOnTheGround()) { //HOLY SHIT
            this.acceleration.y=0
            this.velocity.y=0
            if (this.keyJumpPressed()) {
                key = '`'
                this.velocity.y = -300
            }
        }
        this.fire()
        key = '`' 
        //If we order to move forward, it's x pos will change
        //but, in map class, if map is on going it will make player to move back
    }

    movement() {
        var delta_time_seconds = deltaTime/1000
        this.position.add( p5.Vector.mult( this.velocity, delta_time_seconds ) );
        this.velocity.add( p5.Vector.mult( this.acceleration, delta_time_seconds ) );
        if (keyIsDown(65)) {
            this.position.x -= 10
            this.side = -1
            this.camera_x-=10
        } 
        if (keyIsDown(68)) {
            this.position.x += 10
            this.side = 1
            this.camera_x+=10
        }
        
    }
    keyJumpPressed() {
        if(keyIsPressed === true && key == ' ') {
            return true
        }
        return false
    }
    keyFirePressed() {
        if(keyIsPressed === true && key == 1 )
            return true
        return false
    }
    isOnTheGround() {
        //console.log(int(this.position.x/60)+","+int((this.position.y+40)/60))
        if(map1.blocks[int((this.position.y+25)/map1.blockSize)][int(this.position.x/map1.blockSize)]==1) {
            return true
        }
        else
            return false
    }
    draw() { 
        if((key == 'a' || key == 'd') && keyIsPressed) { 
            image(spriteRun[this.i],this.position.x,this.position.y-25)
            setTimeout(function() {
                this.i++
            },100)
        }
        if(this.side==1) 
            image(spriteAdle,this.position.x,this.position.y-25)
        else if(this.side==-1)
            image(spriteAdleLeft,this.position.x,this.position.y-25)
        
        this.i=0
    }
    fire() {
        if(this.keyFirePressed()) {
            this.playerWeapon.fire(this.side,this.position.x,this.position.y) 
        }
            
    }
}
