import Tile from './tile';

export default class Beach extends Tile {



    // update(timestamp){}

    draw(ctx){
      ctx.fillStyle = "#edc9af";
      ctx.fillRect(this.x*this.width,this.y*this.height,this.width,this.height);
    }
}
