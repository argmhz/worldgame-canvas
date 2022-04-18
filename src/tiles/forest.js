import Tile from './tile';

export default class Forest extends Tile {



    // update(timestamp){}

    draw(ctx){
      ctx.fillStyle = "#228B22";
      ctx.fillRect(this.x*this.width,this.y*this.height,this.width,this.height);
    }
}
