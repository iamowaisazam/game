class Button {

    x;
    y;
    text;
    object;

    constructor(x,y,text) {

        this.x = x;
        this.y = y;
        this.text = text;
    }

    
    add(scene){

       this.object = scene.add.text(this.x,this.y,this.text, {
            fontFamily: 'Arial',
            fontSize: '32px',
            backgroundColor: 'black',
            padding: {
              x: 20,
              y: 10
            },
            color: '#ffffff'
        });
    }

}


export default Button