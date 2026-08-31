// SNAKE
const snake = { body: [] };

let snakeDir = null;
let nextDir = null;

// LOAD SNAKE
function loadSnake() {

    // RESET SNAKE
    snake.body.length = 0;

    snake.body[0] = { x: 4, y: game.height/game.size - 4 }; // HEAD
    snake.body[1] = { x: 4, y: game.height/game.size - 3 };
    snake.body[2] = { x: 4, y: game.height/game.size - 2 };
}

// UPDATE SNAKE
function updateSnake() {

    snakeDir = nextDir;

    // FOLLOW SNAKE HEAD
    for ( let i = snake.body.length - 1; i > 0; i-- ) {

        snake.body[i].x = snake.body[i - 1].x;
        snake.body[i].y = snake.body[i - 1].y;
    }

    // SNAKE MOVEMENT
    if ( snakeDir === "U" ) moveSnake(0, -1);
    else if ( snakeDir === "D" ) moveSnake(0, 1);
    else if ( snakeDir === "L" ) moveSnake(-1, 0);
    else if ( snakeDir === "R" ) moveSnake(1, 0);

    // SNAKE COLLISION
    if ( snakeColl() ) gameOver = true;
}

// CHECK IF SNAKE HIT WALL OR HIT ITSELF
function snakeColl() {

    // SNAKE HIT WALL
    if (
        snake.body[0].x < 0 ||
        snake.body[0].x > game.width/game.size-1 ||
        snake.body[0].y < 0 ||
        snake.body[0].y > game.height/game.size-1
    ) {
        return true;
    }

    // SNAKE HIT ITSELF
    for ( let i = 1; i < snake.body.length; i++ ) {

        if (
            snake.body[0].x === snake.body[i].x &&
            snake.body[0].y === snake.body[i].y
        ) {
            return true;
        }
    }

    return false;
}

// UPDATE SNAKE POSITION
function moveSnake(x, y) {

    snake.body[0].x += x;
    snake.body[0].y += y;
}

// ADD SNAKE BODY PART
function growSnake() {

    snake.body.push({
        x: snake.body[snake.body.length-1].x,
        y: snake.body[snake.body.length-1].y
    });
}

// DRAW SNAKE
function drawSnake() {

    for ( let i = 0; i < snake.body.length; i++ ) {

        const x = snake.body[i].x * game.size;
        const y = snake.body[i].y * game.size;

        let color = Math.floor(200 / snake.body.length) * (snake.body.length - i) + 50;

        g.fillStyle = `rgb(0,${color},0)`;
        g.fillRect(x, y, game.size, game.size);
    }
}