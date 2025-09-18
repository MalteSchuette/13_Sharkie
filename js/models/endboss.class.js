class Endboss extends MoveableObject {

    height = 608;
    width = 570;

    IMAGES_SWIM = [
        'assets/img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'assets/img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    constructor(){
        super().loadImage('assets/img/2.Enemy/3 Final Enemy/2.floating/1.png')
        this.loadImages(this.IMAGES_SWIM);
        this.x = 1500
        this.y = -150
        this.animate()
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