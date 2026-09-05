// CONTROLS

const includeKeys = [
    "KeyW","KeyS","KeyA","KeyD","KeyP",
    "ArrowUp","ArrowDown","ArrowLeft","ArrowRight"
];

document.addEventListener("keydown", (e) => {

    if ( game.state !== PLAY ) return;
    
    // GET PRESSED KEY
    const key = e.code;

    if ( includeKeys.includes(e.code) ) e.preventDefault();

    // CHANGE DIRECTION
    if ( ( key === "KeyW" || key === "ArrowUp" )
        && snakeDir !== "D" && nextDir !== "D" && snakeDir !== "U" ) { // MOVE UP

            nextDir = "U";
            snakeSound(1);
    }
    if ( ( key === "KeyS" || key === "ArrowDown" )
        && snakeDir !== "U" && nextDir !== "U" && snakeDir !== "D" ) { // MOVE DOWN

            nextDir = "D";
            snakeSound(1);
    }
    if ( ( key === "KeyA" || key === "ArrowLeft" )
        && snakeDir !== "R" && nextDir !== "R" && snakeDir !== "L" ) { // MOVE LEFT

            nextDir = "L";
            snakeSound(2);
    }
    if ( ( key === "KeyD" || key === "ArrowRight" )
        && snakeDir !== "L" && nextDir !== "L" && snakeDir !== "R" ) { // MOVE RIGHT

            nextDir = "R";
            snakeSound(2);
    }

    // PAUSE GAME
    if ( key === "KeyP" ) {

        if ( e.repeat ) return;

        if ( game.state === PLAY ) {

            pauseScreen.style.display = "grid";
            game.state = PAUSE;
            cancelAnimationFrame(game.GL);
            draw();
        }
        else if ( game.state === PAUSE ) {

            pauseScreen.style.display = "none";
            game.state = PLAY;
            game.GL = requestAnimationFrame(gameLoop);
        }
    }
});