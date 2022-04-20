export function inBounds(rect1, rect2){
  if (rect1.position.x < rect2.position.x + rect2.width &&
      rect1.position.x + rect1.width > rect2.position.x &&
      rect1.position.y < rect2.position.y + rect2.height &&
      rect1.height + rect1.position.y > rect2.position.y) {
        return true;
    } else {
        return false;
    }
}

 
