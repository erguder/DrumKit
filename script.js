function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function playSoundWithDelay(keyCode, delay) {
    setTimeout(() => {
        playSound({ keyCode }); // Call playSound with an object containing the keyCode
    }, delay);
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

function playMetalSequence() {
    const duration = 30000;
    const startTime = Date.now();

    function playMetalPattern() {
        const currentTime = Date.now() - startTime;

        if (currentTime < duration) {
            playSoundWithDelay(65, 0);
            playSoundWithDelay(74, 150);
            playSoundWithDelay(75, 300);
            playSoundWithDelay(71, 450);
            playSoundWithDelay(72, 600);
            playSoundWithDelay(76, 750);
            playSoundWithDelay(70, 900);
            playSoundWithDelay(83, 1050);
            playSoundWithDelay(68, 1200);

            playSoundWithDelay(75, 1350);
            playSoundWithDelay(76, 1500);
            playSoundWithDelay(70, 1650);
            playSoundWithDelay(83, 1800);
            playSoundWithDelay(74, 1950);
            playSoundWithDelay(72, 2100);
            playSoundWithDelay(76, 2250);
            playSoundWithDelay(75, 2400);
            playSoundWithDelay(68, 2550);

            setTimeout(playMetalPattern, 1200);
        }
    }

    playMetalPattern();
}

function playPopSequence() {
    const duration = 30000;
    const startTime = Date.now();

    function playPopPattern() {
        const currentTime = Date.now() - startTime;

        if (currentTime < duration) {
            playSoundWithDelay(70, 0);
            playSoundWithDelay(74, 200);
            playSoundWithDelay(76, 400);
            playSoundWithDelay(72, 600);
            playSoundWithDelay(70, 800);
            playSoundWithDelay(74, 1000);
            playSoundWithDelay(76, 1200);
            playSoundWithDelay(72, 1400);
            playSoundWithDelay(70, 1600);

            playSoundWithDelay(72, 1800);
            playSoundWithDelay(70, 2000);
            playSoundWithDelay(74, 2200);
            playSoundWithDelay(76, 2400);
            playSoundWithDelay(72, 2600);
            playSoundWithDelay(70, 2800);
            playSoundWithDelay(74, 3000);
            playSoundWithDelay(76, 3200);
            playSoundWithDelay(72, 3400);

            setTimeout(playPopPattern, 3400);
        }
    }

    playPopPattern();
}

function playBluesSequence() {
    const duration = 30000;
    const startTime = Date.now();

    function playBluesPattern() {
        const currentTime = Date.now() - startTime;

        if (currentTime < duration) {
            playSoundWithDelay(75, 0);
            playSoundWithDelay(68, 200);
            playSoundWithDelay(74, 400);
            playSoundWithDelay(75, 600);
            playSoundWithDelay(70, 800);
            playSoundWithDelay(75, 1000);
            playSoundWithDelay(68, 1200);
            playSoundWithDelay(74, 1400);
            playSoundWithDelay(75, 1600);

            playSoundWithDelay(75, 1800);
            playSoundWithDelay(68, 2000);
            playSoundWithDelay(74, 2200);
            playSoundWithDelay(75, 2400);
            playSoundWithDelay(70, 2600);
            playSoundWithDelay(75, 2800);
            playSoundWithDelay(68, 3000);
            playSoundWithDelay(74, 3200);
            playSoundWithDelay(75, 3400);

            setTimeout(playBluesPattern, 3400);
        }
    }

    playBluesPattern();
}

function playLatinSequence() {
    const duration = 30000;
    const startTime = Date.now();

    function playLatinPattern() {
        const currentTime = Date.now() - startTime;

        if (currentTime < duration) {
            playSoundWithDelay(70, 0);
            playSoundWithDelay(76, 200);
            playSoundWithDelay(75, 400);
            playSoundWithDelay(76, 600);
            playSoundWithDelay(75, 800);
            playSoundWithDelay(76, 1000);
            playSoundWithDelay(75, 1200);
            playSoundWithDelay(76, 1400);
            playSoundWithDelay(70, 1600);

            playSoundWithDelay(76, 1800);
            playSoundWithDelay(75, 2000);
            playSoundWithDelay(76, 2200);
            playSoundWithDelay(75, 2400);
            playSoundWithDelay(76, 2600);
            playSoundWithDelay(75, 2800);
            playSoundWithDelay(76, 3000);
            playSoundWithDelay(75, 3200);
            playSoundWithDelay(70, 3400);
            
            setTimeout(playLatinPattern, 3400);
        }
    }
    playLatinPattern();
}

function playReggaeSequence() {
    const duration = 30000;
    const startTime = Date.now();

    function playReggaePattern() {
        const currentTime = Date.now() - startTime;

        if (currentTime < duration) {
            playSoundWithDelay(75, 0);
            playSoundWithDelay(76, 200);
            playSoundWithDelay(70, 400);
            playSoundWithDelay(76, 600);
            playSoundWithDelay(75, 800);
            playSoundWithDelay(76, 1000);
            playSoundWithDelay(70, 1200);
            playSoundWithDelay(76, 1400);
            playSoundWithDelay(75, 1600);

            playSoundWithDelay(76, 1800);
            playSoundWithDelay(70, 2000);
            playSoundWithDelay(76, 2200);
            playSoundWithDelay(75, 2400);
            playSoundWithDelay(76, 2600);
            playSoundWithDelay(70, 2800);
            playSoundWithDelay(76, 3000);
            playSoundWithDelay(75, 3200);
            playSoundWithDelay(76, 3400);

            setTimeout(playReggaePattern, 3400);
        }
    }

    playReggaePattern();
}

const metal = document.getElementById("metal");
metal.addEventListener("click", playMetalSequence);

const pop = document.getElementById("pop");
pop.addEventListener("click", playPopSequence);

const blues = document.getElementById("blues");
blues.addEventListener("click", playBluesSequence);

const latin = document.getElementById("latin");
latin.addEventListener("click", playLatinSequence);

const reggae = document.getElementById("reggae");
reggae.addEventListener("click", playReggaeSequence);
