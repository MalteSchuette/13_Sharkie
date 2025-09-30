class Bubble extends MoveableObject {

    IMAGE_SHOOT = 'assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'

    constructor(){
        super().loadImage('assets/img/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
        this.x = world.character.x;
        this.y = world.character.y;
        this.movement();
    }

    movement() {
        setInterval(() => {
            this.x += 2;
        },1000 / 60);
    }
}