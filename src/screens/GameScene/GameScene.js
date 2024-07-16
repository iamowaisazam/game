import config from "../../config";
import Dino from "./Dino";



class GameScene extends Phaser.Scene {
    constructor() {
  
      super("scene-game");

        this.width = config.sizes.width;
        this.height = config.sizes.height;
        this.playerSpeed = config.speedDown + 50;
        
       
        this.coins = null;
        this.score = {
          score:0,
          total:6,
          scoreText:null,
        };

        this.moneyEmitter = null;

        this.coinsScore = 0;

        this.player = null;
        this.cursor = null;
        this.apple = null;
        this.king = null;
        this.boy = null;
        this.dino = null;
        this.followx = 0;
        this.followy = 0;
        this.group = null;

        console.log('====================================');
        console.log('Constructure');
        console.log('====================================');


    }
  
    preload() {

          //Background
          this.load.image("bg", config.url+"/bg/mybg.jpg");
          
          //Boxes
          this.load.image("box_01", config.url+"/bg/box_01.png");
          this.load.image("box_02", config.url+"/bg/box_02.png");
          this.load.image("box_03", config.url+"/bg/box_03.png");
          
          //Tiles
          this.load.image("gright", config.url+"/bg/gright.jpg");
          this.load.image("gleft", config.url+"/bg/gleft.jpg");
          this.load.image("tile_01", config.url+"/bg/tile_01.jpg");
          this.load.image("tile_02", config.url+"/bg/tile_02.jpg");
          this.load.image("tile_03", config.url+"/bg/tile_03.jpg");
          this.load.image("tile_04", config.url+"/bg/tile_03.jpg");
         
          //Coin
          this.load.image("coin", config.url+"/bg/coin.png");

          this.load.spritesheet('bomb', config.url+"/objects/bomb.png", {
            frameWidth: 512,
            frameHeight: 512
        });


          //Dino
          this.load.atlas("dino",config.url+"/characters/dino/sprite.png",config.url+"/characters/dino/sprite.json");

    }
  
    create() {

      console.log(this.score);

      // this.group = this.add.group();

      this.physics.world.setBounds(0, 0, config.sizes.width,config.sizes.height);
      this.physics.world.setBoundsCollision(true, true, false, false);
      this.background = this.add.tileSprite(0, 0,  config.sizes.width, config.sizes.height, "bg").setOrigin(0, 0);

      this.dino = new Dino(this);

      this.createTiles();
      this.createCoins();
      this.updateScore();

    //   let bomb = this.physics.add.sprite(145, 120, 'bomb',1).setOrigin(0,0).setScale(0.20,0.20);
    //   bomb.body.allowGravity = false;

    //   this.anims.create({
    //     key: "explode",
    //     frames: this.anims.generateFrameNames('bomb', {
    //         start: 0, end: 7,
    //     }),
    //     frameRate: 25,
    //     // repeat: 1
    // });

    // bomb.play('explode');

      this.moneyEmitter = this.add.particles(0,0,"coin",{
        x: 0,
        y: 0,
        speed: 200,
        gravityX:0,
        quantity:10,
        scale:0.50,
        duration:100,
        emitting:false,
      });



      //  this.cameras.main.startFollow(this.dino.sprite, true, 1, 0);
      //  this.cameras.main.setScroll(0,0);


    }
  
    update() {

    
      this.dino.handleInput();
      if(this.dino.sprite.y > 400){

        this.scene.start("scene-gameOver", { score: this.score.score });
        this.shutdown();    

      }

      if(this.score.score == 6){
          
        this.scene.start("scene-gameOver", { score: this.score.score });
        this.shutdown();    
      }



          // this.followx = this.dino.sprite.x;

            // this.bg.tilePositionX += 1;
            // this.bg.tilePositionY += 1;

            // this.background.tilePositionX += 1;
            // this.background.tilePositionY += 1;


            // this.group.children.iterate(child => {
            //   this.add.tween({
            //       targets:child,
            //       x:this.followx,
            //       y:this.followy,
            //       duration:3000,
            //       repeat:0
            //     });

            // });
  
   
    }

    shutdown() {

        this.score.scoreText.destroy();
        this.score = {
          score:0,
          total:0,
          scoreText:null,
        };

   }


    createTiles(){

      const platforms = this.physics.add.staticGroup();
      let g1 = this.add.tileSprite(585,390,166,110,'gright').setOrigin(0,0);
      let g2 = this.add.tileSprite(0,this.height - 110,275,110,'gleft').setOrigin(0,0);
      let tile_01 = this.add.tileSprite(110,220,165,55,'tile_01').setOrigin(0,0);
      let tile_02 = this.add.tileSprite(424,101,165,55,'tile_02').setOrigin(0,0);
      let tile_03 = this.add.tileSprite(695,175,54,56,'tile_03').setOrigin(0,0);
      let tile_04 = this.add.tileSprite(430,280,54,56,'tile_04').setOrigin(0,0);

      let box_01 = this.add.tileSprite(0,298,49,92,'box_01').setOrigin(0,0);
      let box_02 = this.add.tileSprite(49,344,50,46,'box_02').setOrigin(0,0);
      let box_03 = this.add.tileSprite(643,344,50,46,'box_03').setOrigin(0,0);

      platforms.add(g1);
      platforms.add(g2);
      platforms.add(tile_01);
      platforms.add(tile_02);
      platforms.add(tile_03);
      platforms.add(tile_04);
      
      platforms.add(box_01);
      platforms.add(box_02);
      platforms.add(box_03);
      
      this.physics.add.collider(this.dino.sprite, platforms);

    }

    createCoins(){

      this.coins = this.physics.add.staticGroup();
      let coin_positions_sets = [
        {
          x:41,
          y:37,
        },
        {
          x:471,
          y:276,
        },
        {
          x:520,
          y:85,
        },
        {
          x:740,
          y:158,
        },
        {
          x:332,
          y:146,
        },
        {
          x:685,
          y:340,
        },
        
      ];

      coin_positions_sets.forEach(element => {
         let cc = this.add.tileSprite(element.x - 31,element.y - 31,31,31,"coin").setOrigin(0,0);
         this.coins.add(cc);
      });

      this.physics.add.overlap(this.dino.sprite,this.coins,function(player,coin){
        this.moneyEmitter.emitParticleAt(coin.x, coin.y); 
        coin.destroy();
        this.score.score =  this.score.score + 1;
        this.updateScore();
      },null,this);

    }

    updateScore(){

      if(this.score.scoreText == null){
          this.score.total = this.coins.children.entries.length;
          this.score.scoreText  = this.add.text(this.width - 10,10,`Score: ${this.score.score} / ${this.score.total}`,{
            font:"25px Arial",
            fill:"#000000",
          }).setOrigin(1, 0);
          return false;
      }

      this.score.scoreText.setText(`Score: ${this.score.score} / ${this.score.total}`);
      
    }

  }

  export default GameScene