/*
Nat Deis 8/30/17
IGME-101: Mini Project 1
*/ 

function setup() {
    createCanvas(800,800)
    background("#002e4d")
   
}

function draw() {
/*
//guides. Comment out for final piece
    stroke("#FFFFFF")
    beginShape(LINES);
    vertex(100,0)
    vertex(100,800)
    vertex(200,0)
    vertex(200,800)
    vertex(300,0)
    vertex(300,800)
    vertex(400,0)
    vertex(400,800)
    vertex(500,0)
    vertex(500,800)
    vertex(600,0)
    vertex(600,800)
    vertex(700,0)
    vertex(700,800)
    vertex(0,100)
    vertex(800,100)
    vertex(0,200)
    vertex(800,200)
    vertex(0,300)
    vertex(800,300)
    vertex(0,400)
    vertex(800,400)
    vertex(0,500)
    vertex(800,500)
    vertex(0,600)
    vertex(800,600)
    vertex(0,700)
    vertex(800,700)
    endShape()
//guide ends here
*/    
//ask how to do this, please
//change alpha and colors
    noStroke()
    fill("#001f33")
    beginShape(TRIANGLE_STRIP);
    vertex(0,800)
    vertex(100,0)
    vertex(200,800)
    vertex(300,0)
    vertex(400,800)
    vertex(500,0)
    vertex(600,800)
    vertex(700,0)
    vertex(800,800)
    endShape();

    noStroke()
    fill("#003d66")
    beginShape(TRIANGLES);
    vertex(100,100)
    vertex(200,700)
    vertex(300,100)
    vertex(400,700)
    vertex(500,100)
    vertex(600,700)
    endShape(); 
/* test shape
might incorporate into backround eventually
    beginShape();
    vertex(460,540)
    vertex(650,623)
    vertex(600,640)
    stroke("#FFFFFF")
    fill("#a6ccf2")
    endShape(CLOSE);
*/
//face
    fill("#FFFFFF")
    ellipse(444,360,370,275)
    
    beginShape();
    vertex(280,480)
    vertex(267,570)
    vertex(280,586)
    vertex(296,590)
    vertex(313,586)
    vertex(313,586)
    vertex(320,613)
    vertex(335,620)
    vertex(332,636)
    vertex(346,644)
    vertex(350,658)
    vertex(365,670)
    vertex(390,675)
    vertex(460,666)
    vertex(479,760)
    vertex(465,801)
    vertex(725,801)
    vertex(690,756)
    vertex(639,630)
    vertex(650,580)
    vertex(480,450)
    fill("#FFFFFF")
    stroke("#000000")
    endShape(CLOSE);
    
//body1
    
    //line on top of body
    //mucho importante
    //sort of
    line(280,320,558,310);
    stroke("#FFFFFF");
    
    beginShape();
    vertex(400,400)
    vertex(569,300)
    vertex(650,300)
    vertex(700,450)
    vertex(720,669)
    fill("#1966b3")
    endShape(CLOSE);
    
    beginShape();
    vertex(510,530)
    vertex(570,600)
    vertex(800,700)
    vertex(800,570)
    vertex(550,500)
    fill("#bcd9f5")
    endShape(CLOSE);
    
    beginShape();
    vertex(280,320)
    vertex(560,310)
    vertex(370,360)
    noStroke()
    fill("#134d86")
    stroke("#FFFFFF")
    endShape(CLOSE);
    
    beginShape();
    vertex(334,480)
    vertex(420,487)
    vertex(610,590)
    vertex(587,470)
    vertex(402,390)
    fill("#d2e6f9")
    stroke("#FFFFFF")
    endShape(CLOSE);
    
    beginShape();
    vertex(250,530)
    vertex(490,490)
    vertex(307,470)
    fill("#e9f2fc")
    stroke("#FFFFFF")
    endShape(CLOSE);

//beak   
    beginShape();
    vertex(334,405)
    vertex(370,360)
    vertex(305,509)
    noStroke()
    fill("#000000")
    endShape(CLOSE);
    
    beginShape();
    vertex(189,586)
    vertex(245,465)
    vertex(334,405)
    vertex(305,509)
    stroke("#FFFFFF")
    fill("#061a2d")
    endShape(CLOSE);
    
//pompadour 
    beginShape();
    vertex(249,320)
    vertex(249,178)
    vertex(280,250)
    vertex(280,390)
    fill("#79b3ec")
    endShape(CLOSE);
    
    beginShape();
    vertex(245,465)
    vertex(230,250)
    vertex(260,340)
    fill("#d2e6f9")
    endShape(CLOSE);

    beginShape();
    vertex(245,465)
    vertex(273,130)
    vertex(370,360)
    vertex(334,405)
    fill("#a6ccf2")
    endShape(CLOSE);
//body2   
    beginShape();
    vertex(370,360)
    vertex(560,310)
    vertex(305,509)
    fill("#16599c")
    endShape(CLOSE);
    
//wings
    beginShape(); //1
    vertex(540,338)
    vertex(640,0)
    vertex(738,0)
    vertex(564,367)
    fill("#1966b3")
    endShape(CLOSE);
    
    beginShape(); //5
    vertex(600,335)
    vertex(613,412)
    vertex(800,245)
    vertex(800,150)
    fill("#4d99e6")
    endShape(CLOSE);
    
    beginShape(); //2
    vertex(548,376)
    vertex(580,368)
    vertex(800,70)
    vertex(800,0)
    vertex(716,0)
    fill("#1d73c9")
    endShape(CLOSE);
    
    beginShape(); //3
    vertex(589,389)
    vertex(580,358)
    vertex(772,0)
    vertex(800,0)
    vertex(800,120)
    fill("#2080df")
    endShape(CLOSE);
    
    
    beginShape(); //4
    vertex(628,374)
    vertex(625,340)
    vertex(800,30)
    vertex(800,180)
    vertex(662,350)
    fill("#368ce2")
    endShape(CLOSE);
    
    beginShape(); //6
    vertex(612,440)
    vertex(630,387)
    vertex(800,231)
    vertex(800,340)
    fill("#63a6e9")
    endShape(CLOSE);
    
    beginShape(); //9
    vertex(632,510)
    vertex(650,469)
    vertex(800,389)
    vertex(800,500)
    fill("#a6ccf2")
    endShape(CLOSE);
    
    beginShape(); //8
    vertex(610,456)
    vertex(668,480)
    vertex(800,440)
    vertex(800,334)
    fill("#8fbfef")
    endShape(CLOSE);
    
    beginShape(); //7
    vertex(635,454)
    vertex(658,405)
    vertex(800,298)
    vertex(800,403)
    vertex(683,459)
    fill("#79b3ec")
    endShape(CLOSE);
    
    beginShape(); //12
    vertex(640,580)
    vertex(690,560)
    vertex(800,590)
    vertex(800,750)
    fill("#e9f2fc")
    endShape(CLOSE);
    
    beginShape(); //11
    vertex(670,527)
    vertex(643,550)
    vertex(800,640)
    vertex(800,500)
    fill("#d2e6f9")
    endShape(CLOSE);
    
    beginShape(); //10
    vertex(656,523)
    vertex(679,498)
    vertex(800,470)
    vertex(800,570)
    vertex(680,540)
    fill("#bcd9f5")
    endShape(CLOSE);
    

    noFill();
    stroke("#004d80")
    arc(189,450, 250, 250, 1.75, -1.4);
    arc(189,450, 200, 200, 1.65, -1.3);
    arc(189,450, 150, 150, 1.55, -1.2);
    
    fill("#e60000");
    noStroke();
    ellipse(189,450,30,30)
    
}
 