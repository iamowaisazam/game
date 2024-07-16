import config from "../config";
import Buttton  from './Shared/Button'
import Text  from './Shared/Text'

class GameOverScene extends Phaser.Scene {
    constructor() {
  
      super("scene-gameOver");
      this.bg = null;
      this.score = 10;
      this.scoreText = null;
    
      this.time = null;
      this.button = null;

    }

    init(data) {
        this.score = data.score || 0;
    }
  
    preload() {
      this.load.image("bg",config.url+"/bg/mybg.jpg");
  
    }
  
    create() {
  
        this.bg = this.add.image(0,0,"bg").setOrigin(0,0);


        // this.time = this.add.text((config.sizes.width / 2 - 100),config.sizes.height / 2 - 70,`Game Over`,{
        //   font:"50px Arial",
        //   fill:"#000000"
        // });


        let Heading = new Text(
          (config.sizes.width / 2 - 100),
          (config.sizes.height / 2 - 70),
          `Game Over`
        );

        Heading.font = "50px Arial";
        Heading.fill = "#000000";
        Heading.add(this);


        let Text1 = new Text(
          (config.sizes.width / 2 - 50),
          (config.sizes.height / 2 - 10),
          `Your Score Is ${this.score}`
        ).add(this);

            
        let Btn = new Buttton(config.sizes.width / 2 - 50,config.sizes.height / 2 + 30,"Start Again");
        Btn.add(this);
        Btn.object.setInteractive();
        Btn.object.on('pointerup', () => {
            this.scene.start('scene-game');
        });
        
    }

    update() {
  

    }


  }

  export default GameOverScene