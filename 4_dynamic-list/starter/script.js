const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
const count = document.querySelector('#count');

// 리스트의 개수를 화면에 표시해요. (개수가 바뀌면 updateCount()를 불러요)
function updateCount() {
    count.textContent = list.children.length;
}

// 할 일 하나를 li 요소로 만들어 돌려주는 함수
function createItem(text) {
    const li = document.createElement('li');

    // TODO: (1) span을 만들어 글자를 text로 채운 뒤 li 안에 넣으세요.

    // TODO: (2) '맨 위로' 버튼을 만들어 li에 넣고 클릭하면 li를 리스트 맨 앞으로 옮기세요. (prepend)
    //       옮긴 뒤 `이동: ${text} → 맨 위`를 출력해요.

    // TODO: (3) '삭제' 버튼을 만들어 li에 넣고 클릭하면 li를 삭제한 뒤 updateCount()로 개수를 갱신하세요. (remove)
    //       그리고 `삭제: ${text} (총 ${list.children.length}개)`를 출력해요.

    return li;
}

// 추가 버튼
document.querySelector('#btn-add').onclick = function () {
    const text = input.value.trim();
    if (text === '') {
        return;
    }

    // TODO: createItem으로 만든 li를 리스트 맨 끝에 추가하고 개수를 갱신하세요. (append)

    console.log(`추가: ${text} (총 ${list.children.length}개)`);

    input.value = '';
    input.focus();
};

// 처음 화면에 보여줄 할 일 3개
['코드잇 강의 듣기', '실습 코드 정리하기', '운동하기'].forEach(function (text) {
    list.append(createItem(text));
});
updateCount();
