class Treasure {
    constructor() {
        // this.col = 0;
        // this.row = 0;
        this.col = Math.floor((Math.random() * HEIGHT) / SQUARE_SIDE) * 100;
        this.row = Math.floor((Math.random() * WIDTH) / SQUARE_SIDE) * 100;
        this.image;
    }
    draw() {
        image(this.image, this.row, this.col, 100, 100);
    }
    // setRandomPosition() {
    //     // this.col = Math.floor((Math.random() * HEIGHT) / SQUARE_SIDE) * 100;
    //     // this.row = Math.floor((Math.random() * WIDTH) / SQUARE_SIDE) * 100;
    //     console.log('Treasure Y / X', this.col, this.row);
    // }
}

class Player {
    constructor() {
        this.col = 0;
        this.row = 0;
        this.image;
    }
    moveUp() {
        this.col -= 100;
        this.checkForVictory();
    }
    moveDown() {
        this.col += 100;
        this.checkForVictory();
    }
    moveLeft() {
        this.row -= 100;
        this.checkForVictory();
    }
    moveRight() {
        this.row += 100;
        this.checkForVictory();
    }

    draw() {
        image(this.image, this.row, this.col, 100, 100);
    }
    checkForVictory() {
        if (this.col === game.treasure.col && this.row === game.treasure.row) {
            console.log('you found the treasure');
            alert('Congratulation!! You found the treasure!');
        }
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
        // this.treasure.setRandomPosition();
    }
    draw() {
        game.player.draw();
        console.log('', this.player.col);
        console.log('', this.treasure.col);
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
