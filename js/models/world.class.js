class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    lifeBar = new LifeBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    bubbles = [];
    gameOver = false;
    runInterval;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
    }

    start() {
        soundtrack.play();
        this.run();
        this.recoverPoison();
        this.draw();
    }

    setWorld(){
        this.character.world = this;
        this.level.enemies.forEach( (enemy) =>{
            enemy.world = this;
        })
    }

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
                const boss = this.level.enemies[this.level.enemies.length -1];
                if (boss && boss.dead && !this.victoryTriggered) {
                    this.victoryTriggered = true; 
                    this.triggerVictory();
                }
            }
        }, 100);
    }
    
    stop() {
        clearInterval(this.runInterval);
    }

    triggerVictory() {
        this.gameOver = true;
        soundtrack.pause();
        sfx.win.currentTime = 0;
        sfx.win.play()
        const overlay = document.getElementById('victoryScreen');
        overlay.style.display = 'flex';
    }


    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                sfx.hurt.play();
                this.lifeBar.setPercentage(this.character.energy);
            }

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
        });
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

    checkBubbleAttack() {
        if (this.keyboard.SPACE && this.character.poison_percentage > 0 && !this.character.dead) {
            if (!this.isAttacking) {
                this.isAttacking = true;
                this.character.status = "attack";
                this.character.currentImage = 0;

                setTimeout(() => {
                    sfx.attack.currentTime = 0;
                    sfx.attack.play();

                    const bubble = new Bubble(this.character.x, this.character.y, this.character.otherDirection);
                    this.character.poison_percentage -= 20;
                    this.poisonBar.setPercentage(this.character.poison_percentage);
                    this.bubbles.push(bubble);
                }, 500);

                setTimeout(() => {
                    this.character.status = "idle";
                    this.character.currentImage = 0;
                    this.isAttacking = false;
                }, 700);
            }
        }
    }

    recoverPoison() {
        setInterval(() => {
            this.character.setPoisonPercentage();
            this.poisonBar.setPercentage(this.character.poison_percentage);
        }, 3000);
    }

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
        this.ctx.translate(this.camera_x, 0);
        
        this.ctx.translate(-this.camera_x, 0);


         self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addArrayToMap(element){
        element.forEach(e => {
            this.addToMap(e);
        });
    }

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

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.x + mo.width, mo.y);
        this.ctx.scale(-1, 1);
        this.ctx.translate(-mo.x, -mo.y);
}

    flipImageBack(mo) {
        this.ctx.restore();
    }

    triggerGameOver() {
        this.gameOver = true;
        soundtrack.pause();
        sfx.lost.play();
        const overlay = document.getElementById('gameOverScreen');
        overlay.style.display = 'flex'; // Zeigt das Overlay an
    }
}