import MapManager from './mapmanager.js';
import CreatureManager from './creaturemanager.js';
export default class Game {

  constructor(canvas, ctx) {
    this.ctx = ctx;
    this.width = canvas.width;
    this.height = canvas.height;

    this.map = new MapManager(this);
    this.creatures = new CreatureManager(this);

    this.objects = [];
    this.map.initialize();
    this.creatures.initialize();
  }

  addObject(object){
    this.objects.push(object);
  }

  render(timestamp){
    for (var i = 0; i < this.objects.length; i++) {
      if(this.objects[i].update) this.objects[i].update(timestamp);
      this.objects[i].draw(this.ctx);
    }
  }

}
