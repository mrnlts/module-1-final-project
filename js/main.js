document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded');
});

//PATHS TO HTML ELEMENTS
const splashScreen = document.getElementById("splashScreen");
const startBtn = document.getElementById("start");
const howToBtn = document.getElementById("howTo");
const playBtn = document.querySelector("#howToScreen button");
const howToScreen = document.getElementById("howToScreen");
const gameScreen = document.getElementById("gameScreen");
const winScreen = document.getElementById("winScreen");
const loseScreen = document.getElementById("loseScreen");


//DESTROYER FUNCTIONS
function destroyDom(target) {target.innerHTML = '';}
function destroySplashScreen() {destroyDom(splashScreen);}
function destroyHowTo() {destroyDom(howToScreen);}

//BUILDER FUNCTIONS
function buildHowToScreen() {
    howToScreen.classList.remove("hide");
    howToScreen.classList.add("show");}
function buildGameScreen() {
    gameScreen.classList.remove("hide");
    gameScreen.classList.add("show");
}

//BUTTON-RELATED FUNCTIONS
function startGameClick() {
    destroySplashScreen();
    buildGameScreen();
}
function howToClick() {
    destroySplashScreen();
    buildHowToScreen();
}
function startGameFromHowTo() {
    destroyHowTo();
    buildGameScreen();
}

startBtn.addEventListener('click', () => startGameClick());
howToBtn.addEventListener('click', () => howToClick());
playBtn.addEventListener('click', () => startGameFromHowTo());