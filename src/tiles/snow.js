import Tile from './tile';

export default class Snow extends Tile {
  // update(timestamp){}

    draw(ctx){
      ctx.fillStyle = "#fff";
      ctx.fillRect(this.x*this.width,this.y*this.height,this.width,this.height);
    }
}
