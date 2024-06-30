import config from "../../config";
import Dino from "./Dino";



class GameScene extends Phaser.Scene {
    constructor() {
  
      super("scene-game");
      
      this.player = null;
      this.playerSpeed = config.speedDown + 50;
      this.cursor = null;

      this.apple = null;
      this.king = null;
      this.boy = null;
      this.dino = null;
      this.followx = 0;
      this.followy = 0;
      this.group = null;

    }
  
    preload() {
      
      this.load.image("bg", config.url+"/bg/bg1.png");
      this.load.atlas("dino",config.url+"/characters/dino/sprite.png",config.url+"/characters/dino/sprite.json");
      for (let i = 1; i < 10; i++) {
        this.load.image(`king_${i}`,`${config.url}/characters/boy/b${i}.png`);
      }
    

    }
  
    create() {


      this.group = this.add.group();

      this.physics.world.setBounds(0, 0, 1600, 400);
      this.background = this.add.tileSprite(0, 0, 1600, this.scale.height, "bg").setOrigin(0, 0);
      // this.cameras.main.setPosition(100, 50);
      // this.cameras.main.setZoom(1); // Adjust the zoom level as needed


   
      // this.physics.world.setBounds(0, 0, 2000, 2000);
      // this.cameras.main.setBounds(0, 0, 2000, 2000);

      this.dino = new Dino(this);
      this.followx = this.dino.sprite.x;
      this.followy = this.dino.sprite.y;
      this.dino.sprite.play('fly');

      this.addBoy(50,250);

      setTimeout(() => {
        this.addBoy(50,300);
      }, 1000);

      setTimeout(() => {
        this.addBoy(500,300);
      }, 2000);

      setTimeout(() => {
        this.addBoy(500,300);
      }, 3000);


    
       this.cameras.main.startFollow(this.dino.sprite, true, 1, 0);
       this.cameras.main.setScroll(0,0);


    }
  
    update() {

      this.dino.handleInput();
      this.followx = this.dino.sprite.x;

        // this.bg.tilePositionX += 1;
        // this.bg.tilePositionY += 1;

        // this.background.tilePositionX += 1;
        // this.background.tilePositionY += 1;


        this.group.children.iterate(child => {
          this.add.tween({
              targets:child,
              x:this.followx,
              y:this.followy,
              duration:3000,
              repeat:0
            });

        });
  
   
    }

    addBoy(x,y){

      let myboy = this.physics.add.sprite(x,y,"king_1")
      myboy.setCollideWorldBounds(true);
      myboy.body.allowGravity = false;

      this.anims.create({
        key:'manrun',
        frames:[
          {key:"king_1"},
          {key:"king_2"},
          {key:"king_3"},
          {key:"king_4"},
          {key:"king_5"},
          {key:"king_6"},
          {key:"king_7"},
          {key:"king_8"},
          {key:"king_9"},
        ],
        repeat:-1,
        frameRate:7,
      });

    //  let tween = this.add.tween({
    //     targets:myboy,
    //     x:700,
    //     duration:10000,
    //     repeat:-1,
    //     yoyo:true,
    //     onYoyo:() => {
    //       myboy.setFlip(true);
    //     },
    //     onRepeat:() => {
    //       myboy.setFlip(false);
    //     }
    //   });

      // let tween = this.add.tween({
      //   targets:myboy,
      //   x:this.followx,
      //   duration:10000,
      //   repeat:0
      // });

      this.group.add(myboy); 

      // Set depth for rendering
      myboy.play("manrun");

  

      // this.physics.add.collider(myboy,this.dino.sprite,function(boy,dino){
        //  boy.destroy();
      // });

  

    }

  

  

  }

  export default GameScene