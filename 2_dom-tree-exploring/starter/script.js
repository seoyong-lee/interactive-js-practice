// 찾은 요소를 화면에 표시해 주는 도우미 함수예요. (수정하지 않아도 돼요)
// type: 'parent' | 'prev' | 'next'
function mark(element, type) {
    element.classList.add(`is-${type}`);
}

console.log('=== DOM 트리 탐색 연습 ===');
console.log('DOM 로드 완료!');

const mainMenu = document.querySelector('#main-menu');
const item3 = document.querySelector('#item3');

// TODO: mainMenu의 자식 요소 개수와, 클래스가 active인 요소의 글자를 출력하세요.

// 테스트 1: 부모 찾기
console.log('\n=== 테스트 1: 부모 찾기 ===');
// TODO: item3의 부모 요소를 찾아 id를 출력하고 mark(부모, 'parent')로 표시하세요.

console.log('부모 찾기 완료');

// 테스트 2: 자식 찾기
console.log('\n=== 테스트 2: 자식 찾기 ===');
// TODO: children, firstElementChild, lastElementChild로 자식 요소를 찾아 출력하세요.
//       자식 개수도 출력하고 for문으로 'n번째 자식:'을 하나씩 출력해요.

console.log('자식 찾기 완료');

// 테스트 3: 형제 찾기
console.log('\n=== 테스트 3: 형제 찾기 ===');
// TODO: item3의 이전 형제와 다음 형제 요소를 찾아 출력하고 mark()로 'prev' / 'next' 표시를 하세요.

console.log('형제 찾기 완료');

