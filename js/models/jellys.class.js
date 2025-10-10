class LilaJelly extends MoveableObject{
    width = 80;
    lila_direction;
    world;
    offset = {
        top: 10,
        right:0,
        bottom:15,
        left:0
    }
    hit_status = false;

    IMAGES_SWIM = [
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ]

    IMAGES_DEAD = [
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ]

    constructor(x,y) {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x
        this.y = y
        this.lila_direction = Math.random() < 0.5 ? "up" : "down";
        this.movement();
        this.animate();
    }

    movement() {
        setInterval(() => {
            if (!this.hit_status) {
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
            }
            else {
                this.y -= 5
            }
        },1000 / 60);
    }

    animate() {
        setInterval(() => {
            if (!this.hit_status) {
                this.playAnimation(this.IMAGES_SWIM);
            }
            else {
                this.playAnimation(this.IMAGES_DEAD);
            }
    }, 160);
    }
}

class YellowJelly extends MoveableObject{
    yellow_direction;
    width = 80;
    world;
    offset = {
        top: 10,
        right:0,
        bottom:15,
        left:0
    }
    hit_status = false;
    
    IMAGES_SWIM = [
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ]

    IMAGES_DEAD = [
        'assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png'
    ]

    constructor(x, y) {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.yellow_direction = Math.random() < 0.5 ? "up" : "down";
        this.movement();
        this.animate();
    }

     movement() {
        setInterval(() => {
            if (!this.hit_status) {
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
            }
            else {
                this.y -= 5
            }
        },1000 / 60);
    }

    animate() {
        setInterval(() => {
            if (!this.hit_status) {
                this.playAnimation(this.IMAGES_SWIM);
            }
            else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 160);
    }
}

class GreenJelly extends MoveableObject{
    world;
    green_direction;
    width = 80;
    offset = {
        top: 10,
        right:0,
        bottom:15,
        left:0
    }
    hit_status = false;

    IMAGES_SWIM = [
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
    ]

    IMAGES_DEAD = [
        'assets/img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/green/g4.png'
    ]

    constructor(x, y) {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.green_direction = Math.random() < 0.5 ? "up" : "down";
        this.movement();
        this.animate();
    }

    movement() {
        setInterval(() => {
            if (!this.hit_status) {
                this.x -= 4 * Math.random();
                if (world.character.y < this.y) {
                    this.y -=3;
                    }
                else if (world.character.y > this.y) {
                    this.y += 3;
                }
            }
            else {
                this.y -= 5
            }
        },1000 / 60);
    }

    animate() {
        setInterval(() => {
            if (!this.hit_status) {
                this.playAnimation(this.IMAGES_SWIM);
            }
            else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 160);
    }
}


class PinkJelly extends MoveableObject {
    world;
    pink_direction;
    width = 80;
    offset = {
        top: 10,
        right:0,
        bottom:15,
        left:0
    }
    hit_status = false;

    IMAGES_SWIM = [
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ]

    IMAGES_DEAD = [
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'assets/img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png'
    ]

    constructor(x, y) {
        super().loadImage('assets/img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.pink_direction = Math.random() < 0.5 ? "up" : "down";
        this.movement();
        this.animate();
    }

    movement() {
        setInterval(() => {
            if (!this.hit_status) {
                this.x -= 4 * Math.random();
                if (world.character.y < this.y) {
                    this.y -=3;
                    }
                else if (world.character.y > this.y) {
                    this.y += 3;
                }
            }
            else {
                this.y -= 5
            }
        },1000 / 60);
    }

    animate() {
        setInterval(() => {
            if (!this.hit_status) {
                this.playAnimation(this.IMAGES_SWIM);
            }
            else {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 160);
    }
}