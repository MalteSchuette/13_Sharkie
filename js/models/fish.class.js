class PufferFish extends MoveableObject {

    width = 60;
    height = 40;
    offset = {
        top: 0,
        right:0,
        bottom:10,
        left:4,
    }
    hit_status = false;
    


    constructor() {
        super();
        this.movement();
    }

    animate() {
        setInterval(() => {
        if (!this.hit_status) {
            this.playAnimation(this.IMAGES_SWIM)
        }
        else {
            this.playAnimation(this.IMAGES_TRANSITION)
            this.playAnimation(this.IMAGES_BIG_SWIM);
            this.width = 80;
            this.height = 60;
            this.offset.bottom = 0;
            this.offset.left = 0;
            this.offset.top = -10;
            this.width = 80
            this.height = 60
        }
        },  60);
    }

    movement() {
        setInterval(() => {
            if (!this.hit_status) {
                this.x -= this.speedX;
            }
            else {
                this.x -= 0
            }
        },1000/60)
    }
}
