class Direction {
  static get(x,y,direction){
    return {
      x: x+direction.x,
      y: y+direction.y
    };
  }

  static random(){
    let dirs = [
      Direction.UP,
      Direction.UP_RIGHT,
      Direction.UP_LEFT,
      Direction.RIGHT,
      Direction.DOWN_RIGHT,
      Direction.DOWN,
      Direction.DOWN_LEFT,
      Direction.LEFT
    ];

    return dirs[Math.floor(Math.random()*dirs.length)];
  }
}

Direction.UP = {x:0,y:-1};
Direction.UP_RIGHT = {x:1,y:-1};
Direction.UP_LEFT = {x:-1,y:-1};
Direction.RIGHT = {x:1,y:0};
Direction.DOWN_RIGHT = {x:1,y:1};
Direction.DOWN = {x:0,y:1};
Direction.DOWN_LEFT = {x:-1,y:1};
Direction.LEFT = {x:-1,y:0};


module.exports = Direction;
