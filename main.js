//DOMELEMENTS
//MENU
const mainMenu = document.getElementById('main-menu');
const singlePlayerUI = document.getElementById('single-player-ui');
const multiPlayerUI = document.getElementById('multi-player-ui');
import Controller from "./scripts/controller.js";
const FPS = 0.5;
let timeSinceLastRender;
let controller;
function main(currentTime) {
    const secondsSinceLastRender = (currentTime - timeSinceLastRender) / 1000;
    window.requestAnimationFrame(main)
    if (secondsSinceLastRender < 1 / FPS) return;
    update();
    timeSinceLastRender = currentTime;
}
// init();
function init(singleplayer) {
    controller = new Controller(singleplayer);
    window.requestAnimationFrame(main)

}

function update() {
    controller.update();
    controller.draw();

}
//Start Single player game
function startSinglePlayerGame() {
    console.log('single')
    mainMenu.style.display = 'none';
    singlePlayerUI.style.display = 'flex';
    init(true)
}
//Start Multiplayer game
function startMultiPlayerGame() {
    console.log('multi')
    mainMenu.style.display = 'none';
    multiPlayerUI.style.display = 'flex';
    init(false);
}
///MAIN-MENU
document.getElementById('btn-single-player').addEventListener('click', startSinglePlayerGame);
document.getElementById('btn-multi-player').addEventListener('click', startMultiPlayerGame);
document.getElementById('btn-rules').addEventListener('click', () => {
    document.getElementById('game-rules').style.display = 'block';
})
document.getElementById('game-rules').addEventListener('click', () => {
    document.getElementById('game-rules').style.display = 'none';
})
//PlayerChoice
