let canvas;
let world;
let keyboard = new Keyboard();

function preloadGame() {
    canvas = document.getElementById("canvas");
    initLevel();
    world = new World(canvas, keyboard);
    console.log("Game ist geladen");
}

function removeStartScreen() {
  console.log("removeStartScreen läuft!");
  const startScreen = document.getElementById("start_screen");
  startScreen.classList.add("d_none");
  console.log(startScreen.classList);
}

function toggleDnone() {
    document.getElementById("controls_img").classList.toggle("d_none")

}

function restartGame() {
    if (world) world.stop();
    document.getElementById('gameOverScreen').style.display = 'none';
    document.getElementById('victoryScreen').style.display = 'none';

    world = new World(document.getElementById('canvas'), keyboard);
    world.start();
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