/*COSTUMERS------------------------------------------------------------------------------*/
class Game {
    customerArrives(spot) {
        let queueElem = document.getElementById(spot);
        queueElem.classList.remove("hide");
        queueElem.classList.add("show");
}
}

const game = new Game;

