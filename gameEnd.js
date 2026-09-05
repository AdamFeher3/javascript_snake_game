let gameOver = false;
let winGame = false;

/**
 * GAME END
 * 
 * GAME OVER
 * OR
 * WIN
 */
function endGame() {
    
    game.state = MENU;
    
    // SHOW GAME OVER SCREEN
    if ( gameOver ) {
    
        gameOverScreen.style.display = "grid";
        scored.textContent = `SCORE: ${scoreNum}`;
        maxscored.textContent = `MAX SCORE: ${maxScore}`;
        gameoverSound();
    }

    // SHOW WIN SCREEN
    else if ( winGame ) setTimeout(() => {

        winScreen.style.display = "grid";
        winSound();
    }, 300);

    gameplayScreen.style.display = "none";
    mobileControl.style.display = "none";
    cancelAnimationFrame(game.GL);
}

// RESTART GAME
for ( let button of restartBtn ) {

    button.addEventListener("mouseover", () => {

        buttonAudio.pause();
        buttonAudio.currentTime = 0;
        buttonAudio.play();
    });

    button.addEventListener("click", () => {

        gameOverScreen.style.display = "none";
        winScreen.style.display = "none";
        menuScreen.style.display = "grid";
        score.textContent = "SCORE: 0";

        resetGame();
    });
}

// RESET
function resetGame() {
    
    scoreNum = 0;
    last = 0;
    gameOver = false;
    winGame = false;
    snakeDir = "U";
    nextDir = "U";
    hold = false;
}