class Bubble extends MoveableObject {
    width = 30;
    height = 30;
    IMAGE_SHOOT = 'assets/img/1.Sharkie/4.Attack/Bubble/Bubble.png'

    constructor(x, y, otherDirection){
        super().loadImage('assets/img/1.Sharkie/4.Attack/Bubble/Bubble.png');
        this.x = x + 150;   
        this.y = y + 80;
        this.movement();
        this.otherDirection = otherDirection;
    }

    movement() {
        setInterval(() => {
            if(!this.otherDirection) {
            this.x += 15;            
            }
            else if (this.otherDirection){
                this.x -= 15;               
            }
        },1000 / 60);
    }
}