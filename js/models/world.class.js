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

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.recoverPoison();
    }

    setWorld(){
        this.character.world = this;
        this.level.enemies.forEach( (enemy) =>{
            enemy.world = this;
        })

    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkBubbleAttack()    
        }, 100);
    }

    checkCollisions() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.lifeBar.setPercentage(this.character.energy);
            }

            for (let i = this.bubbles.length - 1; i >= 0; i--) {
                const bubble = this.bubbles[i];
                if (!bubble) continue;
                if (bubble.isColliding(enemy)) {
                    enemy.hit_status = true;
                    console.log('enemy hit:', enemy);
                    this.bubbles.splice(i, 1);
                    break;
                }
            }
        });
        for (let i = this.level.collectables.length - 1; i >= 0; i--) {
            const collectable = this.level.collectables[i];
            if (this.character.isColliding(collectable)) {
                this.character.coin_counter += 20;
                this.coinBar.setPercentage(this.character.coin_counter);
                console.log("collect");
                this.level.collectables.splice(i, 1);
            }
        }
    }

checkBubbleAttack() {
    if (this.keyboard.SPACE && this.character.poison_percentage > 0 && !this.character.dead) {
        if (this.character.status !== "attack") {
            this.character.status = "attack";
            this.character.currentImage = 0;
        }
        let bubble = new Bubble(this.character.x, this.character.y);
        this.character.poison_percentage -= 20;
        this.poisonBar.setPercentage(this.character.poison_percentage);
        this.bubbles.push(bubble);
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
        this.addArrayToMap(this.level.collectables)
        this.addArrayToMap(this.bubbles)

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.lifeBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.poisonBar)
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
}