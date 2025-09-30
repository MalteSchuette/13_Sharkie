class MoveableObject extends DrawableObject{
 
    height = 150;
    width = 200;
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    

    isColliding(mo) {
        return this.rX + this.rW > mo.rX &&
            this.rY + this.rH > mo.rY &&
            this.rX < mo.rX + mo.rW &&
            this.rY < mo.rY + mo.rH;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        }
        else {
            this.lastHit = new Date().getTime();
        }
        console.log('hit', this.lastHit);
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
