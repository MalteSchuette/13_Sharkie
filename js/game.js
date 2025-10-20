/** @type {HTMLCanvasElement} */
let canvas;

/** @type {World} */
let world;

/** @type {Keyboard} */
let keyboard = new Keyboard();

/**
 * Loads the game, initializes the level and the world.
 */
function preloadGame() {
    canvas = document.getElementById("canvas");
    initLevel();
    applyMuteState()
    world = new World(canvas, keyboard);
}

/**
 * Removes the start screen and shows overlay on mobile devices.
 */
function removeStartScreen() {
    const startScreen = document.getElementById("start_screen");
    startScreen.classList.add("d_none");

    if (isMobileDevice()) {
        const mobileOverlay = document.querySelector('.mobile_overlay');
        mobileOverlay.style.display = 'flex';
    }
}

/**
 * showes the start screen.
 */
function getMainMenu() {
    const startScreen = document.getElementById("start_screen")
    startScreen.classList.remove("d_none")
    document.getElementById("gameOverScreen").style.display = 'none'
    document.getElementById("victoryScreen").style.display = 'none'
}

/**
 * Toggles visibility of the controls image.
 */
function toggleDnone(id) {
    document.getElementById(id).classList.toggle("d_none")
}

/**
 * Restarts the game and resets the world.
 */
function restartGame() {
    if (world) world.reset();
    world = new World(document.getElementById('canvas'), keyboard);
    world.start();
}

/**
 * Checks the screen orientation and shows rotation hint if needed.
 */
function checkOrientation() {
    const rotateScreen = document.getElementById('rotate-screen');
    if (window.innerHeight > window.innerWidth) {
        rotateScreen.style.display = 'flex';
    } else {
        rotateScreen.style.display = 'none';
    }
}

/**
 * Detects if the device is a mobile device.
 * @returns {boolean} True if a mobile device is detected.
 */
function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

/**
 * Sets background for mobile devices on page load.
 */
window.addEventListener('load', () => {
    if (isMobileDevice()) {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = '#000';
        document.getElementById("game-container").style.maxWidth = '4000px';
        document.getElementById("game-container").style.maxHeight = '4000px';
    }
});


/**
 * detects if a key got pressed. 
 */
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 37 || e.keyCode == 65) keyboard.LEFT = true;
    if (e.keyCode == 38 || e.keyCode == 87) keyboard.UP = true;
    if (e.keyCode == 39 || e.keyCode == 68) keyboard.RIGHT = true;
    if (e.keyCode == 40 || e.keyCode == 83) keyboard.DOWN = true;
    if (e.keyCode == 32) keyboard.SPACE = true;
});


/**
 * detects if a key got released.
 */
window.addEventListener('keyup', (e) => {
    if (e.keyCode == 37 || e.keyCode == 65) keyboard.LEFT = false;
    if (e.keyCode == 38 || e.keyCode == 87) keyboard.UP = false;
    if (e.keyCode == 39 || e.keyCode == 68) keyboard.RIGHT = false;
    if (e.keyCode == 40 || e.keyCode == 83) keyboard.DOWN = false;
    if (e.keyCode == 32) keyboard.SPACE = false;
});

/**
 * connectes button id's with keys for controls.
 */
const touchControls = [
    {id: 'btn_left', key: 'LEFT'},
    {id: 'btn_right', key: 'RIGHT'},
    {id: 'btn_up', key: 'UP'},
    {id: 'btn_down', key: 'DOWN'},
    {id: 'btn_att', key: 'SPACE'}
];


/**
 * detects if a button for touch control got pressed/released.
 */
touchControls.forEach(control => {
    const btn = document.getElementById(control.id);
    btn.addEventListener('touchstart', (e) => { e.preventDefault(); keyboard[control.key] = true; });
    btn.addEventListener('touchend', (e) => { e.preventDefault(); keyboard[control.key] = false; });
});

/**
 * checks orientation / resizes to check if device is mobile or desktop. 
 */
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
window.addEventListener('load', checkOrientation);
