import {inBounds} from '../utils.js';
import Direction from '../direction.js';
import * as Tiles from '../tiles/index.js';

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

      this.health = 400;
      this.maxHealth = 1000;
      this.speedDivider = 4;
      this.strength = 10;
      this.allowedTiles = [];
      this.eatables = [];
      this.load();
    }

    load(){}

    isHungry(){
      return this.health < (this.maxHealth*.5);
    }

    attach(entity){
      entity.health -= Math.random()*this.strength;
    }

    eat(entity){
      this.health = Math.random()*entity.maxHealth

      this.tile.remove(entity);
      this.game.remove(entity);
    }

    seekFood(){
      // has this tile food?
      this.tile.entities.forEach(entity => {
        if(entity !== this) {
          if(entity.isDead()){
            this.eat(entity);
          }
          else {
            this.attach(entity);
          }
        }
      });

      this.move()
      // has any other food in the area

      // else move a long
    }

    seekMaid(){}

    isDead(){
      return (this.health < 0);
    }

    move(timestamp){

      if(!(this.tile.getTileAt(this.direction) instanceof Tiles.Water)){
        this.direction = Direction.random();
      }

      if(timestamp % 15 == 0)
        this.direction = Direction.random();

      this.position.x += this.direction.x;
      this.position.y += this.direction.y;

    }

    update(timestamp){

      if(this.isHungry()){
        this.seekFood();
      }
      else {
        this.seekMaid();
      }
      // this.move(timestamp);


      if(!inBounds(this.tile,this)){
        this.tile.getArea(1).forEach((nextTile, i) => {
            if(inBounds(this, nextTile)){
              this.tile.remove(this);
              this.tile = nextTile;
              this.tile.add(this);
            }
        });
      }

      this.health--;

      if(this.health < 0){
        this.tile.remove(this);
        this.game.remove(this);
      }
    }

    draw(ctx){
      ctx.fillStyle = "black";
      ctx.fillRect(this.position.x,this.position.y, 3,3);
    }

}
