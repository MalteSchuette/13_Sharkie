/**
 * Represents the entire game world.
 * Manages character, enemies, level, camera, UI, and game states.
 */
class World {
    /** The player character. @type {Character} */
    character = new Character();

    /** Current level. @type {Level} */
    level = level1;

    /** Canvas element to draw on. @type {HTMLCanvasElement} */
    canvas;

    /** 2D rendering context of the canvas. @type {CanvasRenderingContext2D} */
    ctx;

    /** poison interval @type {poisonInterval} */
    poisonInterval;

    /** Keyboard input handler. @type {Keyboard} */
    keyboard;

    /** Camera offset on the x-axis. @type {number} */
    camera_x = 0;

    /** Life bar UI. @type {LifeBar} */
    lifeBar = new LifeBar();

    /** Coin bar UI. @type {CoinBar} */
    coinBar = new CoinBar();

    /** Poison bar UI. @type {PoisonBar} */
    poisonBar = new PoisonBar();

    /** Active bubbles (projectiles). @type {Bubble[]} */
    bubbles = [];

    /** Whether the game is over. @type {boolean} */
    gameOver = false;

    /** Interval ID of the game loop. @type {number} */
    runInterval;

    /** Whether a bubble attack is currently active. @type {boolean} */
    isAttacking;

    /** Flag to prevent multiple game over triggers. @type {boolean} */
    gameOverTriggered;

    /** Flag to prevent multiple victory triggers. @type {boolean} */
    victoryTriggered;

    /**
     * Creates a new World instance.
     * @param {HTMLCanvasElement} canvas - Canvas element to render on.
     * @param {Keyboard} keyboard - Keyboard input handler.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
    }

    /** Starts music, loops, and rendering. */
    start() {
        soundtrack.play();
        this.run();
        this.recoverPoison();
        this.draw();
    }

    /** Sets up character and enemies with this world and starts animations. */
    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach((enemy) => {
            enemy.world = this;
        })
        this.character.animate();
        this.character.movement();
    }

    /** Main loop: checks collisions, bubble attacks, and victory/game over conditions. */
    run() {
        this.runInterval = setInterval(() => {
            if (!this.gameOver) {
                this.checkCollisions();
                this.checkBubbleAttack();
                if (this.character.dead && !this.gameOverTriggered) {
                    this.gameOverTriggered = true;
                    setTimeout(() => {
                        this.triggerGameOver();
                    }, 500);
                }
                const boss = this.level.enemies[this.level.enemies.length - 1];
                if (boss && boss.dead && !this.victoryTriggered) {
                    this.victoryTriggered = true;
                    this.triggerVictory();
                }
            }
        }, 80);
    }

    /** Resets the world (level, character, bubbles, etc.). */
    reset() {
        clearInterval(this.runInterval);
        clearInterval(this.poisonInterval);
        document.getElementById('gameOverScreen').style.display = 'none';
        document.getElementById('victoryScreen').style.display = 'none';
        initLevel();
        this.level = level1;
        this.character = new Character();
        this.bubbles = [];
        this.gameOver = false;
    }

    /** Triggers victory state. */
    triggerVictory() {
        this.gameOver = true;
        soundtrack.pause();
        sfx.win.currentTime = 0;
        sfx.win.play()
        const overlay = document.getElementById('victoryScreen');
        overlay.style.display = 'flex';
    }

    /** Checks collisions between character, enemies, and collectables. */
    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy) && !this.character.isHurt()) {
            this.character.hit();
            sfx.hurt.play();
            this.lifeBar.setPercentage(this.character.energy);
        }
            this.checkBubbleCollision(enemy);
        });
            this.checkCollectableCollision();
    }

    /** Checks collisions between bubble and enemies. */
    checkBubbleCollision(enemy) {
        for (let i = this.bubbles.length - 1; i >= 0; i--) {
                const bubble = this.bubbles[i];
                if (!bubble) continue;
                if (bubble.isColliding(enemy)) {
                    enemy.hit_status = true;
                    playHitSound();
                    this.bubbles.splice(i, 1);
                    break;
                }
            }
    }

    /** Checks collisions between char and collectables. */
    checkCollectableCollision() {
        for (let i = this.level.collectables.length - 1; i >= 0; i--) {
            const collectable = this.level.collectables[i];
            if (this.character.isColliding(collectable)) {
                this.character.coin_counter += 20;
                sfx.coin.currentTime = 0;
                sfx.coin.play();
                this.coinBar.setPercentage(this.character.coin_counter);
                this.level.collectables.splice(i, 1);
            }
        }
    }

    /** Checks and executes bubble attacks (SPACE key). */
    checkBubbleAttack() {
        if (this.keyboard.SPACE && this.character.poison_percentage > 0 && !this.character.dead && !this.isAttacking) {
            this.isAttacking = true;
            this.character.status = "attack";
            this.character.currentImage = 0;

            setTimeout(() => {
                this.generateBubbleAttack()
            }, 500);

            setTimeout(() => {
                this.character.status = "idle";
                this.character.currentImage = 0;
                this.isAttacking = false;
            }, 700);
        }
    }

    generateBubbleAttack() {
        if (this.character.poison_percentage > 0 && !this.character.dead) {
                    sfx.attack.currentTime = 0;
                    sfx.attack.play();

                    const bubble = new Bubble(this.character.x, this.character.y, this.character.otherDirection);
                    this.character.poison_percentage -= 20;
                    this.poisonBar.setPercentage(this.character.poison_percentage);
                    this.bubbles.push(bubble);
                }
    }

    /** Regenerates character's poison over time. */
    recoverPoison() {
        this.poisonInterval = setInterval(() => {
            this.character.setPoisonPercentage();
            this.poisonBar.setPercentage(this.character.poison_percentage);
        }, 3000);
    }

    /** Draws the entire scene and schedules the next frame. */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addArrayToMap(this.level.backgroundObjects);
        this.addArrayToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addArrayToMap(this.level.collectables);
        this.addArrayToMap(this.bubbles);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.lifeBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.poisonBar);
        self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /** Adds all elements from an array to the rendering map.
     * @param {Array<DrawableObject>} element
     */
    addArrayToMap(element) {
        element.forEach(e => {
            this.addToMap(e);
        });
    }

    /** Draws a single object (handles flipping if necessary).
     * @param {DrawableObject} mo
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /** Flips an object horizontally.
     * @param {DrawableObject} mo
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.x + mo.width, mo.y);
        this.ctx.scale(-1, 1);
        this.ctx.translate(-mo.x, -mo.y);
    }

    /** Restores the context after flipping. */
    flipImageBack(mo) {
        this.ctx.restore();
    }

    /** Triggers game over state and shows the overlay. */
    triggerGameOver() {
        this.gameOver = true;
        soundtrack.pause();
        sfx.lost.play();
        const overlay = document.getElementById('gameOverScreen');
        overlay.style.display = 'flex';
    }
}
