/*
IGME-101
Nat Deis
Proj1Turtles
9/26/17
*/ 

//title of piece: Frenzy
//with help from Wyatt Lynch
var myT;

function setup() {
    createCanvas(800, 800)
    background("#130606")

    turtleSetup();

    myT = new Turtle(20, 20);
    
    myT.setWeight(25)
    myT.setPenColor("#000000")
    myT.rays(546,328,700,15)
    myT.setWeight(1)
    
    //shapes
    myT.setPenColor("#602020")
    myT.randompolygon(50)
    
    myT.movepen(551,324)
    myT.setPenColor("#4d1919")
    myT.arcspiral(2,200)
    myT.setPenColor("#732626")
    myT.movepen(500,300)
    myT.coolspiral(2,50)
    
    //eye
    myT.setPenColor("#f2d9d9")
    myT.movepen(555.5,296)
    myT.setWeight(23.5)
    myT.circle(30,360)
    
    myT.setPenColor("#f9ecec")
    myT.movepen(556,294)
    myT.setWeight(16)
    myT.circle(30,360)
    
    myT.movepen(549,326)
    myT.setPenColor("#000000")
    myT.setWeight(2)
    myT.arcspiral(0.4,0.8)
    
    myT.movepen(558,304)
    myT.setPenColor("#1f3d7a")
    myT.setWeight(10)
    myT.circle(23,360)
    
    myT.setPenColor("#ffffff")
    myT.movepen(561,296)
    myT.setWeight(8)
    myT.circle(30,360)
    
    //spikes
    //I tried to make a function for this,
    //but it didn't quite work the way I wanted it to
    myT.setPenColor("#130606")
    myT.setWeight(5)
    
    myT.setAngle(0)
    myT.movepen(0,140)
    myT.right(20.2)
    myT.forward(450)
    myT.right(170)
    myT.forward(450)
    
    myT.movepen(0,320)
    myT.setAngle(0)
    myT.right(3.5)
    myT.forward(350)
    myT.right(171)
    myT.forward(430)
    
    myT.movepen(0,30)
    myT.setAngle(0)
    myT.right(27)
    myT.forward(340)
    myT.left(170)
    myT.forward(350)
    
    myT.movepen(250,0)
    myT.setAngle(0)
    myT.right(42)
    myT.forward(134)
    myT.left(160)
    myT.forward(134)
    
    myT.movepen(380,0)
    myT.setAngle(0)
    myT.right(55.5)
    myT.forward(165)
    myT.left(155)
    myT.forward(160)
    
    myT.movepen(196,0)
    myT.setAngle(0)
    myT.right(43.5)
    myT.forward(320)
    myT.right(170)
    myT.forward(500)
    
    myT.movepen(0,80)
    myT.setAngle(0)
    myT.right(29)
    myT.forward(130)
    myT.right(170)
    myT.forward(130)
    
    myT.movepen(550,0)
    myT.setAngle(0)
    myT.right(93)
    myT.forward(200)
    myT.right(160)
    myT.forward(200)
    
    myT.movepen(330,0)
    myT.setAngle(0)
    myT.right(52)
    myT.forward(60)
    myT.left(165)
    myT.forward(70)
    
    myT.movepen(0,416)
    myT.setAngle(0)
    myT.left(4)
    myT.forward(150)
    myT.right(170)
    myT.forward(170)
    
    myT.movepen(0,250)
    myT.setAngle(0)
    myT.right(10)
    myT.forward(170)
    myT.right(175)
    myT.forward(170)
    
    myT.movepen(0,285)
    myT.setAngle(0)
    myT.right(5.5)
    myT.forward(250)
    myT.right(175)
    myT.forward(250)
    
    myT.movepen(0,475)
    myT.setAngle(0)
    myT.left(12)
    myT.forward(340)
    myT.right(170)
    myT.forward(400)
    
    myT.movepen(0,569)
    myT.setAngle(0)
    myT.left(22.5)
    myT.forward(289)
    myT.right(176)
    myT.forward(400)
    
    myT.movepen(0,614)
    myT.setAngle(0)
    myT.left(22)
    myT.forward(200)
    myT.right(165)
    myT.forward(300)
    
    myT.movepen(0,704)
    myT.setAngle(0)
    myT.left(34)
    myT.forward(569)
    myT.right(169)
    myT.forward(600)
    
    myT.movepen(120,800)
    myT.setAngle(0)
    myT.left(47)
    myT.forward(325)
    myT.right(173)
    myT.forward(400)
    
    myT.movepen(205,800)
    myT.setAngle(0)
    myT.left(50)
    myT.forward(161)
    myT.right(158)
    myT.forward(200)
    
    //this.function(int(random(perameter)))
    //perameter can be restricted between two numbers
    //eg; (5,9) restricts to integers between 5 and 8
}
function draw() {
    
    //comment out for static piece
    myT.setPenColor("#b30000")
    myT.setWeight(random(0.1,1))
    myT.randompolygon(1)
    myT.left(random(1,270))

}
function turtleSetup() {
    Turtle.prototype.square = square;
    Turtle.prototype.tri = tri;
    Turtle.prototype.polygon = polygon;
    Turtle.prototype.tris = tris;
    Turtle.prototype.polyincrease = polyincrease
    Turtle.prototype.spiral = spiral
    Turtle.prototype.flower = flower
    Turtle.prototype.movepen = movepen;
    Turtle.prototype.rays = rays;
    Turtle.prototype.circle = circle;
    Turtle.prototype.coolspiral = coolspiral;
    Turtle.prototype.arcspiral = arcspiral;
    Turtle.prototype.randompolygon = randompolygon
    Turtle.prototype.spike = spike;
}
function square(){
    this.penDown()
    this.setAngle(0)
    this.right(180)
    this.forward(20)
    this.right(90)
    this.forward(20)
    this.right(90)
    this.forward(20)
    this.right(90)
    this.forward(20)
}
function tri(){
    this.penDown()
    this.setAngle(60)
    this.forward(30)
    this.right(120)
    this.forward(30)
    this.right(120)
    this.forward(30)
    this.penUp()
}
function polygon(sides, distance){
    //input the number of sides
    //then the length of each side
    var angle = 180-(((sides-2)*180)/sides)
    var count=1
    while (count<=sides){
        this.penDown()
        this.forward(distance)
        this.right(angle)
        this.penUp()
        count = count+1
    }
}
function tris(num){ 
    //s=number of triangles
    for(count=0;count<num;count++){
        this.tri();
        this.setAngle(0)
        this.forward(40);
    }
}
function polyincrease(sides,distance,num){
    //sides = number of sides
    //distance = length of sides
    //num = instances of shape
    for(count=0;count<num;count++){
        this.setAngle(0)
        this.polygon(sides,distance);
        this.forward(30);
        distance = distance + 10
    }
}
function spiral(distance,num){
    //angle = angle of turn at each point
    //distance = amount turtle travels before turn
    //num = total turns in spiral
    for(count=0;count<num;count++){
        this.penDown()
        this.forward(distance)
        this.right(45)
        distance = distance + 2
    }
    
}
function flower(sides,distance,num){
    for(count=0;count<num;count++){
        this.penDown()
        this.polygon(sides,distance)
        this.right(45)
    }
    
}
function movepen(ex,why){
    //I'm being facetious
    //ex = X coordinate
    //why = Y coordinate
    this.penUp()
    this.moveTo(ex,why)
    this.penDown()
}
function rays(ex,why,length,lines){
    for(count=0;count<lines;count++){
        this.movepen(ex,why)
        this.right(360/lines)
        this.forward(length)
    }
    
}
function circle(r,arc){
    //arc says how far to go before it stops
    var count = 1
    while(count<=arc){
        this.forward((2*(r)*(3.1415926))/360)
        this.right(1)
        count=count+1
    }
}
function coolspiral(start,cycles){
    //start = start radius
    var count = 0
    while(count<=360*cycles){
        this.forward(((2*(start)*(3.1415926))/360)+int(count/1000))
        this.right(1)
        count=count+1
    }
}
function arcspiral(start,cycles){
    //start = start radius
    var count = 0
    while(count<=360*cycles){
        this.forward((2*(start+count)*(3.1415926))/360)
        this.right(10)
        count=count+1
    }
}
function randompolygon(num){
    //num = how many polygons appear
    for(count=0;count<num;count++){
        this.movepen(random(-10,810),random(-10,810))
        this.polygon(int(random(3,6)),int(random(20,40)))
    }
}
function spike(x,y,turn1,distance,turn2){
    //x,y,turn,forward,turn
    this.moveto(x,y)
    this.setAngle(0)
    this.right(turn1)
    this.forward(distance)
    this.right(turn2)
    this.forward(distance)
}