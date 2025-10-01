class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 50;
    offset = {
        top: 0,
        right:0,
        bottom:0,
        left:0
    }
    

    rX;
    rY;
    rW;
    rH;


    getRealFrame() {
        this.rX = this.x + this.offset.left;
        this.rY = this.y + this.offset.top;
        this.rW = this.width - this.offset.left - this.offset.right;
        this.rH = this.height - this.offset.top - this.offset.bottom;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
        });
    }

    drawFrame(ctx) {
        this.getRealFrame();
        if (this instanceof Character || this instanceof Bubble || this instanceof LilaJelly || this instanceof PinkJelly || this instanceof GreenJelly || this instanceof YellowJelly || this instanceof PufferFish || this instanceof Endboss) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'red';
        ctx.rect(this.rX, this.rY, this.rW, this.rH);
        ctx.stroke();
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

}