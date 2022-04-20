import Game from './game.js';

function setSize(canvas){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function clear(canvas,context){
  context.fillStyle = "#fff";
  context.fillRect(0,0,canvas.width, canvas.height);
}

window.addEventListener('load', () => {

  let canvas = document.createElement('canvas');
  let context = canvas.getContext('2d');
  window.addEventListener('resize', setSize);
  setSize(canvas);
  document.body.appendChild(canvas);

  const game = new Game(canvas, context);

  let count = 0;

  setInterval(loop,1000,count);

  function loop(timestamp){

    // requestAnimationFrame(loop);
    clear(canvas,context);
    game.render(timestamp);
    timestamp++;
  }

  // requestAnimationFrame(loop);
});

//
