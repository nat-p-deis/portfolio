/*
Nat Deis
10/28/17
IGME-101
Project 2
*/
//all instructions for the interactions are in function draw
var m;
var a;
var ashes=[];
var count=0;
var canvasColor1;
var canvasColor2;
var h;
var c;
function setup() {
    createCanvas(800,800)
    canvasColor1=color("#00081a")
    canvasColor2=color("#e6e6e6")
	noStroke()
    background(canvasColor1)
    m = new Moon(200,200,300,300)
    a = new Ash(random(-400,790),-20,random(1,2),random(6,7),random(5,10),random(5,10),random(170,250))
	a.drawAsh()
	h=new Hunter()
	c=new Caryllrune()
}

function draw() {
    //click the moon to change its color
    if(m.change){
        m.displayClicked()
    }
    else if(m.change == false){
        m.display()
    }
	//click the figure to change the hunter to a beast and vice versa
	if(h.change){
		h.drawBeast()
	}
	else if(h.change == false){
		h.drawHunter()
	}
	//automatic rain of ashes
	a = new Ash(random(-400,790),-20,random(1,2),random(6,7),random(5,10),random(5,10),random(170,250))
	ashes.push(a)
    for(a = 0;a < ashes.length; a++){
        ashes[a].drawAsh();
        ashes[a].move()
        }
    if(ashes[a]==70){
        ashes[a].shift()
    }
	//up and down arrows display Caryll runes, any other key makes them dissappear
	keyPressed()
}

class Moon{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.fillColor1=color("#ffffff");
        this.fillColor2=color(canvasColor1);
        this.fillClick1=color("#cc0000");
        this.fillClick2=color(canvasColor2);
        this.change = false;
    }
    display(){
        fill(this.fillColor2)
        rect(0,0,800,800)
        fill(this.fillColor1)
        ellipse(this.x,this.y,this.width,this.height)
    }
    displayClicked(){
        fill(this.fillClick2)
        rect(0,0,800,800)
        fill(this.fillClick1)
        ellipse(this.x,this.y,this.width,this.height)
    }
}
function mouseClicked(){
    if (mouseX>m.x-(m.width/2) && mouseX<m.x+(m.width/2) && mouseY>m.y-(m.width/2) && mouseY<m.y+(m.height/2)){
        if(m.change){
        	m.change=false
        }
        else if(m.change==false){
            m.change=true
        }
		}
	if(mouseX>550&&mouseX<801&&mouseY>230&&mouseY<801){
		if(h.change){
			h.change=false
		}
		else if(h.change==false){
			h.change=true
		}
	}
    }
