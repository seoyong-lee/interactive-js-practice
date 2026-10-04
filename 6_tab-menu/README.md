# [실습-6] 탭 메뉴 만들기

> 노션 [2] 브라우저와 자바스크립트 › 15번 · 권장 시간 11분

## 목표

data-* 속성과 dataset으로 어떤 탭을 눌렀는지 구분해 탭 메뉴를 만듭니다.

## 진행 방법

1. `starter/index.html`을 브라우저로 엽니다. (VS Code Live Server 권장)
2. 개발자 도구(F12)의 Console 탭을 열어 둡니다.
3. `starter/script.js`의 `// TODO:` 주석을 위에서부터 하나씩 채웁니다.
4. 다 채웠으면 아래 **예상 결과**와 화면 · 콘솔 출력을 비교해 보세요. 풀이는 수업 시간에 함께 봅니다.

## 요구사항

1. dataset.tab으로 클릭한 탭 이름 꺼내기
2. 모든 탭에서 active를 빼고 클릭한 탭에만 추가하기
3. data-panel 값이 같은 패널에만 active를 붙이기

## 예상 결과

**화면** — CSS, JavaScript 탭을 차례로 누르면 밑줄이 옮겨 가고 아래 설명 패널이 바뀝니다.

**Console**

```
선택한 탭: css
선택한 탭: js
```

> data-tab="js" 속성은 JavaScript에서 tab.dataset.tab으로 읽습니다.
