const sky = document.querySelector('#sky');
const overlay = document.querySelector('#overlay');
const answer = document.querySelector('#answer');
const scoreEl = document.querySelector('#score');
const livesEl = document.querySelector('#lives');

const WORDS = [
    'const', 'let', 'function', 'window', 'document', 'event', 'click', 'keydown',
    'input', 'change', 'focus', 'blur', 'scroll', 'target', 'button', 'append',
    'remove', 'dataset', 'classList', 'querySelector', 'textContent', 'DOM',
];

let score = 0;
let lives = 3;
let timer = null;     // setInterval이 돌려준 번호 (게임 진행 중이면 null이 아님)
let paused = false;   // 입력창을 벗어나 일시정지된 상태면 true
let tickCount = 0;

// ===== 게임 진행 (수정하지 않아도 돼요) =====
function showOverlay(text) {
    overlay.textContent = text;
    overlay.classList.remove('hidden');
}

function hideOverlay() {
    overlay.classList.add('hidden');
}

// 모든 단어에서 match 강조를 떼요.
function clearMatch() {
    sky.querySelectorAll('.word').forEach(function (word) {
        word.classList.remove('match');
    });
}

// 하늘 위쪽 무작위 위치에 단어 하나를 만들어요.
function spawnWord() {
    const word = document.createElement('div');
    word.classList.add('word');
    word.textContent = WORDS[Math.floor(Math.random() * WORDS.length)];
    word.style.left = `${Math.floor(Math.random() * (sky.clientWidth - 140))}px`;
    word.style.top = '0px';
    sky.append(word);
}

// 0.05초마다 실행: 단어를 아래로 내리고 땅에 닿으면 목숨을 줄여요.
function tick() {
    tickCount += 1;
    if (tickCount % 40 === 1) {
        spawnWord();
    }
    sky.querySelectorAll('.word').forEach(function (word) {
        const top = parseFloat(word.style.top) + 1.5;
        word.style.top = `${top}px`;
        if (top > sky.clientHeight - 50) {
            word.remove();
            lives -= 1;
            livesEl.textContent = '❤️'.repeat(lives) || '💔';
            console.log('놓친 단어:', word.textContent);
            if (lives === 0) {
                stopGame();
                showOverlay(`게임 끝! 점수 ${score}점`);
            }
        }
    });
}

function startGame() {
    if (timer === null) {
        timer = setInterval(tick, 50);
    }
}

function stopGame() {
    clearInterval(timer);
    timer = null;
}

document.querySelector('#btn-start').addEventListener('click', function () {
    sky.querySelectorAll('.word').forEach(function (word) {
        word.remove();
    });
    score = 0;
    lives = 3;
    tickCount = 0;
    paused = false;
    scoreEl.textContent = score;
    livesEl.textContent = '❤️❤️❤️';
    hideOverlay();
    answer.focus();
    startGame();
});

// ===== 입력 이벤트 다루기 =====

// TODO: (1) input 이벤트: 입력할 때마다 입력값으로 시작하는 단어에만 match 클래스를 붙이세요. (startsWith)
//       입력값이 비어 있으면 모든 단어에서 match를 떼요.

// TODO: (2) change 이벤트(Enter를 누르면 발생): 입력값과 똑같은 단어가 있으면 지우고 점수를 올리세요.
//       맞히면 '맞힌 단어: (단어)'를 출력하고 마지막에는 입력창을 비운 뒤 clearMatch()를 부르세요.

// TODO: (3) blur: 게임 진행 중(timer !== null)이면 stopGame()과 showOverlay('일시정지 · 입력창을 클릭하면 이어서 해요')를 부르고 paused를 true로 바꾸세요.
//       focus: paused가 true일 때만 hideOverlay()와 startGame()을 부르고 paused를 false로 바꾸세요.

