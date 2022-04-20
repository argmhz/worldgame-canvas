import {inBounds} from '../utils.js';
import Direction from '../direction.js';

export default class Creature {

    constructor(game, tile){
      this.game = game;

      this.tile = tile;
      this.tile.add(this);

      let pos = this.tile.getCenter();
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

    move(t){

      if(t % this.speedDivider == 0){
        this.position.x += this.direction.x*this.speed;
        this.position.y += this.direction.y*this.speed;
      }


    }

    update(timestamp){

      this.move();

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
      ctx.fillRect(this.position.x,this.position.y, 5,5);
    }

}
