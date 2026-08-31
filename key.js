// CONTROLS

const includeKeys = [
    "KeyW","KeyS","KeyA","KeyD","KeyP",
    "ArrowUp","ArrowDown","ArrowLeft","ArrowRight"
];

document.addEventListener("keydown", (e) => {
    
    // GET PRESSED KEY
    const key = e.code;

    if ( includeKeys.includes(e.code) ) e.preventDefault();

    // CHANGE DIRECTION
    if ( ( key === "KeyW" || key === "ArrowUp" )
        && snakeDir !== "D" && nextDir !== "D" ) // MOVE UP
        nextDir = "U";
    
    if ( ( key === "KeyS" || key === "ArrowDown" )
        && snakeDir !== "U" && nextDir !== "U" ) // MOVE DOWN
        nextDir = "D";
    
    if ( ( key === "KeyA" || key === "ArrowLeft" )
        && snakeDir !== "R" && nextDir !== "R" ) // MOVE LEFT
        nextDir = "L";
    
    if ( ( key === "KeyD" || key === "ArrowRight" )
        && snakeDir !== "L" && nextDir !== "L" ) // MOVE RIGHT
        nextDir = "R";

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