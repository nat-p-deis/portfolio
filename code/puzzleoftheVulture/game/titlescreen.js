//title screen class
class TitleScreen{
	constructor(x,y){
		this.x=x
		this.y=y
		this.tOver=false
	}
	drawTitle(){
		textAlign(CENTER)
		textSize(60)
		text("Puzzle of the Vulture",150,200,500)
		fill("#004d33")
		rect(300,555,200,100,10)
		fill("#b3ffe6")
		textSize(20)
		textAlign(CENTER)
		text("Start Game",390,600,20)
		
	}
	checkOver(){
        if(mouseX>300&&mouseX<500&&mouseY>555&&mouseY<655){
			this.tOver=true
		}
		else{
			this.tOver=false
		}
    }
}