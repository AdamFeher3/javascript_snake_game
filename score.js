let scoreNum = 0;

// UPDATE SCORE
function addScore() {

    scoreNum++;
    score.textContent = `SCORE: ${scoreNum}`;

    // WIN GAME
    if ( snake.body.length >=
        game.width / game.size *
        game.height / game.size ) winGame = true;
}