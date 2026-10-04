# [실습-5] 이미지 갤러리

> 노션 [2] 브라우저와 자바스크립트 › 13번 · 권장 시간 14분

## 목표

getAttribute·setAttribute와 classList·style로 이미지 갤러리를 만듭니다.

## 진행 방법

1. `starter/index.html`을 브라우저로 엽니다. (VS Code Live Server 권장)
2. 개발자 도구(F12)의 Console 탭을 열어 둡니다.
3. `starter/script.js`의 `// TODO:` 주석을 위에서부터 하나씩 채웁니다.
4. 다 채웠으면 아래 **예상 결과**와 화면 · 콘솔 출력을 비교해 보세요. 풀이는 수업 시간에 함께 봅니다.

## 요구사항

1. 썸네일의 src, alt를 getAttribute로 꺼내 큰 이미지에 setAttribute로 넣기
2. 캡션 글자를 alt 값으로 바꾸기
3. 모든 썸네일에서 selected를 빼고 클릭한 썸네일에만 추가하기 (classList)
4. 흑백 보기: classList.toggle로 grayscale 클래스 붙였다 떼기
5. 작게/크게 보기: style.width를 60% ↔ 100%로 바꾸기

## 예상 결과

**화면** — 썸네일을 누르면 큰 이미지와 캡션이 바뀌고 선택한 썸네일에 보라색 테두리가 생깁니다.

**Console**

```
선택: 바다 (images/sea.svg)
흑백 모드: true
흑백 모드: false
이미지 너비: 60%
이미지 너비: 100%
선택: 숲 (images/forest.svg)
```

> getAttribute("src")는 HTML에 적힌 값 그대로(images/sea.svg)를, img.src 프로퍼티는 전체 주소를 돌려줍니다.
