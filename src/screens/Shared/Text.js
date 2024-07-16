class Text {

    x;
    y;
    text;
    object;
    font = "25px Arial";
    fill = "#000000";

    constructor(x,y,text) {

        this.x = x;
        this.y = y;
        this.text = text;
    }



    add(scene){

       this.object = scene.add.text(this.x,this.y,this.text, {
            font:this.font,
            fill:this.fill,
        });
    }

}


export default Text