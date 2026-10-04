# [실습-1] 요소 선택 연습

> 노션 [1] 인터랙티브 자바스크립트 시작하기 › 9번 · 권장 시간 7분

## 목표

id·class·태그 이름·CSS 선택자로 요소를 선택하는 방법을 모두 써 봅니다.

## 진행 방법

1. `starter/index.html`을 브라우저로 엽니다. (VS Code Live Server 권장)
2. 개발자 도구(F12)의 Console 탭을 열어 둡니다.
3. `starter/script.js`의 `// TODO:` 주석을 위에서부터 하나씩 채웁니다.
4. 막히면 `solution/script.js`와 비교해 보세요.

## 요구사항

1. querySelectorAll로 section, button, .box 개수 출력하기
2. getElementById로 #title 선택하기
3. getElementsByClassName으로 .box를 선택하고 for...of로 하나씩 다루기
4. getElementsByTagName으로 p 태그 개수 세기
5. querySelector로 첫 번째 li, 첫 번째 .active 선택하기
6. querySelectorAll + forEach로 박스 글자를 "뉴박스 n"으로 바꾸고 Array.from으로 li.active 글자 모으기

## 예상 결과

**화면** — 선택한 요소에 빨간 테두리가 생기고 박스 5개의 글자가 "뉴박스 1~5"로 바뀝니다.

**Console**

```
=== DOM 선택 연습 시작 ===
DOM 로드 완료!
전체 섹션 개수: 5
전체 버튼 개수: 7
전체 박스 개수: 5

=== 테스트 1: ID 선택 ===
ID 선택 테스트 완료

=== 테스트 2: 클래스 선택 ===
박스 개수: 5
클래스 선택 테스트 완료

=== 테스트 3: 태그 선택 ===
문단 개수: 6
태그 선택 테스트 완료

=== 테스트 4: querySelector ===
첫 번째 li: 항목 1
첫 번째 active: 항목 2
querySelector 테스트 완료

=== 테스트 5: querySelectorAll ===
박스 1: 뉴박스 1
박스 2: 뉴박스 2
박스 3: 뉴박스 3
박스 4: 뉴박스 4
박스 5: 뉴박스 5
Active 항목들: (2) ['항목 2', '항목 4']
리스트 항목 개수: 5
querySelectorAll 테스트 완료
```

> 페이지를 열면 전체 테스트가 한 번 실행됩니다. 버튼으로 테스트를 하나씩 다시 실행할 수 있어요.
