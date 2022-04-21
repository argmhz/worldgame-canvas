import {inBounds} from '../utils.js';
import Direction from '../direction.js';
import Water from '../tiles/water.js';

export default class Creature {

    constructor(game, tile){
      this.game = game;

      this.tile = tile;

      this.tile.add(this);

      let pos = this.tile.getCenterPosition();
      this.position = {x:pos.x, y:pos.y};
      this.width = 5;
      this.height = 5;

      this.direction = Direction.random();

      this.health = 0;
      this.speedDivider = 4;
      this.strength = 0;
      this.allowedTiles = [];
      this.eatables = [];
    }

    move(timestamp){


      if(!(this.tile.getTileAt(this.direction) instanceof Water)){
        this.direction = Direction.random();
      }

      if(timestamp % 15 == 0)
        this.direction = Direction.random();

      this.position.x += this.direction.x;
      this.position.y += this.direction.y;

    }

    update(timestamp){

      this.move(timestamp);


      if(!inBounds(this.tile,this)){
        this.tile.getArea(1).forEach((nextTile, i) => {
            if(inBounds(this, nextTile)){
              this.tile.remove(this);
              this.tile = nextTile;
              this.tile.add(this);
            }
        });
      }

    }

    draw(ctx){
      ctx.fillStyle = "black";
      ctx.fillRect(this.position.x,this.position.y, 3,3);
    }

}
