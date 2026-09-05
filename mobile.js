// MOBILE CONTROLS

let hold = false;
let smx = 0;
let smy = 0;

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

    if ( game.state !== PLAY || !hold ) return;

    const mx = e.clientX;
    const my = e.clientY;

    const dx = smx - mx;
    const dy = smy - my;

    if ( Math.abs(dx) < 50 && Math.abs(dy) < 50 ) return;

    let changed = false;

    if ( Math.abs(dx) > Math.abs(dy) ) {

        if ( dx < 0 ) {

            if ( snakeDir !== "L" && nextDir !== "L" && nextDir !== "R" ) {
                nextDir = "R";
                snakeSound(2);
                changed = true;
            }
        }
        else {
            if ( snakeDir !== "R" && nextDir !== "R" && nextDir !== "L" ) {
                nextDir = "L";
                snakeSound(2);
                changed = true;
            }
        }
    }
    else {
        if ( dy < 0 ) {

            if ( snakeDir !== "U" && nextDir !== "U" && nextDir !== "D" ) {
                nextDir = "D";
                snakeSound(1);
                changed = true;
            }
        }
        else {
            if ( snakeDir !== "D" && nextDir !== "D" && nextDir !== "U" ) {
                nextDir = "U";
                snakeSound(1);
                changed = true;
            }
        }
    }

    if ( changed ) {

        smx = mx;
        smy = my;
    }
});

document.addEventListener("contextmenu", (e) => { e.preventDefault(); });
