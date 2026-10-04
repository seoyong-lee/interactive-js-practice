const stage = document.querySelector('#stage');
const blueFlag = document.querySelector('#blue-flag');
const whiteFlag = document.querySelector('#white-flag');
const commandEl = document.querySelector('#command');
const scoreEl = document.querySelector('#score');
const remainEl = document.querySelector('#remain');

const COMMANDS = ['청기 올려!', '백기 올려!'];
let command = '';   // 지금 내려진 지시
let score = 0;
let remain = 10;
let playing = false;

// 새 지시를 무작위로 하나 고르는 함수예요. (수정하지 않아도 돼요)
function nextCommand() {
    command = COMMANDS[Math.floor(Math.random() * COMMANDS.length)];
    commandEl.textContent = command;
    commandEl.className = 'command';
}

// 깃발을 올렸을 때 지시와 맞는지 판정하는 함수예요. (수정하지 않아도 돼요)
// judge('청기') 또는 judge('백기')처럼 올린 깃발 이름을 넣어 호출해요.
function judge(raised) {
    if (!playing) {
        return;
    }
    const isCorrect = command === `${raised} 올려!`;
    if (isCorrect) {
        score += 1;
    }
    remain -= 1;
    scoreEl.textContent = score;
    remainEl.textContent = remain;
    console.log(`지시: ${command} / 올린 깃발: ${raised} → ${isCorrect ? '성공' : '실패'}`);

    if (remain === 0) {
        playing = false;
        commandEl.textContent = `게임 끝! ${score}점`;
        return;
    }
    commandEl.textContent = isCorrect ? '성공!' : '앗, 반대!';
    commandEl.className = isCorrect ? 'command correct' : 'command wrong';
    setTimeout(nextCommand, 600);
}

// TODO: (1) stage에서 마우스 버튼을 누르면(mousedown) event.button으로 왼쪽(0)/오른쪽(2)을 구분하세요.
//       왼쪽이면 blueFlag에 'up' 클래스를 붙이고 judge('청기')를, 오른쪽이면 whiteFlag에 'up'을 붙이고 judge('백기')를 호출해요.

// TODO: (2) 마우스 버튼을 떼면(mouseup) 같은 방법으로 해당 깃발의 'up' 클래스를 떼서 내리세요.

// TODO: (3) stage에서 오른쪽 버튼을 눌러도 브라우저 메뉴가 뜨지 않도록 contextmenu의 기본 동작을 막으세요.

document.querySelector('#btn-start').addEventListener('click', function () {
    score = 0;
    remain = 10;
    playing = true;
    scoreEl.textContent = score;
    remainEl.textContent = remain;
    nextCommand();
});
