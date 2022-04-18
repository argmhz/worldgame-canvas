export default class Tile {

    constructor(game,x,y){
      this.width = 10;
      this.height = 10;
      this.x = x;
      this.y = y;
      this.entities = [];
      this.load();
    }

    load(){}

    add(entity){
      this.entities.push(entity);
    }

    remove(entity){
      this.entities = this.entities.filter((item) => item === entity);
    }


    draw(ctx){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x*this.width,this.y*this.height,this.width,this.height);

      // ctx.textAlign = "left";
      if(this.entities.length){
        ctx.fillStyle = "red";
        ctx.fillText(this.entities.length,this.x*this.width+2,this.y*this.height-2);
      }

    }
}
