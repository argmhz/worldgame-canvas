import Water from './tiles/water.js';
import Grass from './tiles/grass.js';
import Beach from './tiles/beach.js';
import Forest from './tiles/forest.js';
import Jungle from './tiles/jungle.js';
import Hill from './tiles/hill.js';
import Mountain from './tiles/mountain.js'
import Snow from './tiles/snow.js';

import SimplexNoise from 'simplex-noise';

export default class MapManager {

  constructor(game){
    this.gen = new SimplexNoise();
    this.tiles = new Map();
    this.game = game;
    this.tileSize = 10;
    this.rows = Math.floor(game.height / this.tileSize);
    this.cols = Math.floor(game.width / this.tileSize);

    for (var y = 0; y < this.rows; y++) {
      for (var x = 0; x < this.cols; x++) {
        let nx = x/this.tileSize - 0.5, ny = y/this.tileSize - 0.5
        let e = this.noise(.25*nx,.25*ny);
        // e = Math.round(e * 12) / 12;
        this.tiles.set(x+'-'+y, this.biome(e,game,x,y));
      }
    }
  }

  get(x,y){
    return this.tiles.get(x+'-'+y);
  }

  getType(type){
    let entities = []
    this.tiles.forEach((e) => {
      if(e.constructor.name === type){
        entities.push(e)
      }
    })
    return entities;
  }

  noise(nx, ny) {
    return this.gen.noise2D(nx, ny) / 2 + .35;
  }

  biome(e,game,x,y) {

  if (e < 0.1) return new Water(game,x,y, this.tileSize);
  else if (e < 0.2) return new Beach(game,x,y, this.tileSize);
  else if (e < 0.3) return new Grass(game,x,y, this.tileSize);
  else if (e < 0.4) return new Forest(game,x,y, this.tileSize);
  else if (e < 0.5) return new Jungle(game,x,y, this.tileSize);
  else if (e < 0.7) return new Hill(game,x,y, this.tileSize);
  else if (e < 0.9) return new Mountain(game,x,y, this.tileSize);

  else return new Snow(game,x,y, this.tileSize);
  }

  initialize(){
    this.tiles.forEach((item, i) => {
        this.game.add(item);
    });
  }

}
