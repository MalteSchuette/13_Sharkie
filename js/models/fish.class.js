class PufferFish extends MoveableObject {

    width = 60;
    height = 40;
    offset = {
        top: 0,
        right:0,
        bottom:10,
        left:0
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
            this.offset.bottom = 0;
            this.width = 80
            this.height = 60
        }
        },  60);
    }

    movement() {
        setInterval(() => {
        this.x -= this.speedX;
        },1000/60)
    }
}
