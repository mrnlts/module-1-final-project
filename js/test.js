class Game {
    constructor() {
        this.table1 = table1;
        this.table2 = table2;
        this.table3 = table3;
        this.table4 = table4;
        this.table1Btn = this.table1.addEventListener('click', ()=> {this.assignTable(table1); this.btnCountdown(table1);});
        this.table2Btn = this.table2.addEventListener('click', ()=> {this.assignTable(table2); this.btnCountdown(table2);});
        this.table3Btn = this.table3.addEventListener('click', ()=> {this.assignTable(table3); this.btnCountdown(table3);});
        this.table4Btn = this.table4.addEventListener('click', ()=> {this.assignTable(table4); this.btnCountdown(table4);});
        //     this.customers = options.customers;
        //     this.spots = options.spots;
    }
    countdown(start, target) {
        function getTime() {
            let rest = Math.round(start % 60);
            function getMinutes() { return "0" + Math.floor(start / 60); }
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
        return target.innerText = `${getMinutes()}:${getSeconds()}`;
        }
        function substract() {
            if (start >= 0) {
                getTime();
                start--;
            } else {
                clearInterval(timeInterval);
                return;
            }
        }
        let timeInterval = setInterval(() => substract(), 1000);
    }
    gameCountdown(){
        this.countdown(300, timer);
    }
    btnCountdown(tableNum) {
        tableNum.innerHTML = this.countdown(10, tableNum);
    }
    customerArrives(spot) {
        let queueElem = document.getElementById(spot);
        queueElem.classList.remove("hide");
        queueElem.classList.add("show");
    }
    buildQueue() {
        setTimeout(() => this.customerArrives("spot1"), 6000);
        setTimeout(() => this.customerArrives("spot2"), 11000);
        setTimeout(() => this.customerArrives("spot3"), 16000);
        setTimeout(() => this.customerArrives("spot4"), 21000);
        setTimeout(() => this.customerArrives("spot5"), 26000);
        setTimeout(() => this.customerArrives("spot6"), 31000);
        setTimeout(() => this.customerArrives("spot7"), 36000);
        setTimeout(() => this.customerArrives("spot8"), 41000);
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
    startGameClick() {
        destroySplashScreen();
        destroyHowTo();
        buildGameScreen();
        this.gameCountdown();
        this.buildQueue();
    }
}