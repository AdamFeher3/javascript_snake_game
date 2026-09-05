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

    if ( game.state !== PLAY ) return;

    if ( !hold ) return;

    const mx = e.clientX;
    const my = e.clientY;

    resetPos(mx, my);

    if ( mx > smx + 100 ) {
        if ( smx - mx < 0 ) {

            if ( snakeDir !== "L" && nextDir !== "L" && snakeDir !== "R" ) {
                nextDir = "R";
                snakeSound(2);
            }
            return;
        }
    }
    if ( mx < smx - 100 ) {
        if ( smx - mx > 0 ) {

            if ( snakeDir !== "R" && nextDir !== "R" && snakeDir !== "L" ) {
                nextDir = "L";
                snakeSound(2);
            }
            return;
        }
    }
    if ( my < smy - 100 ) {
        if ( smy - my > 0 ) {

            if ( snakeDir !== "D" && nextDir !== "D" && snakeDir !== "U" ) {
                nextDir = "U";
                snakeSound(1);
            }
            return;
        }
    }
    if ( my > smy + 100 ) {
        if ( smy - my < 0 ) {

            if ( snakeDir !== "U" && nextDir !== "U" && snakeDir !== "D" ) {
                nextDir = "D";
                snakeSound(1);
            }
            return;
        }
    }
});

function resetPos(mx, my) {

    if (
        Math.abs(smx - mx) > 110 ||
        Math.abs(smy - my) > 110
    ) {
        smx = mx;
        smy = my;
    }
}

document.addEventListener("contextmenu", (e) => { e.preventDefault(); });