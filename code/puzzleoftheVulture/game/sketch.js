/*
IGME-101
Nat Deis
Project 3
12/11/17
*/
//with help from Wyatt Lynch and Joe Monroe
var tiles=[]
var images=[]
var timages=[]
var vimages=[]
var tileSize=80
var x=0
var y=0
var isOneSelect=false
var rows,cols
var switchX
var switchY
var newNum
var oldNum
var tileCount=0
var gameStart=false
var t
var start=false

function preload(){
    for(i=1;i<8;i++){
    	timages.push(loadImage("../images/floors/floor"+i+".png"))    
    }
    images.push(loadImage("../images/items/health.png"))
	for(d=1;d<13;d++){
		vimages.push(loadImage("../images/idleright/ir"+d+".png"))
	}
	for(b=1;b<13;b++){
		vimages.push(loadImage("../images/idleleft/il"+b+".png"))
	}
}
function setup() {
	t=new TitleScreen(0,0)
    createCanvas(800,800)
    background("#000000")
    rows=height/tileSize
    cols=width/tileSize
	for (x=0;x<cols;x++){
        let tempArray=[]
        for(y=0;y<rows;y++){
            tempArray.push(new Map(x*tileSize,y*tileSize,tileSize,x,y,"#b3ffe6",timages))
        }
        tiles.push(tempArray)
	}
	for (y=0;y<rows;y++){
        for (x=0;x<cols;x++){
			tiles[x][y].setimage()
        }
    }
	v=new Vulture(0,160,80,vimages)
	
}
function draw() {
	if(gameStart==true){//shows the title screen and then loads the game
		if(start==false){
			window.alert("Welcome to the puzzle dungeon, Vulture! Try to escape the traps with your life in tact. (WASD to move. Click on two tiles to swap them. Turn all the red tiles blue before reaching the end.)")
			start=true
		}
		frameRate(10)
		tileCount=0
		for (y=0;y<rows;y++){
        	for (x=0;x<cols;x++){
            	tiles[x][y].drawMap()
				tiles[x][y].checkOver()
				if(tiles[x][y].imgNum==0){
					tileCount++
				}
        	}
    	}
		if(tileCount==0){
			if(v.y==560&&v.x==720){
				window.alert("Gods, how did you manage to solve my deadly trial? No matter, I will get you next time...")
				v.x+=v.size
				location.reload()
			}
		}
		else if(tileCount>0){
			if(v.y==560&&v.x==720){
				window.alert("You fool! The puzzle is incomplete!")
				v.x-=v.size
			}
		}
		v.animate()
		v.animationSprite()
		image(images[0],485,0,70)
		textSize(45)
		textAlign(LEFT)
		text("HP = "+v.hp,565,56)
		if(v.hp==0){
			window.alert("you died")
			v.hp=-1
			location.reload()
		}
	}
	else{
		t.drawTitle()
		t.checkOver()
	}
	
}
function mouseClicked(){
	if(t.tOver==true){
		gameStart=true
	}
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++){
            if (tiles[x][y].over){
                if(isOneSelect==true){
                    oldNum=tiles[x][y].imgNum
					tiles[x][y].imgNum=newNum
					tiles[switchX][switchY].imgNum=oldNum
                    isOneSelect=false
				}
                else{
                    newNum=tiles[x][y].imgNum
					switchX=x
					switchY=y
                    isOneSelect=true
                }
            }
        }
    }
}
function keyPressed(){//wasd
	if(keyCode==68){//right
		v.direction=0
		v.moveRight()
	}
	else if(keyCode==65){//left
		v.direction=1
		v.moveLeft()
	}
	else if(keyCode==87){//up
		v.moveUp()
	}
	else if(keyCode==83){//down
		v.moveDown()
	}
	for (y=0;y<rows;y++){
        for (x=0;x<cols;x++){
			if(v.x==tiles[x][y].x&&v.y==tiles[x][y].y){
				if(tiles[x][y].imgNum==2){
					v.hp--
					if(keyCode==68){
						v.x-=v.size
					}
					if(keyCode==65){
						v.x+=v.size
					}
					if(keyCode==87){
						v.y+=v.size
					}
					if(keyCode==83){
						v.y-=v.size
					}
				}
				else if(tiles[x][y].imgNum==3){
					if(v.hp==v.maxHP){}
					else{
						v.hp++
					}
					tiles[x][y].imgNum=5
				}
				else if(tiles[x][y].imgNum==0){
					tiles[x][y].imgNum=1
				}
			}
        }
    }
}