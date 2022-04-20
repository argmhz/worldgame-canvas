import MapManager from './mapmanager.js';
import CreatureManager from './creaturemanager.js';
export default class Game {

  constructor(canvas, ctx) {

    this.ctx = ctx;
    this.width = canvas.width;
    this.height = canvas.height;

    this.map = new MapManager(this);
    this.creatures = new CreatureManager(this);

    this.entities = [];

    this.map.initialize();
    this.creatures.initialize();
  }

  add(object){
    this.entities.push(object);
  }

  render(timestamp){
    for (var i = 0; i < this.entities.length; i++) {
      if(this.entities[i].update) this.entities[i].update(timestamp);
      this.entities[i].draw(this.ctx);
    }
  }

}
