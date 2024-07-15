import config from "../../config";
import Dino from "./Dino";



class GameScene extends Phaser.Scene {
    constructor() {
  
      super("scene-game");

        this.width = config.sizes.width;
        this.height = config.sizes.height;
        this.playerSpeed = config.speedDown + 50;
        


        this.player = null;
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

          this.load.image("box_01", config.url+"/bg/box_01.png");
          this.load.image("box_02", config.url+"/bg/box_02.png");
          this.load.image("box_03", config.url+"/bg/box_03.png");
          

          this.load.image("bg", config.url+"/bg/mybg.jpg");
          this.load.image("gright", config.url+"/bg/gright.jpg");
          this.load.image("gleft", config.url+"/bg/gleft.jpg");
          this.load.image("coin", config.url+"/bg/coin.png");

          this.load.image("tile_01", config.url+"/bg/tile_01.jpg");
          this.load.image("tile_02", config.url+"/bg/tile_02.jpg");
          this.load.image("tile_03", config.url+"/bg/tile_03.jpg");
          this.load.image("tile_04", config.url+"/bg/tile_03.jpg");

         



          this.load.image("tree1", config.url+"/objects/trees1_4.png");

          this.load.atlas("dino",config.url+"/characters/dino/sprite.png",config.url+"/characters/dino/sprite.json");
          for (let i = 1; i < 10; i++) {
            this.load.image(`king_${i}`,`${config.url}/characters/boy/b${i}.png`);
          }
    

    }
  
    create() {


      // this.group = this.add.group();

      this.physics.world.setBounds(0, 0, config.sizes.width,config.sizes.height);
      this.physics.world.setBoundsCollision(true, true, false, false);
      this.background = this.add.tileSprite(0, 0,  config.sizes.width, config.sizes.height, "bg").setOrigin(0, 0);



      this.dino = new Dino(this);



      // this.followx = this.dino.sprite.x;
      // this.followy = this.dino.sprite.y;
      // this.dino.sprite.play('jump');



      const platforms = this.physics.add.staticGroup();
    

      // let tile_positions_sets = [
      //   {
      //     x:10,
      //     y:10,
      //   },
      // ];

      // tile_positions_sets.forEach(element => {
      //    let tt = this.add.tileSprite(element.x,element.y,31,31,"coin").setOrigin(0,0);
      //    platforms.add(tt);
      // });


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

      //  this.cameras.main.startFollow(this.dino.sprite, true, 1, 0);
      //  this.cameras.main.setScroll(0,0);


    }
  
    update() {

      this.dino.handleInput();

      if(this.dino.sprite.y > 400){
        alert('Game Over');
        this.dino.sprite.setPosition(Phaser.Math.Between(100, 700), 0); 
        this.dino.sprite.setVelocity(0);
        
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



    addBoy(x,y){

      // let myboy = this.physics.add.sprite(x,y,"king_1")
      // myboy.setCollideWorldBounds(true);
      // myboy.body.allowGravity = false;

      // this.anims.create({
      //   key:'manrun',
      //   frames:[
      //     {key:"king_1"},
      //     {key:"king_2"},
      //     {key:"king_3"},
      //     {key:"king_4"},
      //     {key:"king_5"},
      //     {key:"king_6"},
      //     {key:"king_7"},
      //     {key:"king_8"},
      //     {key:"king_9"},
      //   ],
      //   repeat:-1,
      //   frameRate:7,
      // });

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

      // this.group.add(myboy); 

      // Set depth for rendering
      // myboy.play("manrun");

  

      // this.physics.add.collider(myboy,this.dino.sprite,function(boy,dino){
        //  boy.destroy();
      // });

  

    }

  

  

  }

  export default GameScene