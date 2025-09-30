class PufferFish extends MoveableObject {

    width = 60;
    height = 40;
    offset = {
        top: 0,
        right:0,
        bottom:0,
        left:0
    }

    constructor() {
        super();
        this.movement();
    }

    animate() {
        setInterval(() => {
        this.playAnimation(this.IMAGES_SWIM)
        }, 160);
    }

    movement() {
        setInterval(() => {
        this.x -= 2;
        },1000/60)
    }
}
