class Player {
    constructor() {
        this.col = 0;
        this.row = 0;
        this.image;
    }
    moveUp() {
        this.y -= 1;
    }
    moveDown() {
        this.y += 1;
    }
    moveLeft() {
        this.x -= 1;
    }
    moveRight() {
        this.x += 1;
    }
    draw() {
        image(this.image, this.row, this.col, 100, 100);
    }
}
