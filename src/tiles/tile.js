export default class Tile {

    constructor(game,x,y){
      this.width = 10;
      this.height = 10;
      this.x = x;
      this.y = y;
      this.entities = [];
    }

    add(entity){
      this.entities.push(entity);
    }

    remove(entity){
      this.entities = this.entities.filter((item) => item === entity);
    }

}
