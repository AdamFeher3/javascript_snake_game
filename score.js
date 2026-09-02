let scoreNum = 0;
let maxScore = 0;

// UPDATE SCORE
function addScore() {

    scoreNum++;
    score.textContent = `SCORE: ${scoreNum}`;

    // HIGHSCORE
    if ( scoreNum > maxScore ) {

        maxScore = scoreNum;
        
        if ( game.difficulty === easy ) localStorage.setItem("hs1", maxScore);
        else if ( game.difficulty === medium ) localStorage.setItem("hs2", maxScore);
        else if ( game.difficulty === hard ) localStorage.setItem("hs3", maxScore);

        highscore.textContent = `HIGH SCORE: ${maxScore}`;
    }
    
    // WIN GAME
    if ( snake.body.length >=
        game.width / game.size *
        game.height / game.size ) winGame = true;
}