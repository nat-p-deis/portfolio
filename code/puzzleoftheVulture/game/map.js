//class that makes the map
class Map{
    constructor(x,y,size,r,c,color,imList){
        this.x=x
		this.y=y
		this.size=size
		this.rowIndex=r
		this.colIndex=c
		this.color=color
        this.over=false
		this.imageList=imList
		this.imgNum=0
		this.imgArray=[0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]//multiple numbers weigh the chances
		this.selected=false
		this.next=[]
    }
	setimage(){
		if(this.y==0||this.x==0||this.y==720||this.x==720){
			if(this.x==0&&this.y==160||this.x==720&&this.y==560){
				this.imgNum=5
			}
			else{
				this.imgNum=6
			}
		}
		else{
			if(this.colIndex>=2&&this.rowIndex>=5&&this.colIndex<=9&&this.rowIndex<=6){
				this.imgNum=random(this.imgArray)
			}
			if(this.colIndex>=3&&this.rowIndex>=7&&this.colIndex<=6&&this.rowIndex<=9){
				this.imgNum=random(this.imgArray)
			}
			if(this.colIndex>=1&&this.rowIndex>=1&&this.colIndex<=3&&this.rowIndex<=6){
				this.imgNum=random(this.imgArray)
			}
			if(this.colIndex>=5&&this.rowIndex>=1&&this.colIndex<=9&&this.rowIndex<=6){
				this.imgNum=random(this.imgArray)
			}
		}
	}
    drawMap(){
		fill(this.color)
		stroke("#FFFFFF")
        rect(this.x,this.y,this.size,this.size)
		image(this.imageList[this.imgNum],this.x,this.y,this.size,this.size);
    }
	nextTile() {
        this.imgNum++;
        if(this.imgNum==11){
            this.imgNum=0;
        }
        this.drawMap();
    }
    checkOver(){
        if(mouseX>this.x&&mouseX<this.x+this.size&&mouseY>this.y&&mouseY<this.y+this.size){
			this.over=true
		}
		else{
			this.over=false
		}
    }
    switch(finalImgnum){
        var currentImagenum=this.imgNum
        this.imgNum=finalImgnum
        this.drawMap()
        return currentImagenum
    }
}