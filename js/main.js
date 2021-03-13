document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is loaded');
    function generateSplashScreen() {
        const intro = document.getElementById('intro');
        intro.innerHTML = `
        <div>
            <button id="play">Play</button>
        </div>`;

        const playButton = document.querySelector('#play');
        playButton.addEventListener('click', () => {
            intro.classList.add('hide');
            const game = document.getElementById('game');
            game.classList.remove('hide');
            game.classList.add('show');
        })
    }
    generateSplashScreen();

    function printGameOver() {
        //callback
    }
});
