const nameEl = document.querySelector('#name');
const intro = document.querySelector('#intro');
const skills = document.querySelector('#skills');
const asText = document.querySelector('#as-text');
const asHtml = document.querySelector('#as-html');

const introHTML = '<strong>프론트엔드</strong> 개발자를 꿈꿉니다';

// 1. 이름 바꾸기
document.querySelector('#btn-name').onclick = function () {
    // TODO: 바꾸기 전 이름을 기억해 두고 textContent로 이름을 '김코드잇'으로 바꾼 뒤 출력하세요.

};

// 2. 소개 바꾸기
document.querySelector('#btn-intro').onclick = function () {
    // TODO: innerHTML로 소개 문구를 introHTML로 바꾸고 바뀐 innerHTML을 출력하세요.

};

// 3. textContent vs innerHTML 비교
document.querySelector('#btn-compare').onclick = function () {
    // TODO: 같은 문자열(introHTML)을 asText에는 textContent로, asHtml에는 innerHTML로 넣고 화면을 비교하세요.

    console.log('textContent → 태그가 글자 그대로 보여요');
    console.log('innerHTML  → 태그가 HTML로 해석돼요');
};

// 4. 스킬 추가하기
document.querySelector('#btn-skill').onclick = function () {
    // TODO: innerHTML += 로 skills 끝에 <li>React</li>를 추가하고 li 개수를 출력하세요.

};

// 5. 배지 통째로 바꾸기
document.querySelector('#btn-badge').onclick = function () {
    // outerHTML로 바꾸면 기존 요소가 사라지므로, 클릭할 때마다 새로 선택해요.
    const badge = document.querySelector('#badge');
    // TODO: outerHTML로 배지를 <span id="badge" class="badge new">NEW</span>로 통째로 바꾸고 새 배지의 outerHTML을 출력하세요.

};
