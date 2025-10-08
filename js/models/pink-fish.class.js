class PinkFish extends PufferFish {
    IMAGES_SWIM = [
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/3.swim1.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/3.swim2.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/3.swim3.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/3.swim4.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/3.swim5.png'
    ]

    IMAGES_TRANSITION = [
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/3.transition1.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/3.transition2.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/3.transition3.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/3.transition4.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/3.transition5.png'
    ]

    IMAGES_BIG_SWIM = [
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/3.bubbleswim1.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/3.bubbleswim2.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/3.bubbleswim3.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/3.bubbleswim4.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/3.bubbleswim5.png',

    ]

    constructor(x, y, speedX) {
        super();
        this.loadImage('assets/img/2.Enemy/1.Puffer_fish/1.Swim/3.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BIG_SWIM);
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.animate()
    }
}