/*COSTUMERS------------------------------------------------------------------------------*/
class Game {
    startGameClick() {
        destroySplashScreen();
        destroyHowTo();
        buildGameScreen();
        countdown();
    }
    customerArrives(spot) {
        let queueElem = document.getElementById(spot);
        queueElem.classList.remove("hide");
        queueElem.classList.add("show");
    }
    assignTable(tableNum) {
        let originalTableNum = tableNum.innerText;
        tableNum.innerHTML = originalTableNum + spot1.innerHTML;
        spot1.innerHTML = spot2.innerHTML;
        spot2.innerHTML = spot3.innerHTML;
        spot3.innerHTML = spot4.innerHTML;
        spot4.innerHTML = spot5.innerHTML;
        spot5.innerHTML = spot6.innerHTML;
        spot6.innerHTML = spot7.innerHTML;
        spot7.innerHTML = spot8.innerHTML;
        spot8.innerHTML = '';
    }
}


