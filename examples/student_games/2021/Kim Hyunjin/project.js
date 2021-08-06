// run and gun v.alpha of beta of gamma of whatever its not done YET


let MainMenuScene,GameScene,OptionScene,CreditsScene,CurrentScene,player1,map1,mapBG
let spriteAdle,spriteRun1,spriteRun2,spriteRun3,spriteRun4,spriteRun5,spriteRun6,spriteRun7,spriteRun8
var spriteRun = []
function preload() {
    //I want to refer this sprite Adle in class_player
    spriteAdle = loadImage('playerAdle.png')
    spriteAdleLeft = loadImage('playerAdleLeft.png')
    spriteRun1 = loadImage('running1.png'); spriteRun.push(spriteRun1)
    spriteRun2 = loadImage('running2.png'); spriteRun.push(spriteRun2)
    spriteRun3 = loadImage('running3.png'); spriteRun.push(spriteRun3)
    spriteRun4 = loadImage('running4.png'); spriteRun.push(spriteRun4)
    spriteRun5 = loadImage('running5.png'); spriteRun.push(spriteRun5)
    spriteRun6 = loadImage('running6.png'); spriteRun.push(spriteRun6)
    spriteRun7 = loadImage('running7.png'); spriteRun.push(spriteRun7)
    spriteRun8 = loadImage('running8.png'); spriteRun.push(spriteRun8)
    
    mapBG = loadImage('map.png')
}

//var camera_x=0
function setup() {
    createCanvas(600,600)
    player1 = new player(width*1/4, height*1/4)
    map1=new map()
    
    //set player to Width*1/4, height*1/4
    /*
    MainMenuScene = new MainMenu()
    CreditsScene = new CreditsScreen()
    OptionScene = new OptionScreen()
    GameScene = new GameScreen()
    CurrentScene = GameScene


    */
    
}

function draw() {
    //console.log(key)
    translate(-player1.camera_x,0)
    
    image(mapBG,0,0)
    player1.update()
    player1.draw()
    map1.draw()
    player1.playerWeapon.draw(player1.position.x,player1.position.y)
    
    
    /*
    CurrentScene.update()
    CurrentScene.draw()
    */
}

function KeyIsDown(keyInput) {
    if(key == keyInput)
        return true
}