import Tile from './tile';

export default class Mountain extends Tile {
    // update(timestamp){}

    draw(ctx){
      ctx.fillStyle = "#ccc";
      ctx.fillRect(this.x*this.width,this.y*this.height,this.width,this.height);
    }
}
