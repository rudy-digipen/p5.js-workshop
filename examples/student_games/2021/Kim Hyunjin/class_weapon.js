class weapon {
  constructor(PosX,PosY) {
    this.particles = []
    this.x = PosX
    this.y = PosY
    this.isExplodes
    this.magazine
    this.ammo
    this.coolDown
  }
  fire(side,x,y) { //actually it's reload
      var bullet = new Particle(x,y)
      var vel_dir = new p5.Vector(); vel_dir.set(side,0)
      vel_dir.mult(1500)
      bullet.velocity = vel_dir
      this.particles.push(bullet)
      
  }
  draw(x,y) {
    for( var index = 0; index < this.particles.length; ++index) {
      var p = this.particles[ index ]
      p.update(deltaTime/1000)
      p.draw()
    }
    for( var index = this.particles.length - 1; index>=0; index--) {
      //this.particles.splice(index, 1)
    }
  }
}


class pistol extends weapon {
  constructor(x,y) {
    super(x,y)
    this.x  
    this.y  
    console.log(this.x+","+this.y)
    this.isExplodes = false
    this.magazine = -1
    this.ammo = -1
    this.coolDown = 0
  }
  /*
  fire() {
    super.fire()
    console.log("pistol fire")
  }
  draw() {
    super.draw(this.x,this.y)
    console.log("pistol draw")
  }
  */
}