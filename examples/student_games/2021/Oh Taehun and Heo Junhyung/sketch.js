let max_x,max_y;//최대 맵 크기
var arr;//배열
let direction = '';//키보드 입력키
let cir=100;//원크기
let canX=500, canY=500;//바탕
let sum = 0, act=0;//렌덤 수
let endT=0;
let aaa=0;
let score=0;


let a11=0;
let img;

function setup() {
  if(a11==0){
    createCanvas(500, 500);

    push()
    background(220);
    background("#EECDB5")
    pop()
  
    //타이틀
    push()
    textSize(100);
    text('2048',130,120);
    pop()
  
    //게임 스타트 버튼
    push()
    ellipse(240, 200, 100, 100);
    textSize(20);
    text('Game \n Start',213,198);
    pop()
  
    //게임 설명
    push()
    ellipse(240, 310, 100, 100);
    textSize(20);
    text('Rule',220,315);
    pop()
  
    //나가기 버튼
    push()
    ellipse(240, 420, 100, 100);
    textSize(20);
    text('Quit',220,425);
  
    //이전 버튼
    push()
    noStroke()
    rect(30,450,50,20);
    triangle(10,460,40,430,40,490);
    pop()
  }

}

function mousePressed() {
  let d = dist(mouseX, mouseY, 240, 200);
  let e = dist(mouseX, mouseY, 240,310);
  let f = dist(mouseX, mouseY,240,420);
  let g = dist(mouseX, mouseY,20,450);

  //게임 시작
  if (d < 50) {
    clear()
    a11=1;
    background("#EECDB5");
     if(a11==1){
      //4X4
      ellipse(240, 80, 100, 100);
      textSize(15);
      text('4X4',227,80);
      text('Pressed1',210,95)
      
      //8X8
      ellipse(240, 190, 100, 100);
      textSize(15);
      text('8X8',227,190);
      text('Pressed2',210,205)

      //16X16
      ellipse(240, 300, 100, 100);
      textSize(15);
      text('16X16',218,300);
      text('Pressed3',210,315)

      //32X32
      ellipse(240, 410, 100, 100);
      textSize(15);
      text('32X32',218,410);
      text('Pressed4',210,425)

      //이전 버튼
      push()
      noStroke()
      rect(30,450,50,20);
      triangle(10,460,40,430,40,490);
      pop()
  }
 }
 //게임 규칙 설명
 if (e < 50){
  clear()
  a11=2;
  background("#EECDB5");
   if(a11==2){
    textSize(15);
    text('When two equal tiles collide, they combine to give you one greater\n tile that displays their sum.\n\n\nThe more you do this, obviously, the higher the tiles get and the more \ncrowded the board becomes.\n\n\nPlayers objective is to reach 2048 before the board fills up',10,100);

    //이전 버튼
    push()
    noStroke()
    rect(30,450,50,20);
    triangle(10,460,40,430,40,490);
    pop()
  }
}
//나가기
if (f < 50){
  clear()
  a11=3;
  background("#EECDB5");
   if(a11==3){
    image(img, 100, 200, 300, 100);
   }
}
if (g<50){
  push()
    background(220);
    background("#EECDB5")
    pop()
  
    //타이틀
    push()
    textSize(100);
    text('2048',130,120);
    pop()
  
    //게임 스타트 버튼
    push()
    ellipse(240, 200, 100, 100);
    textSize(20);
    text('Game \n Start',213,198);
    pop()
  
    //게임 설명
    push()
    ellipse(240, 310, 100, 100);
    textSize(20);
    text('Rule',220,315);
    pop()
  
    //나가기 버튼
    push()
    ellipse(240, 420, 100, 100);
    textSize(20);
    text('Quit',220,425);
  
    //이전 버튼
    push()
    noStroke()
    rect(30,450,50,20);
    triangle(10,460,40,430,40,490);
    pop()
  }
}


