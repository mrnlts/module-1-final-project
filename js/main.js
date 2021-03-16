document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded');
});
const game = new Game();

/*PATHS TO HTML ELEMENTS-----------------------------------------------------------------*/
const splashScreen = document.getElementById("splashScreen");
const startBtn = document.getElementById("start");
const playBtn = document.querySelector("#howToScreen button");
const howToBtn = document.getElementById("howTo");
const howToScreen = document.getElementById("howToScreen");
const gameScreen = document.getElementById("gameScreen");
const gameScreenBackg = document.getElementById("gameScreenImg");
const queue = document.getElementById("queue");
const spot1 = document.getElementById("spot1");
const spot2 = document.getElementById("spot2");
const spot3 = document.getElementById("spot3");
const spot4 = document.getElementById("spot4");
const spot5 = document.getElementById("spot5");
const spot6 = document.getElementById("spot6");
const spot7 = document.getElementById("spot7");
const spot8 = document.getElementById("spot8");
const timer = document.getElementById("timer");
const tables = document.getElementById("tables");
game.table1 = document.getElementById("table1");
game.table2 = document.getElementById("table2");
game.table3 = document.getElementById("table3");
game.table4 = document.getElementById("table4");
const winScreen = document.getElementById("winScreen");
const winBtn = document.querySelector("#winScreen button");
const loseScreen = document.getElementById("loseScreen");
const loseBtn = document.querySelector("#loseScreen button");


/*DESTROYER FUNCTIONS--------------------------------------------------------------------*/
function destroyDom(target) { target.innerHTML = ''; }
function destroySplashScreen() { destroyDom(splashScreen); }
function destroyHowTo() { destroyDom(howToScreen); }
function destroyGame() { destroyDom(gameScreen); }
function destroyWinScreen() { destroyDom(winScreen); }
function destroyLoseScreen() { destroyDom(loseScreen); }


/*BUILDER FUNCTIONS----------------------------------------------------------------------*/
function buildSplashScreen() {
    splashScreen.innerHTML = '<img src="img/Splash-screen.png" alt="initial-screen"><button id="start">START<span></span><span></span><span></span><span></span></button><button id="howTo">HOW TO PLAY<span></span><span></span><span></span><span></span></button>';
    splashScreen.classList.add("show");
    startBtn.addEventListener('click', () => startGameClick());
    howToBtn.addEventListener('click', () => howToClick());
}
function buildHowToScreen() {
    howToScreen.classList.remove("hide");
    howToScreen.classList.add("show");
}
function buildGameScreen() {
    gameScreenBackg.classList.remove("hide");
    gameScreenBackg.classList.add("show");
    timer.classList.remove("hide");
    timer.classList.add("show");
    tables.classList.remove("hide");
    tables.classList.add("show");
    setTimeout(buildLoseScreen, 300000);
}
function buildWinScreen() {
    destroyGame();
    winScreen.classList.remove("hide");
    winScreen.classList.add("show");
}
function buildLoseScreen() {
    destroyGame();
    loseScreen.classList.remove("hide");
    loseScreen.classList.add("show");
}


/*BUTTON-RELATED FUNCTIONS---------------------------------------------------------------*/
function howToClick() {
    destroySplashScreen();
    buildHowToScreen();
}
function startGameFromHowTo() {
    startGameClick();
}
function playAgainFromVictory() {
    destroyWinScreen();
    buildSplashScreen();
}
function playAgainFromFailure() {
    destroyLoseScreen();
    buildSplashScreen();
}


/*EVENT LISTENERS------------------------------------------------------------------------*/
startBtn.addEventListener('click', () => game.startGameClick());
howToBtn.addEventListener('click', () => howToClick());
playBtn.addEventListener('click', () => startGameFromHowTo());
winBtn.addEventListener('click', () => playAgainFromVictory());
loseBtn.addEventListener('click', () => playAgainFromFailure());