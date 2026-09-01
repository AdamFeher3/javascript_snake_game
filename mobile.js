// MOBILE CONTROLS

let hold = false;
let smx = 0;
let smy = 0;

document.addEventListener("pointerdown", (e) => {
    
    if ( game.state !== PLAY ) return;

    smx = e.offsetX;
    smy = e.offsetY;
    hold = true;
});

document.addEventListener("pointerup", () => { hold = false; });

document.addEventListener("pointermove", (e) => {

    if ( game.state !== PLAY ) return;

    if ( !hold ) return;

    const mx = e.offsetX;
    const my = e.offsetY;

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