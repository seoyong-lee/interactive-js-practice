// 선택한 요소에 빨간 테두리를 그려 주는 도우미 함수예요. (수정하지 않아도 돼요)
function mark(element) {
    element.classList.add('selected');
}

console.log('=== DOM 선택 연습 시작 ===');

// script 태그에 defer를 붙였기 때문에, 이 코드가 실행될 때는 HTML을 모두 읽은 상태예요.
console.log('DOM 로드 완료!');

// TODO: querySelectorAll로 section, button, .box 요소를 선택해 각각의 개수를 출력하세요.
//       출력 예: console.log('전체 섹션 개수:', 개수)

function testId() {
    console.log('\n=== 테스트 1: ID 선택 ===');
    // TODO: getElementById로 id가 title인 요소를 선택하고 mark()로 표시하세요.

    console.log('ID 선택 테스트 완료');
}

function testClass() {
    console.log('\n=== 테스트 2: 클래스 선택 ===');
    // TODO: getElementsByClassName으로 box 요소를 모두 선택해 개수를 출력하고 for...of로 하나씩 mark()하세요.

    console.log('클래스 선택 테스트 완료');
}

function testTag() {
    console.log('\n=== 테스트 3: 태그 선택 ===');
    // TODO: getElementsByTagName으로 p 태그를 모두 선택해 개수를 출력하세요.

    console.log('태그 선택 테스트 완료');
}

function testQuerySelector() {
    console.log('\n=== 테스트 4: querySelector ===');
    // TODO: querySelector로 첫 번째 li와 첫 번째 .active 요소를 선택해 textContent를 출력하세요.

    console.log('querySelector 테스트 완료');
}

function testQuerySelectorAll() {
    console.log('\n=== 테스트 5: querySelectorAll ===');
    // 테스트 5는 도전 과제예요. 시간이 남으면 풀어 보세요.
    // TODO: (1) .box를 모두 선택해 글자를 '뉴박스 n'으로 바꾸고 출력하세요. (forEach의 두 번째 인자 index 활용)

    // TODO: (2) li.active의 글자만 모아 배열로 출력하세요. (힌트: Array.from)

    // TODO: (3) #item-list 안의 li 개수를 출력하세요.

    console.log('querySelectorAll 테스트 완료');
}

function runAll() {
    testId();
    testClass();
    testTag();
    testQuerySelector();
    testQuerySelectorAll();
}

function resetBoxes() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box, index) {
        box.textContent = `박스 ${index + 1}`;
    });
    console.log('\n박스 이름을 되돌렸어요.');
}

// 버튼마다 클릭했을 때 실행할 함수를 연결해요. (8. 이벤트와 버튼 클릭)
document.querySelector('#btn-test1').onclick = testId;
document.querySelector('#btn-test2').onclick = testClass;
document.querySelector('#btn-test3').onclick = testTag;
document.querySelector('#btn-test4').onclick = testQuerySelector;
document.querySelector('#btn-test5').onclick = testQuerySelectorAll;
document.querySelector('#btn-all').onclick = runAll;
document.querySelector('#btn-reset').onclick = resetBoxes;

// 페이지를 열자마자 전체 테스트를 한 번 실행해요.
runAll();