class Ash{
	//spawns ash that rains from top left to bottom right
	//figure out how to make sure that the cirlces can go over the moon without messing anything up
	//rcolor keeps the rgb equal so the ash is grey
    constructor(x,y,speedX,speedY,width,height,rcolor){
        this.x=x;
        this.y=y;
        this.speedX=speedX;
        this.speedY=speedY;
        this.width=width;
        this.height=height;
        this.color=color(rcolor,rcolor,rcolor);
    }
    drawAsh(){
        fill(this.color)
        ellipse(this.x,this.y,this.width,this.height);
    }
    move(){
        this.x=this.x+this.speedX;
        this.y=this.y+this.speedY;
        fill(this.color);
        this.drawAsh();
    }
}
class Hunter{
	constructor(){
		this.change=false;
	}
	drawHunter(){
		noStroke()
		fill("#ffffff")
		arc(680,350,95,70,3,5.6)
		beginShape()
		vertex(604,355)
		vertex(594,345)
		vertex(760,305)
		vertex(720,327)
		vertex(755,328)
		vertex(715,335)
		vertex(765,340)
		vertex(730,345)
		vertex(740,349)
		vertex(720,353)
		vertex(759,358)
		vertex(738,361)
		vertex(745,365)
		vertex(724,364)
		vertex(752,373)
		vertex(716,372)
		vertex(737,382)
		vertex(720,385)
		endShape(CLOSE)
		beginShape()
		vertex(643,355)
		vertex(620,380)
		vertex(624,390)
		vertex(625,405)
		vertex(637,418)
		vertex(695,410)
		vertex(703,371)
		endShape(CLOSE)
		beginShape()
		vertex(801,801)
		vertex(801,445)
		vertex(769,425)
		vertex(726,414)
		vertex(738,369)
		vertex(610,410)
		vertex(630,430)
		vertex(598,450)
		vertex(590,460)
		vertex(496,569)
		vertex(260,669)
		vertex(420,770)
		vertex(600,801)
		endShape(CLOSE)
	}
	drawBeast(){
			beginShape()
		fill("#cc0000")
		noStroke()
		vertex(720,310)
		vertex(670,313)
		vertex(650,320)
		vertex(560,310)
		vertex(575,340)
		vertex(659,379)
		vertex(655,394)
		vertex(593,420)
		vertex(600,427)
		vertex(636,430)
		vertex(530,500)
		vertex(580,488)
		vertex(480,560)
		vertex(399,570)
		vertex(455,573)
		vertex(430,579)
		vertex(450,583)
		vertex(260,640)
		vertex(360,643)
		vertex(220,650)
		vertex(304,659)
		vertex(245,664)
		vertex(320,675)
		vertex(290,690)
		vertex(330,687)
		vertex(290,720)
		vertex(380,690)
		vertex(345,715)
		vertex(380,700)
		vertex(350,730)
		vertex(420,690)
		vertex(370,788)
		vertex(420,750)
		vertex(402,820)
		vertex(440,780)
		vertex(450,801)
		vertex(801,801)
		vertex(801,450)
		vertex(734,420)
		vertex(750,350)
		endShape(CLOSE)
		beginShape()
		vertex(670,320)
		vertex(710,240)
		vertex(710,280)
		vertex(730,270)
		vertex(770,200)
		vertex(760,260)
		vertex(813,240)
		vertex(726,310)
		vertex(790,298)
		vertex(720,340)
		vertex(830,330)
		vertex(720,390)
		endShape(CLOSE)
		beginShape()
		vertex(580,320)
		vertex(585,385)
		vertex(590,320)
		vertex(595,377)
		vertex(600,320)
		vertex(605,369)
		vertex(610,320)
		vertex(615,376)
		vertex(620,320)
		vertex(625,369)
		vertex(635,320)
		endShape(CLOSE)
		beginShape()
		vertex(599,420)
		vertex(602,398)
		vertex(605,420)
		vertex(608,400)
		vertex(611,420)
		vertex(614,397)
		vertex(617,420)
		vertex(620,405)
		vertex(623,420)
		vertex(625,403)
		vertex(628,420)
		endShape(CLOSE)
	}
}
class Caryllrune{
	constructor(){
	}
	drawHuntersMark(){
		beginShape()
		noFill()
		stroke("#d1e0e0")
		strokeWeight(27)
		vertex(400,60)
		vertex(400,650)
		endShape()
		beginShape()
		vertex(400,390)
		vertex(250,510)
		vertex(320,640)
		endShape()
		beginShape()
		vertex(400,390)
		vertex(550,510)
		vertex(480,640)
		endShape()
		noStroke()
		fill("#d1e0e0")
		ellipse(400,710,64,64)
	}
	drawEye(){
		beginShape()
		noFill()
		stroke("#d1e0e0")
		strokeWeight(27)
		vertex(400,80)
		vertex(150,660)
		vertex(680,280)
		vertex(280,360)
		endShape()
		beginShape()
		vertex(400,80)
		vertex(650,660)
		vertex(120,280)
		vertex(520,360)
		endShape()
		beginShape()
		vertex(150,660)
		vertex(400,80)
		vertex(650,660)
		endShape()
		ellipse(400,400,80,80)
		noStroke()
	}
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		c.drawEye()
	}
	else if(keyCode===DOWN_ARROW){
		c.drawHuntersMark()
	}
}