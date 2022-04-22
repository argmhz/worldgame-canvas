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

  remove(entity){
    this.entities = this.entities.filter((item) => item !== entity);
  }

  add(object){
    this.entities.push(object);
  }

  renderInfo(){
    this.ctx.fillStyle = 'rgba(0,0,0,.3)';
    this.ctx.strokeStyle = "black";
    this.ctx.rect(10, 10, 150, 40);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.fillStyle = "white";
    this.ctx.fillText("Animals: " + (this.entities.length - this.map.tiles.size), 25,25);
    this.ctx.fillText("Entities: " + this.entities.length, 25, 40)
  }

  render(timestamp){

    this.entities.forEach((entity, i) => {
      if(entity.update) entity.update(timestamp);
      entity.draw(this.ctx);
    });


    this.renderInfo();

  }

}
