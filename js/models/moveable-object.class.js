class MoveableObject extends DrawableObject{
 
    height = 150;
    width = 200;
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;


    isColliding(mo) {
        return this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        }
        else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        return timepassed < 1000
    }

    isDead() {
        return this.energy == 0
    }

    moveLeft() {
        setInterval(() =>{
            this.x -= this.speed;
        }, 1000 / 60)
    }

    playAnimation(array) {
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}
