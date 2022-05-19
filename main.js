
import Controller from "./scripts/controller.js";
const FPS = 1;
let timeSinceLastRender;
let controller;
function main(currentTime) {
    const secondsSinceLastRender = (currentTime - timeSinceLastRender) / 1000;
    window.requestAnimationFrame(main)
    if (secondsSinceLastRender < 1 / FPS) return;
    update();
    timeSinceLastRender = currentTime;
}
init();
function init() {
    controller = new Controller();
    window.requestAnimationFrame(main)
}

function update() {
    controller.update();
    controller.draw();

}