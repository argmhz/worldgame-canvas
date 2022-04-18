import Tile from './tile';

export default class Hill extends Tile {

    // update(timestamp){}

    draw(ctx){
      ctx.fillStyle = "#2f7551";
      ctx.fillRect(this.x*this.width,this.y*this.height,this.width,this.height);
    }
}
