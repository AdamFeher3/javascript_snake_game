// GAME LOOP
let last = 0;

function gameLoop(time) {

    const dt = (time - last) / 1000;
    last = time;

    if ( game.state === PLAY ) {

        update(dt);
        draw();
    }

    game.GL = requestAnimationFrame(gameLoop);
}