/*
function mousePressed(){
  let e = dist(mouseX, mouseY,240,310);
  if (e < 50){
    clear()
    a=2;
    background("#EECDB5");
     if(a==2){
      textSize(15);
      text('At startup, there are two (or 4)s on a plate of the size you choose,\n and when you drag the keyboard orientation key or touchscreen, \n the blocks all move in that direction and merge together \n if there are the same numbers,\n and randomly 2 or 4 appears in one of the empty spaces.[3]\n If you repeat this and make 2048 from 2, game clear.\n If the 2048 cannot be moved before it is built, that is,\n when the 16 compartments are full and \n the two adjacent compartments are not the same,\n it becomes a game over, and at the same time it cannot be moved.',10,100);
    }
  }
}

/*
function mousePress  ed(){
let f = dist(mouseX, mouseY,240,420);
  if (f < 50){
    clear()
    a=3;
    background("#EECDB5");
     if(a==3){
      image(img, 100, 200, 300, 100);
     }
  }
}*/









function drow()
{
  if(aaa==1)
  {
    dr();
  }
}










function st() {
  createCanvas(canX, canY);
  //맵 배열 생성
  arr = map_maker(max_x,max_y);
  int(max_x)
  Math.floor(max_y)
  
  arr[Math.floor(random(0,max_x))][Math.floor(random(0,max_y))] =rand();
  arr[Math.floor(random(0,max_x))][Math.floor(random(0,max_y))] =rand();
}

function dr() {//도형 출력
  
  background('#EECDB5');
  textSize(20)
  text(score,0,30)
  for (let x = 0; x < max_x; x ++) {
     for (let y = 0; y < max_y; y ++) {
      circle(canX/max_x*x+cir-max_x*10,canY/max_y*y+cir-max_y*10,cir/max_x/2)
      textSize(70/max_y*3)
      if(arr[x][y]>0)text(arr[x][y],canX/max_x*x+cir-max_x*10-20,canY/max_y*y+cir-max_y*10+20)
     }
  }
}



function map_maker(rows, columns) {//맵 생성
  var arr = [];
  for (var i = 0; i < rows; i++) {
      arr.push(new Array(columns));
  }
  for (let x = 0; x < max_x; x ++) {
    for (let y = 0; y < max_y; y ++){
      arr[x][y]=0;
    }
  }
  return arr;
}


