/*COSTUMERS------------------------------------------------------------------------------*/
class Game {
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

const game = new Game;
const table1Btn = table1.addEventListener('click', ()=> game.assignTable(table1));
const table2Btn = table2.addEventListener('click', ()=> game.assignTable(table2));
const table3Btn = table3.addEventListener('click', ()=> game.assignTable(table3));
const table4Btn = table4.addEventListener('click', ()=> game.assignTable(table4));