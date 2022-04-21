import Fish from './creatures/fish.js';

import Water from './tiles/water.js';

export default class CreatureManager {

  constructor(game) {
    this.game = game;
  }

  initialize(){

    let waterTiles = this.game.map.getType(Water);

    for (var i = 0; i < 1000; i++) {
      this.game.add(new Fish(this.game,waterTiles[Math.floor(Math.random()*waterTiles.length)]));
    }



  }


}
