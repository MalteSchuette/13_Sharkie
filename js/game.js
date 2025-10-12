/** @type {HTMLCanvasElement} */
let canvas;

/** @type {World} */
let world;

/** @type {Keyboard} */
let keyboard = new Keyboard();

/**
 * Lädt das Spiel, initialisiert das Level und die Welt.
 */
function preloadGame() {
    canvas = document.getElementById("canvas");
    initLevel();
    world = new World(canvas, keyboard);
}

/**
 * Entfernt den Startbildschirm und zeigt bei mobilen Geräten das Overlay.
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
 * Toggle Sichtbarkeit des Steuerelement-Images.
 */
function toggleDnone() {
    document.getElementById("controls_img").classList.toggle("d_none")
}

/**
 * Startet das Spiel neu, setzt die Welt zurück.
 */
function restartGame() {
    if (world) world.reset();
    world = new World(document.getElementById('canvas'), keyboard);
    world.start();
}

/**
 * Prüft die Bildschirmorientierung und zeigt ggf. den Hinweis zum Drehen an.
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
 * Prüft, ob das Gerät ein mobiles Gerät ist.
 * @returns {boolean} True, wenn ein mobiles Gerät erkannt wird
 */
function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

/**
 * Setzt beim Laden der Seite den Hintergrund für mobile Geräte.
 */
window.addEventListener('load', () => {
    if (isMobileDevice()) {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = '#000';
    }
});

// Event-Listener für Tastatur
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 37 || e.keyCode == 65) keyboard.LEFT = true;
    if (e.keyCode == 38 || e.keyCode == 87) keyboard.UP = true;
    if (e.keyCode == 39 || e.keyCode == 68) keyboard.RIGHT = true;
    if (e.keyCode == 40 || e.keyCode == 83) keyboard.DOWN = true;
    if (e.keyCode == 32) keyboard.SPACE = true;
});

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 37 || e.keyCode == 65) keyboard.LEFT = false;
    if (e.keyCode == 38 || e.keyCode == 87) keyboard.UP = false;
    if (e.keyCode == 39 || e.keyCode == 68) keyboard.RIGHT = false;
    if (e.keyCode == 40 || e.keyCode == 83) keyboard.DOWN = false;
    if (e.keyCode == 32) keyboard.SPACE = false;
});

// Event-Listener für Touch-Steuerung
const touchControls = [
    {id: 'btn_left', key: 'LEFT'},
    {id: 'btn_right', key: 'RIGHT'},
    {id: 'btn_up', key: 'UP'},
    {id: 'btn_down', key: 'DOWN'},
    {id: 'btn_att', key: 'SPACE'}
];

touchControls.forEach(control => {
    const btn = document.getElementById(control.id);
    btn.addEventListener('touchstart', (e) => { e.preventDefault(); keyboard[control.key] = true; });
    btn.addEventListener('touchend', (e) => { e.preventDefault(); keyboard[control.key] = false; });
});

// Event-Listener für Orientierung und Fenstergröße
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
window.addEventListener('load', checkOrientation);
