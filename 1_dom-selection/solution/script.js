// 선택한 요소에 빨간 테두리를 그려 주는 도우미 함수예요. (수정하지 않아도 돼요)
function mark(element) {
    element.classList.add('selected');
}

console.log('=== DOM 선택 연습 시작 ===');

// script 태그에 defer를 붙였기 때문에, 이 코드가 실행될 때는 HTML을 모두 읽은 상태예요.
console.log('DOM 로드 완료!');

//        출력 예: console.log('전체 섹션 개수:', 개수)
console.log('전체 섹션 개수:', document.querySelectorAll('section').length);
console.log('전체 버튼 개수:', document.querySelectorAll('button').length);
console.log('전체 박스 개수:', document.querySelectorAll('.box').length);

function testId() {
    console.log('\n=== 테스트 1: ID 선택 ===');
    const title = document.getElementById('title');
    mark(title);
    console.log('ID 선택 테스트 완료');
}

function testClass() {
    console.log('\n=== 테스트 2: 클래스 선택 ===');
    const boxes = document.getElementsByClassName('box');
    console.log('박스 개수:', boxes.length);
    for (const box of boxes) {
        mark(box);
    }
    console.log('클래스 선택 테스트 완료');
}

function testTag() {
    console.log('\n=== 테스트 3: 태그 선택 ===');
    const paragraphs = document.getElementsByTagName('p');
    console.log('문단 개수:', paragraphs.length);
    console.log('태그 선택 테스트 완료');
}

function testQuerySelector() {
    console.log('\n=== 테스트 4: querySelector ===');
    const firstItem = document.querySelector('li');
    const firstActive = document.querySelector('.active');
    console.log('첫 번째 li:', firstItem.textContent);
    console.log('첫 번째 active:', firstActive.textContent);
    console.log('querySelector 테스트 완료');
}

function testQuerySelectorAll() {
    console.log('\n=== 테스트 5: querySelectorAll ===');
    // 테스트 5는 도전 과제예요. 시간이 남으면 풀어 보세요.
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box, index) {
        box.textContent = `뉴박스 ${index + 1}`;
        console.log(`박스 ${index + 1}:`, box.textContent);
    });

    const activeItems = document.querySelectorAll('li.active');
    const activeTexts = Array.from(activeItems).map(function (item) {
        return item.textContent;
    });
    console.log('Active 항목들:', activeTexts);

    console.log('리스트 항목 개수:', document.querySelectorAll('#item-list li').length);
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
