let canvas;
let world;
let keyboard = new Keyboard();



function preloadGame() {
    canvas = document.getElementById("canvas");
    initLevel();
    world = new World(canvas, keyboard);
}

function removeStartScreen() {
  const startScreen = document.getElementById("start_screen");
  startScreen.classList.add("d_none");
}

function toggleDnone() {
    document.getElementById("controls_img").classList.toggle("d_none")
}

function restartGame() {
    if (world) world.reset();
    world = new World(document.getElementById('canvas'), keyboard);
    world.start();
}

function checkOrientation() {
    const rotateScreen = document.getElementById('rotate-screen');
    if (window.innerHeight > window.innerWidth) {
      rotateScreen.style.display = 'flex';
    } else {
      rotateScreen.style.display = 'none';
    }
}



window.addEventListener('keydown', (e) => {

    if (e.keyCode == 37 || e.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
        keyboard.UP = true;
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    
})

window.addEventListener('keyup', (e) => {

    if (e.keyCode == 37 || e.keyCode == 65) {
        keyboard.LEFT = false;        
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
        keyboard.UP = false;
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
})

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
window.addEventListener('load', checkOrientation);