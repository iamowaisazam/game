class Dino {
    constructor(scene) {

      this.scene = scene;

      this.sprite = this.scene.physics.add.sprite(0,0, "dino", 9)
      .setOrigin(0, 0)
      .setScale(0.15, 0.18);
      this.sprite.body.allowGravity = true;
      this.sprite.setCollideWorldBounds(true);

      this.createAnimations();
      this.cursors = this.scene.input.keyboard.createCursorKeys();

      this.sprite.play('jump');
    
    }
  
    createAnimations() {
        
        //fly
        // this.scene.anims.create({
        //     key: "fly",
        //     frames: this.scene.anims.generateFrameNames('dino', { 
        //         start: 1, 
        //         end: 8,
        //         zeroPad: 2, 
        //         suffix: ".png",
        //         prefix: "Dead_",
        //     }),
        //     frameRate: 15,
        //     repeat: 0
        // })

        this.scene.anims.create({
            key: "jump",
            frames: this.scene.anims.generateFrameNames('dino', {
                start: 1, end: 12, zeroPad: 2, prefix: "Jump_", suffix: ".png"
            }),
            frameRate: 10,
        });

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

    }


    handleInput() {


        if(this.sprite.body.touching.down){


            if(this.cursors.left.isDown){
          
                this.sprite.setVelocityX(- 100);
                this.sprite.setFlip(true);
                this.sprite.play("run",true);
        
            
            }else if(this.cursors.right.isDown){
    
                this.sprite.setVelocityX(+ 100);
                this.sprite.setFlip(false);
                this.sprite.play("run",true);
              
    
            }else{
                this.sprite.setVelocityX(0);
                this.sprite.play("idle",true);
            }


            if(this.cursors.up.isDown){
                this.sprite.setVelocityY(- 300);
                this.sprite.setVelocityX(0);
                this.sprite.play("jump",true);
            }


        }else{

           

            if(this.cursors.left.isDown){
          
                this.sprite.setVelocityX(- 100);
                this.sprite.setFlip(true);
                // this.sprite.play("run",true);
        
            
            }else if(this.cursors.right.isDown){
    
                this.sprite.setVelocityX(+ 100);
                this.sprite.setFlip(false);
                // this.sprite.play("run",true);

            }else{
                // this.sprite.setVelocityX(0);
                // this.sprite.play("jump");
            }

        }
        

    


      

    //   console.log(this.sprite.y);












    //Another Things
        // if (this.sprite.body.touching.down) {
        //     console.log('ground');
        //     if(this.cursors.left.isDown || this.cursors.right.isDown){
        //     }else{
        //       this.sprite.play("idle", true);
        //     }
        // }else{
            // // this.sprite.play("run", true);
        //     console.log('air');
        // }


    }

    // moveLeft() {

    //     if (!this.sprite.body.touching.down) {
    //         console.log('down_or_Not');
    //     }else{
    //         this.sprite.play("run", true);
    //     }

    //     this.sprite.setVelocityX(-160);
    //     this.sprite.setFlip(true);
    //     // this.sprite.play("run", true);
    //   }
    
    //   moveRight() {
    //     this.sprite.setVelocityX(160);
    //     this.sprite.setFlip(false);
    //     this.sprite.play("run", true);
    //   }
    
    //   stopMovementL() {

    //     if(this.cursors.right.isDown){

    //     }else{
    //         this.sprite.setVelocityX(0);
    //         this.sprite.play("idle", true);
    //     }

    //   }

    //   stopMovementR() {

    //     if(this.cursors.left.isDown){
    //         console.log('left_detect');
    //     }else{
    //         this.sprite.setVelocityX(0);
    //         this.sprite.play("idle", true);
    //     }

    //   }
    
    //   jump() {
    //     if (this.sprite.body.touching.down) {
    //       this.sprite.setVelocityY(-300);
    //       this.sprite.play("jump");
    //     }
    //   }


  }
  
  export default Dino;