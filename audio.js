const buttonAudio = new Audio("./audio/button.mp3");
const appleAudio = new Audio("./audio/apple.mp3");
const gameoverAudio = new Audio("./audio/gameover.mp3");
const winAudio = new Audio("./audio/win.mp3");

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