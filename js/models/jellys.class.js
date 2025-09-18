//max Y = -25 & 350, max X = -76 & 720



class LilaJelly extends MoveableObject{
    width = 80;
    lila_direction;
    IMAGES_SWIM = [
            'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
            'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
            'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
            'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
        ];

    constructor() {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.x = 720 + Math.random() * 200;
        this.y = Math.random() * 350;
        this.lila_direction = Math.random() < 0.5 ? "up" : "down";
        this.movement();
        this.animate();
    }

    movement() {
        setInterval(() => {
        this.x -= 4 * Math.random();
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

    animate() {
        setInterval(() => {
        let i = this.currentImage % this.IMAGES_SWIM.length;
        let path = this.IMAGES_SWIM[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 160);
    }
}

class YellowJelly extends MoveableObject{
    yellow_direction;
    width = 80;
    IMAGES_SWIM = [
            'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
            'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
            'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
            'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
        ];

    constructor() {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.x = 720 + Math.random() * 200;
        this.y = Math.random() * 350;
        this.yellow_direction = Math.random() < 0.5 ? "up" : "down";
        this.movement();
        this.animate();
    }

    movement() {
        setInterval(() => {
        this.x -= 4 * Math.random();
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

    animate() {
        setInterval(() => {
        let i = this.currentImage % this.IMAGES_SWIM.length;
        let path = this.IMAGES_SWIM[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 160);
    }
}

class GreenJelly extends MoveableObject{
    green_direction;
    width = 80;
    IMAGES_SWIM = [
            'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
            'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
            'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
            'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
        ];

    constructor() {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.x = 720 + Math.random() * 200;
        this.y = Math.random() * 350;
        this.green_direction = Math.random() < 0.5 ? "up" : "down";
        this.movement();
        this.animate();
    }

    movement() {
        setInterval(() => {
        this.x -= 4 * Math.random();
        if (world.character.y < this.y) {
            this.y -=3;
            }
        else if (world.character.y > this.y) {
            this.y += 3;
        }
        },1000 / 60);
    }

    animate() {
        setInterval(() => {
        let i = this.currentImage % this.IMAGES_SWIM.length;
        let path = this.IMAGES_SWIM[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 160);
    }
}


class PinkJelly extends MoveableObject{
    pink_direction;
    width = 80;

    IMAGES_SWIM = [
            'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
            'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
            'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
            'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
        ];

    constructor() {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.x = 720 + Math.random() * 200;
        this.y = Math.random() * 350;
        this.pink_direction = Math.random() < 0.5 ? "up" : "down";
        this.movement();
        this.animate();
    }

    movement() {
        setInterval(() => {
        this.x -= 4 * Math.random();
        if (world.character.y < this.y) {
            this.y -=3;
            }
        else if (world.character.y > this.y) {
            this.y += 3;
        }
        },1000 / 60);
    }

    animate() {
        setInterval(() => {
        let i = this.currentImage % this.IMAGES_SWIM.length;
        let path = this.IMAGES_SWIM[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 160);
    }
}