function keyPressed() {//키보드 입력
  let i, j , r=0;



  switch (keyCode) {
    case 37:{
      direction = 'left';
      break;
    }
    case 39:{
      direction = 'right';
      break;
    }
    case 38:{
      direction = 'up';
      break;
    }
    case 40:{
      direction = 'down';
      break;
    }
    case 97:{
      //4X4
      max_x=4;
      max_y=4;
      st();
      aaa=1;
      
      break;
    }
    case 98:{
      //6X6
      max_x=6;
      max_y=6;
      st();
      aaa=1;
      break;
    }
    case 99:{
      //8X8
      st(8,8);
      max_x=8;
      max_y=8;
      aaa=1;
      break;
    }
    case 100:{
      //10X10
      max_x=10;
      max_y=10;
      st();
      aaa=1;
      break;
    }
  }

  //if(direction!=0){
    switch(direction){
      case 'up':{ 
        for(i=0,act=0;i<max_x;i++){ //모든 행
          for(j=1;j<=max_y-1;j++){ // 1~3 
            for(r=j;r>0;r--){ 
              if(arr[i][r]==0||arr[i][r]>10000) break; //자기 값이 0 혹은 10000보다 큰 경우,
              if(arr[i][r-1]!=0&&arr[i][r-1]!=arr[i][r]) break;
                                              
              if(arr[i][r-1]==0) arr[i][r-1]=arr[i][r];    //0인경우 자기값 복사
              else if(arr[i][r] == arr[i][r-1]){ // 동일한 경우에
                arr[i][r-1]*=2; //왼쪽값을 2배
                arr[i][r-1]+=10000; // 임시로 값증가 함수 마지막에 다시 값을 감소시킴
                score+=2*(arr[i][r]); //점수를 증가 
              }
              arr[i][r]=0;     //자기 값은 0으로 지움
              act++; 
              }
            }
          }
        direction = '';
        r=0;
        break;
      }
      case 'down':{ 
        for(i=0,act=0;i<max_x;i++){ //모든 행
          for(j=max_y-2;j>=0;j--){ // 2~0
            for(r=j;r<max_x-1;r++){
              if(arr[i][r]==0||arr[i][r]>10000) break;
              if(arr[i][r+1]!=0&&arr[i][r+1]!=arr[i][r]) break;
              if(arr[i][r+1]==0) arr[i][r+1]=arr[i][r];
              else if(arr[i][r]==arr[i][r+1]){
                arr[i][r+1]*=2;
                arr[i][r+1]+=10000;
                score+=2*(arr[i][r]);
              }
              arr[i][r]=0;                            
              act++;
            }
          }
        }
        direction = '';
        r=0;
        break;
      }
      case 'left':{ 
        for(j=0,act=0;j<max_y;j++){ //모든 열 
          for(i=1;i<=max_x-1;i++){ // 1~3
            for(r=i;r>0;r--){
              if(arr[r][j]==0||arr[r][j]>10000) break;
              if(arr[r-1][j]!=0&&arr[r-1][j]!=arr[r][j]) break;
              if(arr[r-1][j]==0) arr[r-1][j]=arr[r][j];
              else if(arr[r][j]==arr[r-1][j]){
                arr[r-1][j]*=2;
                arr[r-1][j]+=10000;
                score+=2*(arr[r][j]);
              }
              arr[r][j]=0;
              act++;
            }
          }
        }
        direction = '';
        r=0;
        break; 
      }
      case 'right':{  
        for(j=0,act=0;j<max_y;j++){ //모든 열 
          for(i=max_x-2;i>=0;i--){ // 2~0
            for(r=i;r<max_x-1;r++){
              if(arr[r][j]==0||arr[r][j]>10000) break;
              if(arr[r+1][j]!=0&&arr[r+1][j]!=arr[r][j]) break;
              if(arr[r+1][j]==0) arr[r+1][j]=arr[r][j];
              else if(arr[r][j] == arr[r+1][j]){
                arr[r+1][j]*=2;
                arr[r+1][j]+=10000;
                score+=2*(arr[r][j]);
              }
              arr[r][j]=0;
              act++;
            }
          }
        }
        direction = '';
        r=0;
        break;
      }
    }
    check_game_over();
    for(i=0;i<max_x;i++){
      for(j=0;j<max_y;j++){
        if(arr[i][j]>10000)
          arr[i][j]-=10000; //임시로 더한 10000을 감소 
      }
    }

  console.log(direction);


  
  let num,a;
  i=0;
  j=0;
  for (let x = 0; x < max_x; x ++) {
    for (let y = 0; y < max_y; y ++){
      if(arr[x][y]==0)
      {
        num++;
        a=1;
      }
      if(x>4 && y>4 && num==0)a=0;
    }
  }
  if(a==1)
  {
    while(1)
    {
      i= Math.floor(random(0, max_x));
      j= Math.floor(random(0, max_y));
      if(arr[i][j]==0)break;
    }
    endT=0;
    arr[i][j] =rand();
    dr();
  }
  else{
    endT=1;
  }
}




function rand() {//1/4확률 40   렌덤수 
  switch (int(random(1,5))) {
    case 1:{
      sum=2;
      break;
    }
    case 2:{
      sum=2;
      break;
    }
    case 3:{
      sum=2;
      break;
    }
    case 4:{
      sum=4;
      break;
    }
  }
  return sum;
  
}











function preload() {
  img = loadImage('img/cafebene.png');
}


function check_game_over(){ //게임오버인지 체크 
  let i=0,j=0;
  
  for(i=0;i<4;i++) for(j=0;j<4;j++) if(arr[i][j]==0) return;
  for(i=0;i<3;i++) for(j=0;j<3;j++) if(arr[i][j]==arr[i+1][j]||arr[i][j]==arr[i][j+1]) return;
  for(i=0;i<3;i++) if(arr[i][3]==arr[i+1][3]) return; 
  for(j=0;j<3;j++) if(arr[3][j]==arr[3][j+1]) return; 
  clear()
  text('Game Over!',100,100)
  image(img, 100, 200, 300, 100);

  //레벨 돌아가는 버튼
  push()
  textSize(50);
  text('sc',10,210)
  
  textSize(100);
  text(score,100,210)
  pop()
}