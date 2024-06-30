class Dino {
    constructor(scene) {

      this.scene = scene;
      this.sprite = this.scene.physics.add.sprite(200,250, "dino", 9)
      .setOrigin(0, 0)
      .setScale(0.17, 0.25);

    //   this.sprite.setSize(this.sprite.width * 0.6, this.sprite.height * 0.8, false)
    //   .setOffset(100, 50);

      this.sprite.body.allowGravity = false;
      this.sprite.setCollideWorldBounds(true);
      this.createAnimations();

      this.cursors = this.scene.input.keyboard.createCursorKeys();
      this.spacebar = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


    }
  
    createAnimations() {

        this.scene.anims.create({
            key: "fly",
            frames: this.scene.anims.generateFrameNames('dino', { 
                start: 1, 
                end: 8,
                zeroPad: 2, 
                suffix: ".png",
                prefix: "Dead_",
            }),
            frameRate: 15,
            repeat: 0
        })

        // dino
        this.scene.anims.create({
            key: "idle",
            frames: this.scene.anims.generateFrameNames("dino", {
                start: 1,
                end: 10,
                prefix: "Idle_",
                zeroPad: 2,
                suffix: ".png",
            }),
            frameRate: 15,
            repeat: -1
        });
        this.scene.anims.create({
            key: "run",
            frames: this.scene.anims
                .generateFrameNames('dino', {
                    start: 1, end: 8, zeroPad: 2,
                    prefix: "Run_", suffix: ".png"
                }),
            frameRate: 8,
            repeat: -1
        });
        this.scene.anims.create({
            key: "jump",
            frames: this.scene.anims.generateFrameNames('dino', {
                start: 1, end: 12, zeroPad: 2, prefix: "Jump_", suffix: ".png"
            }),
            frameRate: 10,
        });

    }

    handleInput() {
        
        if(this.cursors.left.isDown){
          
            this.sprite.setVelocityX(- 100);
            this.sprite.setVelocityY(0);
            this.sprite.play("run",true);
            this.sprite.setFlip(true);
        
        }else if(this.cursors.right.isDown){

          this.sprite.setVelocityX(+ 100);
          this.sprite.setVelocityY(0);
          this.sprite.play("run",true);
          this.sprite.setFlip(false);

        }else if(this.cursors.up.isDown){

            this.sprite.setVelocityY(- 50);
            this.sprite.setVelocityX(0);
            this.sprite.play("run",true);
        
        }else if(this.cursors.down.isDown){

            this.sprite.setVelocityY(+ 50);
            this.sprite.setVelocityX(0);
            this.sprite.play("run",true);

        }else if(this.spacebar.isDown){

            // this.sprite.setVelocityY(+ 50);
            // this.sprite.setVelocityX(0);
            // this.sprite.play("fly",true);

        }else{

          this.sprite.setVelocityX(0);
          this.sprite.setVelocityY(0);
          this.sprite.play("idle",true);
        }
    }

  }
  
  export default Dino;