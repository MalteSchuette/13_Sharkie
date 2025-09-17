//max Y = -25 & 350, max X = -76 & 720

class LilaJelly extends MoveableObject{
    
    width = 80;
    lila_direction;
    yellow_direction;
    green_direction;
    pink_direction;

    constructor() {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png')
        
        this.x = 720 + Math.random() * 200;
        this.y = Math.random() * 350;
        this.lila_direction = Math.random() < 0.5 ? "up" : "down";
        this.animate()
    }

    animate() {
        setInterval(() => {
        this.x -= 1;
        if (this.lila_direction == "up") {
            this.y -=1;
            if (this.y <= -25) {
                this.lila_direction = "down"
            }
        }
        else if (this.lila_direction == "down") {
            this.y += 1;
            if (this.y >= 350) {
                this.lila_direction = "up"
            } 
        }
        },1000 / 60);
    }
}

class YellowJelly extends MoveableObject{
    
    width = 80;

    constructor() {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png')
        
        this.x = 720 + Math.random() * 200;
        this.y = Math.random() * 350;
        this.yellow_direction = Math.random() < 0.5 ? "up" : "down";
        this.animate();
    }

    animate() {
        setInterval(() => {
        this.x -= 1;
        if (this.yellow_direction == "up") {
            this.y -=1;
            if (this.y <= -25) {
                this.yellow_direction = "down"
            }
        }
        else if (this.yellow_direction == "down") {
            this.y += 1;
            if (this.y >= 350) {
                this.yellow_direction = "up"
            } 
        }
        },1000 / 60);
    }
}

class GreenJelly extends MoveableObject{
    
    width = 80;

    constructor() {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png')
        
        this.x = 720 + Math.random() * 200;
        this.y = Math.random() * 350;
        this.green_direction = Math.random() < 0.5 ? "up" : "down";
        this.animate();
    }

    animate() {
        setInterval(() => {
        this.x -= 1;
        if (this.green_direction == "up") {
            this.y -=1;
            if (this.y <= -25) {
                this.green_direction = "down"
            }
        }
        else if (this.green_direction == "down") {
            this.y += 1;
            if (this.y >= 350) {
                this.green_direction = "up"
            } 
        }
        },1000 / 60);
    }
}

class PinkJelly extends MoveableObject{
    
    width = 80;

    constructor() {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png')
        
        this.x = 720 + Math.random() * 200;
        this.y = Math.random() * 350;
        this.pink_direction = Math.random() < 0.5 ? "up" : "down";
        this.animate();
    }

    animate() {
        setInterval(() => {
        this.x -= 1;
        if (this.pink_direction == "up") {
            this.y -=1;
            if (this.y <= -25) {
                this.pink_direction = "down"
            }
        }
        else if (this.pink_direction == "down") {
            this.y += 1;
            if (this.y >= 350) {
                this.pink_direction = "up"
            } 
        }
        },1000 / 60);
    }
}