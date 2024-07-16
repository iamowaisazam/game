import config from "../config";
import Button from "./Shared/Button";
import Text from "./Shared/Text";

class DashboardScene extends Phaser.Scene {
    constructor() {
  
      super("DashboardScene");
      this.bg = null;
      this.score = 10;
      this.scoreText = null;
      this.timeRemaining = 2;
      this.time = null;
      this.button = null;

    }
    
    preload() {
      this.load.image("bg",config.url+"/bg/mybg.jpg");  
    }
  
    create() {
  
      this.bg = this.add.image(0,0,"bg").setOrigin(0,0);
      
      let Text1 = new Text(
        (config.sizes.width / 2 - 195),
        config.sizes.height / 2 - 70,
       config.title,
      );
      Text1.font = "40px Arial",
      Text1.fill = "#000000";
      Text1.add(this);

      let Text2 = new Text(
        190,
        config.sizes.height / 2 - 10,
        config.credit,
      );
      Text2.font = "25px Arial",
      Text2.fill = "#000000";
      Text2.add(this);
      Text2.object.setPadding(0, 5, 0, 5);

      let btn = new Button(
        config.sizes.width / 2 - 70,
        config.sizes.height / 2 + 40,
        'Start Game',
      );
      btn.add(this);

      btn.object.setInteractive();
      btn.object.on('pointerup', () => {
            this.scene.start('scene-game');
      });
  
      
  }

    update() {
  

    }


  }

  export default DashboardScene