class Coin extends DrawableObject {

    x;
    y;
    width = 50;
    height = 50;
    offset = {
        top: 15,
        right:15,
        bottom:15,
        left:15
    }

    constructor(x,y) {
        super().loadImage('assets/img/4. Marcadores/green/100_ copia 6.png')
        this.x = x;
        this.y = y;
    }
}