import Tile from './tile';

export default class Water extends Tile {


  // update(timestamp){}

  draw(ctx){

    ctx.fillStyle = "#00f";
    ctx.fillRect(this.x*this.width,this.y*this.height,this.width,this.height);

  }

  randomRgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }
}
