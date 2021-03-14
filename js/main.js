document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded');
});

//PATHS TO HTML ELEMENTS
const splashScreen = document.getElementById("splashScreen");
const startBtn = document.getElementById("start");
const howToBtn = document.getElementById("howTo");
const playBtn = document.querySelector("#howToScreen button");
const winBtn = document.querySelector("#winScreen button");
const loseBtn = document.querySelector("#loseScreen button");
const howToScreen = document.getElementById("howToScreen");
const gameScreen = document.getElementById("gameScreen");
const winScreen = document.getElementById("winScreen");
const loseScreen = document.getElementById("loseScreen");


//DESTROYER FUNCTIONS
function destroyDom(target) {target.innerHTML = '';}
function destroySplashScreen() {destroyDom(splashScreen);}
function destroyHowTo() {destroyDom(howToScreen);}
function destroyGame() {destroyDom(gameScreen);}
function destroyWinScreen(){destroyDom(winScreen);}
function destroyLoseScreen(){destroyDom(loseScreen);}

//BUILDER FUNCTIONS
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
    gameScreen.classList.remove("hide");
    gameScreen.classList.add("show");
    // let start = 300;
    // let gameIntervalId = setInterval(() => {start--;}, 1000);
    // function getMinutes() {return Math.floor(start/60);};
    // let 
    // getMinutes();
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

//BUTTON-RELATED FUNCTIONS  
function startGameClick() {
    destroySplashScreen();
    buildGameScreen();
    setTimeout(() => buildWinScreen(), 3000);
    console.log("Start");
}
function howToClick() {
    destroySplashScreen();
    buildHowToScreen();
}
function startGameFromHowTo() {
    destroyHowTo();
    buildGameScreen();
    setTimeout(() => buildLoseScreen(), 3000);
}
function playAgainFromVictory(){
    destroyWinScreen();
    buildSplashScreen();
}
function playAgainFromFailure(){
    destroyLoseScreen();
    buildSplashScreen();
}

//EVENT LISTENERS
startBtn.addEventListener('click', () => startGameClick());
howToBtn.addEventListener('click', () => howToClick());
playBtn.addEventListener('click', () => startGameFromHowTo());
winBtn.addEventListener('click', () => playAgainFromVictory());
loseBtn.addEventListener('click', () => playAgainFromFailure());