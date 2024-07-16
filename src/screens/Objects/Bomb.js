class Dino {

    x;
    y;
    text;
    object;
    img


    constructor(x,y,text) {

        this.x = x;
        this.y = y;
        this.text = text;

        
    }

    add(scene){

        let bomb = scene.physics.add.sprite(this.x, this.y, this.img,1).setOrigin(0,0).setScale(0.20,0.20);
        bomb.body.allowGravity = false;
  
        this.anims.create({
          key: "explode",
          frames: this.anims.generateFrameNames('bomb', {
              start: 0, end: 7,
          }),
          frameRate: 25,
          // repeat: 1
      });
  
      bomb.play('explode');

       this.object = scene.add.text(this.x,this.y,this.text, {
            font:this.font,
            fill:this.fill,
        });
    }







}