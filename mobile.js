// MOBILE CONTROLS

let hold = false;
let smx = 0;
let smy = 0;

const gameArea = document.getElementById("gameplay");

gameArea.addEventListener("pointerdown", (e) => {
    
    if ( game.state !== PLAY ) return;

    smx = e.clientX;
    smy = e.clientY;
    hold = true;
});

gameArea.addEventListener("pointerup", () => { hold = false; });
gameArea.addEventListener("pointercancel", () => { hold = false; });

gameArea.addEventListener("pointermove", (e) => {

    if ( game.state !== PLAY ) return;

    if ( !hold ) return;

    const mx = e.clientX;
    const my = e.clientY;

    resetPos(mx, my);

    if ( mx > smx + 50 ) if ( smx - mx < 0 ) {

        if ( snakeDir !== "L" && nextDir !== "L" ) nextDir = "R";
        return;
    }
    if ( mx < smx - 50 ) if ( smx - mx > 0 ) {

        if ( snakeDir !== "R" && nextDir !== "R" ) nextDir = "L";
        return;
    }
    if ( my < smy - 50 ) if ( smy - my > 0 ) {

        if ( snakeDir !== "D" && nextDir !== "D" ) nextDir = "U";
        return;
    }
    if ( my > smy + 50 ) if ( smy - my < 0 ) {

        if ( snakeDir !== "U" && nextDir !== "U" ) nextDir = "D";
        return;
    }
});

function resetPos(mx, my) {

    if (
        Math.abs(smx - mx) > 100 ||
        Math.abs(smy - my) > 100
    ) {
        smx = mx;
        smy = my;
    }
}

document.addEventListener("contextmenu", (e) => { e.preventDefault(); });
