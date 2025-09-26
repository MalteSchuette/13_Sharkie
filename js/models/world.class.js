class World {
    character = new Character()
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    lifeBar = new LifeBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld(){
        this.character.world = this;
        this.level.enemies.forEach( (enemy) =>{
            enemy.world = this;
        })

    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach( (enemy) => {
                if (this.character.isColliding(enemy)) {
                    console.log(enemy);                    
                    this.character.hit();
                    this.lifeBar.setPercentage(this.character.energy);
                }
            });
        }, 200);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);

        this.addArrayToMap(this.level.backgroundObjects);
        
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.lifeBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.poisonBar)
        this.ctx.translate(this.camera_x, 0);
        
        this.addArrayToMap(this.level.enemies);
        this.addToMap(this.character);
        this.addArrayToMap(this.level.collectables)
        
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