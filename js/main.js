document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded');
});

/*PATHS TO HTML ELEMENTS-----------------------------------------------------------------*/
const splashScreen = document.getElementById("splashScreen");
const startBtn = document.getElementById("start");
const playBtn = document.querySelector("#howToScreen button");
const howToBtn = document.getElementById("howTo");
const howToScreen = document.getElementById("howToScreen");
const gameScreen = document.getElementById("gameScreen");
const queue = document.getElementById("queue");
const timer = document.getElementById("timer");
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
    gameScreen.classList.remove("hide");
    gameScreen.classList.add("show");
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

/*TIMER----------------------------------------------------------------------------------*/
function countdown() {
    let start = 300;
    function countdown() {
        function getMinutes() { return "0" + Math.floor(start / 60); }
        let rest = Math.round(start % 60);
        function getSeconds() {
            if (rest === 0) {
                return "00";
            } else {
                if (rest < 10) {
                    return "0" + rest;
                } else {
                    return rest;
                }
            }
        }
        return timer.innerText = `${getMinutes()}:${getSeconds()}`;
    }
    function substract() {
        if (start >= 0) {
            countdown();
            start--;
        } else {
            clearInterval(subsInt);
            // clearInterval(customerArrival);
            buildLoseScreen();
            return;
        }
    }
    let subsInt = setInterval(() => substract(), 1000);
}

/*BUTTON-RELATED FUNCTIONS---------------------------------------------------------------*/
function startGameClick() {
    destroySplashScreen();
    destroyHowTo();
    buildGameScreen();
    countdown();
    // customerArrives();
}
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
startBtn.addEventListener('click', () => startGameClick());
howToBtn.addEventListener('click', () => howToClick());
playBtn.addEventListener('click', () => startGameFromHowTo());
winBtn.addEventListener('click', () => playAgainFromVictory());
loseBtn.addEventListener('click', () => playAgainFromFailure());


/*COSTUMERS------------------------------------------------------------------------------*/
// function customerArrives() {
//     let customerArrival = setInterval(() => {queue.innerText = '<img src="/img/Customer0.png" alt="customer" id="customer">';}, 5000);
// }


