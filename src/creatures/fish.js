import Creature from './creature.js';
import * as Tiles from '../tiles/index.js';
import * as Creatures from '../creatures/index.js';
import Direction from '../direction.js';


export default class Fish extends Creature {

  load(){
    this.health = 50;
    this.maxHealth = 100;
    this.speedDivider = 4;
    this.strength = 10;
    this.allowedTiles = [
      Tiles.Water
    ];
    this.eatables = [
      Creatures.Fish
    ];

  }

  move(timestamp){
    //
    if(!(this.tile.getTileAt(this.direction) instanceof Tiles.Water)){
      this.direction = Direction.random();
    }
    //
    if(timestamp % 15 == 0)
      this.direction = Direction.random();

    super.move();
  }

  draw(ctx){
    ctx.fillStyle = "gray";
    ctx.fillRect(this.position.x,this.position.y, 2,2);

  }

}
