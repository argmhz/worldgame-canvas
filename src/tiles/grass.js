import Tile from './tile';

export default class Grass extends Tile {

    // update(timestamp){}

    draw(ctx){
      ctx.fillStyle = "#567d46";
      ctx.fillRect(this.x*this.width,this.y*this.height,this.width,this.height);
    }
}
