const game = new Game();

function setup() {
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent('canvas');
}

function preload() {
    game.preload();

    // game.treasure.setRandomPosition();
}

function draw() {
    clear();
    game.player.draw();
    game.treasure.draw();
    game.drawGrid();
}

function keyPressed() {
    if (keyCode === 38) {
        game.player.moveUp();
    }
    if (keyCode === 40) {
        game.player.moveDown();
    }
    if (keyCode === 37) {
        game.player.moveLeft();
    }
    if (keyCode === 39) {
        game.player.moveRight();
    }

    //  if (UP_ARROW) {
    //     game.player.moveUp();
    // }
    // if (DOWN_ARROW) {
    //     game.player.moveDown();
    // }
    // if (LEFT_ARROW) {
    //     game.player.moveLeft();
    // }
    // if (RIGHT_ARROW) {
    //     game.player.moveRight();
    // }
}
