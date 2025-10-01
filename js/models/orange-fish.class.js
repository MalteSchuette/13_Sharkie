class OrangeFish extends PufferFish {
    IMAGES_SWIM = [
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/2.swim1.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/2.swim2.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/2.swim3.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/2.swim4.png',
        'assets/img/2.Enemy/1.Puffer_fish/1.Swim/2.swim5.png'
    ]

    IMAGES_TRANSITION = [
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/2.transition1.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/2.transition2.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/2.transition3.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/2.transition4.png',
        'assets/img/2.Enemy/1.Puffer_fish/2.transition/2.transition5.png'
    ]

    IMAGES_BIG_SWIM = [
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/1.bubbleswim1.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/1.bubbleswim2.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/1.bubbleswim3.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/1.bubbleswim4.png',
        'assets/img/2.Enemy/1.Puffer_fish/3.Bubbleeswim/1.bubbleswim5.png'
    ]

    constructor(x,y) {
        super();
        this.loadImage('assets/img/2.Enemy/1.Puffer_fish/1.Swim/2.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BIG_SWIM);
        this.x = x;
        this.y = y;
        this.animate()
    }
}