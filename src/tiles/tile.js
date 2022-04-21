export default class Tile {

    constructor(game,x,y, size){
      this.game = game;
      this.width = size;
      this.height = size;
      this.x = x;
      this.y = y;
      this.position = {x:x*this.width,y:y*this.height};
      this.entities = [];
      this.load();
    }

    load(){}

    add(entity){
      this.entities.push(entity);
    }

    remove(entity){
      this.entities = this.entities.filter((item) => item !== entity);
    }

    getCenterPosition(){
      return {
        x: this.position.x+(this.width*.5),
        y: this.position.y+(this.height*.5)
      };
    }

    getTileAt(direction){
      return this.game.map.get(this.x+direction.x,this.y+direction.y);
    }

    getArea(num){

      let area = [{x:-1,y:-1},{x: 0, y:-1}, {x:1, y:-1},
                  {x:-1,y: 0},             {x: 1, y: 0},
                  {x:-1,y: 1},{x: 0, y: 1},{x: 1, y: 1}];
      let n = [];
      let map = this.game.map;

      for (var i = 1; i <= num; i++) {
        area.forEach(pos => {
          let tile = map.get(this.x+(pos.x*i), this.y+(pos.y*i));
          if(tile) n.push(tile);
        });
      }

      return n;
    }

    draw(ctx){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x,this.position.y,this.width,this.height);

      // if(this.entities.length){
      //   ctx.fillStyle = "white";
      //   ctx.fillText(this.entities.length,this.position.x+(this.width*.5),this.position.y+(this.height*.5));
      // }

    }
}
