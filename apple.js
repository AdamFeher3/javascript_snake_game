// APPLE
const apple = { x: 0, y: 0 };

// SPAWN NEW APPLE
function spawnApple() {

    do {
        apple.x = Math.floor(Math.random() * (game.width/game.size));
        apple.y = Math.floor(Math.random() * (game.width/game.size));
    }
    while ( canAppleSpawn() );
}

// CHECK IF APPLE CAN SPAWN
function canAppleSpawn() {

    for ( let i = 0; i < snake.body.length; i++ ) {

        if (
            apple.x === snake.body[i].x &&
            apple.y === snake.body[i].y
        ) {
            return true;
        }
    }
    return false;
}

// UPDATE APPLE
function updateApple() {

    // EAT APPLE
    if (
        apple.x === snake.body[0].x &&
        apple.y === snake.body[0].y
    ) {
        eatApple();
        spawnApple();
        addScore();
        growSnake();
    }
}

// DRAW APPLE
function drawApple() {

    g.fillStyle = "rgb(200,0,0)";
    g.beginPath();
    g.arc(
        apple.x * game.size + game.size/2, apple.y * game.size + game.size/2,
        game.size/2, 0, Math.PI * 2
    );
    g.fill();
}