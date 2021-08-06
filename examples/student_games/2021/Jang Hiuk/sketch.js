var owl_1;
var owl_2;
var owl_3;
var owl_4;
var owl_5;
var owl_6;
var user;
var r=[];//1~6
var owl_clab=[];//0~5
var game_owl_time=[];
var ch=0;
var time1;
var check_y_n=[];//확인 배열
var point=0;
//var time_chack=[1.0, 0.95, 0.9, ];//타임 채크 배열, 맨 처음~배열의 시간까지 
var time2=2;//2초동안
var end_time;
var a;
var k=0;
var w=1;
var owla;
var life=4;
var c=200;
var co=0;
var t_f=[];
var die=0;
//후에 생명 클래스를 만들어 줄어들면 보이지 않게 만듦
//1.55*n-0.05*(n^2+n)/2

function setup() {
  createCanvas(600, 600);
  frameRate(60);
  owl_clab.push( new Owl(1) );
  owl_clab.push( new Owl(2) );
  owl_clab.push( new Owl(3) );
  owl_clab.push( new Owl(4) );
  owl_clab.push( new Owl(5) );
  owl_clab.push( new Owl(6) );
  
  for(var n=1; n<35; n++)
  {
    game_owl_time[n]=(20+1.30*n-0.025*(n*n+n)/2);
    check_y_n[n-1]=0;
    t_f[n-1]=0;
  }
  point=0;

  c=200;
  background_image=loadImage('picture/aca.jpg')
  die_image=loadImage('picture/die.jpg')
  owl_image=loadImage('picture/owl.jpg')
  hay_image=loadImage('picture/hay.jpg')
  hw_image=loadImage('picture/B.jpg')
  p_image=loadImage('picture/p.jpg')
  rule_image=loadImage('picture/rules.jpg')
  
}
function mouseClicked()
{
  owla= new Owl(a);
   var m_y1=height/7*2;
   var m_y2=height/5+height/7*2;
  var x=owla.x1;
  var x2=owla.x1+width/43*3;
  
  if(mouseY > m_y1 && mouseY < m_y2 && mouseX > x && mouseX < x2)
  {
   // fill('yellow')
    point=point+1000;//1000 포인트 증가
    console.log(point);
    t_f[k]=1;//owl 다르게 바뀌기
    check_y_n[k]=1;//확인 배열에 해당 순서 1로 바꾸기
  }
}

function draw() {
  if(die==1)
    background(die_image);
  else if(die==35)
  {
    if((end_time+2-time1)>0)
      {
        push()
        textSize(40);
        if(c>0)
        {
          background(c);
          c-=20*time2;
          push()
          fill('white')
          text('Collecting Scores....', 200, 250, 300, 600);
          pop()
        }
        else
        {
          background('black');
          push()
          fill('yellow')
          text('point: ', 230, 250, 300, 150);
          text(point, 230, 290, 300, 150);
          pop()
        }
        pop()
      }
      
        time1=millis()/1000;
  }
  else{
    time1=millis()/1000;
    text(time1, 570, 10, 70, 80);
    if(10-time1>0)
    {
      background(p_image);
    }
    else if(20-time1>0)
    {
      background(rule_image);
    }
    else
    {
      w=0;
      background(background_image);
    }
    //나중에 앞에 설명같은걸 하거나 버튼을 눌러 겜 시작을 하게 만들고 싶으면
    //그 만큼의 시간은 더해주도록 하자
    time2=deltaTime / 1000;//0.05초
    game_owl_time[0]=20;
    
      if(game_owl_time[k]-time1<0)//배열안의 수가 지나간 뒤에는 계속 0이라 그냥 바로바로 이동되는거임
      {
        if(check_y_n[k]!=1&&k!=0)
        {
          point=point-100;//포인트는 생명 하나 잃을때마다 100 감소, 
          life--;//생명 줄어드는 함수, 0이 되면 게임오버를 출력
          if(life==0)
          {
            background(die_image);
            die=true;
          } 
          
          console.log(point);
        }
        k++;
        ran();
      }
    if(k==35)
    {
      die=35;
      if((end_time+2-time1)>0)
      {
        push()
        textSize(40);
        if(c>0)
        {
          background(c);
          c-=20*time2;
          push()
          fill('white')
          text('Collecting Scores....', 200, 250, 300, 600);
          pop()
        }
        else
        {
          background('black');
          push()
          fill('yellow')
          text('point: ', 230, 250, 300, 150);
          text(point, 230, 290, 300, 150);
          pop()
        }
        pop()
      }
      
        time1=millis()/1000;
      end_time=time1;
      w=1;
      //나중에 배경 넣던지
      
    }
    
      for(var i=0; i<6; i++)//부엉이 표현하기
       {
         if(t_f[k]==1)
         {
          owl_clab[i].draw(r[i+1], w, 1);
         }
         else
          owl_clab[i].draw(r[i+1], w, 0);
          
      }
  }
  
  
    // text(k, 100, 90, 70, 80);
    // text(game_owl_time[k], 100, 100, 70, 80);
    // text(time1, 40, 0, 70, 80);
    push()
    fill("FFFFFF");
     text('life', 40, 10, 70, 80);
     text(life, 40, 20, 70, 80);
     pop()
}

function ran()
{
  for(var j=1; j<=6; j++)//모두에 0을 집어넣음
    {
       r[j]=0;
    }
    //랜덤으로 부엉이 6마리 중 하나를 지정함
    a=int(random(1, 7));//이전의 거는 포함이 안되는 랜덤?//겹치지 않게 함
    while(a==ch)
    {
      a=int(random(1, 7));
    }
    ch=a;
    r[a] = 1;
    
}

/*
        text(i, 10, 10*i, 70, 80);
        text(r[i+1], 20, 10*i, 70, 80);
        text(a, 30, 10*i, 70, 80);
        text(time2, 40, 10, 70, 80);*/

