import Fish from './creatures/fish.js';

import Water from './tiles/water.js';

export default class CreatureManager {

  constructor(game) {
    this.game = game;
  }

  initialize(){

    let waterTiles = this.game.map.getType(Water);
    // console.log(this.game.map.get(2,3));

    // this.game.add(new Fish(this.game,this.game.map.get(3,2)));
    // this.game.add(new Fish(this.game,this.game.map.get(2,3)));
    for (var i = 0; i < 100; i++) {
      this.game.add(new Fish(this.game,waterTiles[Math.floor(Math.random()*waterTiles.length)]));
    }



  }


}
