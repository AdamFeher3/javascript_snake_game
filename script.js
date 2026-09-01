const menuScreen = document.getElementById("menu");
const difScreen = document.getElementById("dif");
const gameplayScreen = document.getElementById("gameplay");
const pauseScreen = document.getElementById("pause");
const gameOverScreen = document.getElementById("gameOver");
const winScreen = document.getElementById("win");
const mobileControl = document.getElementById("mobileControl");

// BUTTONS
const startBtn = document.getElementById("start");
const easyBtn = document.getElementById("easy");
const mediumBtn = document.getElementById("medium");
const hardBtn = document.getElementById("hard");
const btns = [
    easyBtn, mediumBtn, hardBtn
];
const restartBtn = document.getElementsByClassName("restart");

const score = document.getElementById("score");
const scored = document.getElementById("scored");
const highscore = document.getElementById("highscore");
const maxscored = document.getElementById("maxscored");

// CANVAS
/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");

// GAME STATES
const MENU = "menu";
const PLAY = "play";
const PAUSE = "pause";

// GAME DIFFICULTY
const easy = "easy";
const medium = "medium";
const hard = "hard";

const game = {

    // CANVAS SIZE
    width: 0,
    height: 0,

    // CELL SIZE
    size: 0,

    state: null,
    GL: null,
    difficulty: null,
    moveInterval: 0
};

document.body.onload = () => {

    menuScreen.style.display = "grid";
    game.state = MENU;

    if (
        localStorage.getItem("loaded") === null ||
        localStorage.getItem("loaded") === undefined ||
        !localStorage.getItem("loaded")
    ) {

        localStorage.setItem("loaded", true);
        return;
    }
    else {
        localStorage.setItem("hs1", 0);
        localStorage.setItem("hs2", 0);
        localStorage.setItem("hs3", 0);
    }
};

startBtn.addEventListener("click", () => {
    menuScreen.style.display = "none";
    difScreen.style.display = "grid";
});

// SELECT DIFFICULTY
for ( let i = 0; i < btns.length; i++ ) {

    btns[i].addEventListener("click", async () => {

        if ( i === 0 ) game.difficulty = easy;
        else if ( i === 1 ) game.difficulty = medium;
        else if ( i === 2 ) game.difficulty = hard;

        difScreen.style.display = "none";
        gameplayScreen.style.display = "grid";
        mobileControl.style.display = "block";

        await loadGame();
    });
}

// LOAD GAME
async function loadGame() {

    game.size = 20;

    // SET GAME DIFFICULTY
    if ( game.difficulty === easy ) setGameDif(10, 10, 0.2);
    else if ( game.difficulty === medium ) setGameDif(14, 14, 0.175);
    else if ( game.difficulty === hard ) setGameDif(18, 18, 0.15);

    // GET HIGHSCORE
    let hs = 0;
    if ( game.difficulty === easy ) hs = localStorage.getItem("hs1");
    else if ( game.difficulty === medium ) hs = localStorage.getItem("hs2");
    else if ( game.difficulty === hard ) hs = localStorage.getItem("hs3");

    if ( hs !== null ) {

        maxScore = hs;
        highscore.textContent = `HIGH SCORE: ${maxScore}`;
    }

    // SET CANVAS SIZE
    canvas.width = game.width;
    canvas.height = game.height;

    g.imageSmoothingEnabled = false;

    loadSnake();
    spawnApple();

    // SET SNAKE DIRECTION
    nextDir = "U";
    snakeDir = "U";
    
    game.state = PLAY;
    draw();

    // START GAME LOOP
    game.GL = requestAnimationFrame(gameLoop);
}

// SET GAME DIFFICULTY
function setGameDif(w, h, s) {

    game.width = w * game.size;
    game.height = h * game.size;
    game.moveInterval = s;
}

let updateTime = 0;

// UPDATE GAME
function update(dt) {

    updateTime += dt;
    if ( updateTime > game.moveInterval ) {

        updateSnake();
        updateApple();
        updateTime = 0;
    }

    // GAME OVER OR WIN
    if ( gameOver || winGame ) endGame();
}

// DRAW GAME
function draw() {

    g.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();

    drawApple();
    drawSnake();
}

// DRAW BACKGROUND
function drawBackground() {

    for ( let j = 0; j < game.width/game.size; j++ ) {
        for ( let i = 0; i < game.height/game.size; i++ ) {
            
            g.fillStyle = i % 2 === j % 2 ?
            "rgba(255,255,255,0.075)" : "rgba(255,255,255,0.05)";

            g.fillRect(i * game.size, j * game.size, game.size, game.size);
        }
    }
}
