class Character extends MoveableObject{

IMAGES_SWIM = [
            'assets/img/1.Sharkie/3.Swim/1.png',
            'assets/img/1.Sharkie/3.Swim/2.png',
            'assets/img/1.Sharkie/3.Swim/3.png',
            'assets/img/1.Sharkie/3.Swim/4.png',
            'assets/img/1.Sharkie/3.Swim/5.png',
            'assets/img/1.Sharkie/3.Swim/6.png'
        ];
world;

    constructor() {
        super().loadImage('assets/img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.animate();

        this.x = 0;
        this.y = 150;
        
    }

    animate(){

        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < level1.level_end_x) {
                this.x += 10;
                this.otherDirection = false;
            }
            if(this.world.keyboard.LEFT && this.x > -100) {
                this.x -= 10;
                this.otherDirection = true;
            }
            if(this.world.keyboard.DOWN && this.y < 360) {
                this.y += 10;
            }
            if(this.world.keyboard.UP && this.y > -70) {
                this.y -= 10;
            }
            this.world.camera_x = -this.x +100;
        }, 1000/60)

        setInterval(() => {
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_SWIM.length;
                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }            
            }, 100);
    
        // permanente, langsame Animation
        setInterval(() => {
                let i = this.currentImage % this.IMAGES_SWIM.length;
                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;
        }, 320);
    }
    
}