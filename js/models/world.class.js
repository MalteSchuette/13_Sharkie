class World {
    character = new Character()
    enemies = [
    new LilaJelly(),
    new YellowJelly(),
    new GreenJelly(),
    new PinkJelly()
    ];
    backgroundObjects = [
        new BackgroundObject('assets/img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('assets/img/3. Background/Layers/4.Fondo 2/D1.png', 0),    
        new BackgroundObject('assets/img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('assets/img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('assets/img/3. Background/Layers/1. Light/1.png', 0)

        
    ];     
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.addArrayToMap(this.backgroundObjects)
        this.addArrayToMap(this.enemies)
        this.addToMap(this.character)
        


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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
    }

}