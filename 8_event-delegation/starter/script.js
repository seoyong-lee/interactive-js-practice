// ===== 1. 버블링 관찰하기 =====
const boxes = document.querySelectorAll('.box');
const stopCheck = document.querySelector('#stop-check');

// 상자를 잠깐 깜빡여 주는 도우미 함수예요. (수정하지 않아도 돼요)
function flash(element) {
    element.classList.add('flash');
    setTimeout(function () {
        element.classList.remove('flash');
    }, 600);
}

boxes.forEach(function (box) {
    box.addEventListener('click', function (event) {
        // TODO: (1) target(실제로 클릭한 요소)과 currentTarget(핸들러가 등록된 요소)의 id를 출력하고 currentTarget을 flash()로 표시하세요.

        // TODO: (2) 체크박스가 체크되어 있고 지금 상자가 inner라면 전파를 멈추고 '→ inner에서 전파를 멈췄어요'를 출력하세요.

    });
});

// ===== 2. 이벤트 위임: 장보기 목록 =====
const input = document.querySelector('#item-input');
const list = document.querySelector('#shopping-list');

// 새 항목 추가: li에는 핸들러를 따로 등록하지 않아요!
document.querySelector('#btn-add').addEventListener('click', function () {
    const text = input.value.trim();
    if (text === '') {
        return;
    }
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.classList.add('text');
    span.textContent = text;   // 사용자가 입력한 글자는 textContent로 넣어요
    const button = document.createElement('button');
    button.classList.add('delete');
    button.textContent = '삭제';
    li.append(span, button);
    list.append(li);
    console.log('추가:', text);
    input.value = '';
});

// 부모(ul) 하나에만 핸들러를 등록해서 모든 li의 클릭을 처리해요.
list.addEventListener('click', function (event) {
    // TODO: (3) 클릭한 요소가 삭제 버튼(.delete)이면 가장 가까운 li를 찾아 '삭제: (항목 이름)'을 출력하고 삭제하세요. (closest)
    //       항목 이름은 li.querySelector('.text').textContent로 읽어요.

    // TODO: (4) 그 밖에 li 안쪽을 클릭했다면 가장 가까운 li에 done 클래스를 토글하고 '완료 토글: (항목 이름)'을 출력하세요.

});
