const buttonAudio = new Audio("./audio/button.mp3");
const appleAudio = new Audio("./audio/apple.mp3");
const gameoverAudio = new Audio("./audio/gameover.mp3");
const winAudio = new Audio("./audio/win.mp3");
const dir1Audio = new Audio("./audio/dir1.wav");
const dir2Audio = new Audio("./audio/dir2.wav");

// BUTTON HOVER SOUND EFFECT
for ( let btn of allBtn ) {

    btn.addEventListener("mouseover", () => {

        buttonAudio.pause();
        buttonAudio.currentTime = 0;
        buttonAudio.play();
    });
}

// APPLE EAT SOUND EFFECT
function eatApple() {

    appleAudio.pause();
    appleAudio.currentTime = 0.25;
    appleAudio.play();
}

// GAME OVER SOUND EFFECT
function gameoverSound() {

    gameoverAudio.pause();
    gameoverAudio.currentTime = 0;
    gameoverAudio.play();
}

// WIN SOUND EFFECT
function winSound() {

    winAudio.pause();
    winAudio.currentTime = 0;
    winAudio.play();
}

// SNAKE CHANGE DIRECTION SOUND EFFECT
function snakeSound(d) {

    dir1Audio.pause();
    dir1Audio.currentTime = 0.06;
    dir1Audio.volume = 0.8;
    dir2Audio.pause();
    dir2Audio.currentTime = 0.06;
    dir2Audio.volume = 0.8;

    if      ( d === 1 ) dir1Audio.play();
    else if ( d === 2 ) dir2Audio.play();
}

