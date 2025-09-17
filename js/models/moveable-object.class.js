class MoveableObject {
    x = 120;
    y = 150; 
    img;
    height = 100;
    width = 300;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() {
        console.log('moving right')
    }

    moveLeft() {
        
    }
}
