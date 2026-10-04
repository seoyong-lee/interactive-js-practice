# [실습-3] 콘텐츠 변경하기

> 노션 [2] 브라우저와 자바스크립트 › 7번 · 권장 시간 10분

## 목표

textContent, innerHTML, outerHTML로 요소의 내용을 바꾸고 차이를 비교합니다.

## 진행 방법

1. `starter/index.html`을 브라우저로 엽니다. (VS Code Live Server 권장)
2. 개발자 도구(F12)의 Console 탭을 열어 둡니다.
3. `starter/script.js`의 `// TODO:` 주석을 위에서부터 하나씩 채웁니다.
4. 다 채웠으면 아래 **예상 결과**와 화면 · 콘솔 출력을 비교해 보세요. 풀이는 수업 시간에 함께 봅니다.

## 요구사항

1. textContent로 이름을 "김코드잇"으로 바꾸기
2. innerHTML로 소개 문구를 굵은 글씨가 섞인 HTML로 바꾸기
3. 같은 문자열을 textContent와 innerHTML로 각각 넣고 화면 비교하기
4. innerHTML += 로 스킬(li) 추가하기
5. outerHTML로 배지 요소를 통째로 바꾸기

## 예상 결과

**화면** — 버튼 1~5를 차례로 누르면 프로필 카드의 이름·소개·스킬·배지가 바뀌고 비교 영역에서 태그가 글자로 보이는 경우와 HTML로 해석되는 경우를 함께 볼 수 있습니다.

**Console**

```
이름 변경: 홍길동 → 김코드잇
소개 innerHTML: <strong>프론트엔드</strong> 개발자를 꿈꿉니다
textContent → 태그가 글자 그대로 보여요
innerHTML  → 태그가 HTML로 해석돼요
스킬 개수: 4
새 배지: <span id="badge" class="badge new">NEW</span>
```

> outerHTML로 바꾸면 원래 요소는 사라지고 새 요소가 들어옵니다. 그래서 바꾼 뒤에는 다시 선택해야 해요.
