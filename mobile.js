// MOBILE CONTROLS

let hold = false;
let smx = 0;
let smy = 0;
let playAudio = false;

const controlArea = mobileControl;

controlArea.addEventListener("pointerdown", (e) => {
    
    if ( game.state !== PLAY ) return;

    smx = e.clientX;
    smy = e.clientY;
    hold = true;
});

controlArea.addEventListener("pointerup", () => { hold = false; });
controlArea.addEventListener("pointercancel", () => { hold = false; });

controlArea.addEventListener("pointermove", (e) => {

    if ( game.state !== PLAY ) return;

    if ( !hold ) return;

    const mx = e.clientX;
    const my = e.clientY;

    resetPos(mx, my);

    if ( mx > smx + 50 ) {
        if ( smx - mx < 0 ) {

            if ( snakeDir !== "L" && nextDir !== "L" && snakeDir !== "R" ) {
                nextDir = "R";
                if ( !playAudio ) {
                    snakeSound(2);
                    playAudio = true;
                }
            }
            return;
        }
    }
    if ( mx < smx - 50 ) {
        if ( smx - mx > 0 ) {

            if ( snakeDir !== "R" && nextDir !== "R" && snakeDir !== "L" ) {
                nextDir = "L";
                if ( !playAudio ) {
                    snakeSound(2);
                    playAudio = true;
                }
            }
            return;
        }
    }
    if ( my < smy - 50 ) {
        if ( smy - my > 0 ) {

            if ( snakeDir !== "D" && nextDir !== "D" && snakeDir !== "U" ) {
                nextDir = "U";
                if ( !playAudio ) {
                    snakeSound(1);
                    playAudio = true;
                }
            }
            return;
        }
    }
    if ( my > smy + 50 ) {
        if ( smy - my < 0 ) {

            if ( snakeDir !== "U" && nextDir !== "U" && snakeDir !== "D" ) {
                nextDir = "D";
                if ( !playAudio ) {
                    snakeSound(1);
                    playAudio = true;
                }
            }
            return;
        }
    }
});

function resetPos(mx, my) {

    if (
        Math.abs(smx - mx) > 100 ||
        Math.abs(smy - my) > 100
    ) {
        smx = mx;
        smy = my;
        playAudio = false;
    }
}

document.addEventListener("contextmenu", (e) => { e.preventDefault(); });
