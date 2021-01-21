class Treasure {
    constructor() {
        this.col = 500;
        this.row = 400;
        this.image;
    }
    draw() {
        image(this.image, this.row, this.col, 100, 100);
    }
    setRandomPosition() {
        this.col = Math.floor(Math.random() * 10) * 100;
        this.row = Math.floor(Math.random() * 10) * 100;
        console.log('Treasure Y / X', this.col, this.row);
    }
}

class Player {
    constructor() {
        this.col = 0;
        this.row = 0;
        this.image;
    }
    moveUp() {
        this.col -= 100;
    }
    moveDown() {
        this.col += 100;
    }
    moveLeft() {
        this.row -= 100;
    }
    moveRight() {
        this.row += 100;
    }

    draw() {
        image(this.image, this.row, this.col, 100, 100);
    }
}

class Game {
    constructor() {
        this.player = new Player();
        this.treasure = new Treasure();
    }
    preload() {
        this.player.image = loadImage('../assets/character-down.png');
        this.treasure.image = loadImage('../assets/treasure.png');
        this.treasure.setRandomPosition();
    }
    draw() {
        game.player.draw();
    }
    drawGrid() {
        for (let y = 100; y <= 1000; y += 100) {
            line(0, y, 1000, y);
        }
        for (let x = 100; x <= 1000; x += 100) {
            line(x, 0, x, 1000);
        }
    }
}
