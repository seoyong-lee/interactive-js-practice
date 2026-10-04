# [실습-8] 이벤트 전파와 위임

> 노션 [3] 이벤트 살펴보기 › 6번 · 권장 시간 14분

## 목표

버블링을 눈으로 확인하고 부모 하나에 핸들러를 등록하는 이벤트 위임으로 목록을 다룹니다.

## 진행 방법

1. `starter/index.html`을 브라우저로 엽니다. (VS Code Live Server 권장)
2. 개발자 도구(F12)의 Console 탭을 열어 둡니다.
3. `starter/script.js`의 `// TODO:` 주석을 위에서부터 하나씩 채웁니다.
4. 다 채웠으면 아래 **예상 결과**와 화면 · 콘솔 출력을 비교해 보세요. 풀이는 수업 시간에 함께 봅니다.

## 요구사항

1. 상자 클릭 시 event.target과 event.currentTarget의 id 출력하기
2. 체크박스가 켜져 있으면 inner에서 stopPropagation으로 전파 멈추기
3. 목록(ul) 하나에 click 핸들러를 등록하고 삭제 버튼이면 closest("li")로 찾아 삭제하기
4. 그 밖의 항목 클릭은 closest("li")에 done 클래스 토글하기

## 예상 결과

**화면** — inner를 누르면 세 상자가 함께 깜빡이고 콘솔에는 inner → middle → outer 순서로 찍힙니다. 새로 추가한 항목도 핸들러를 따로 달지 않았는데 클릭·삭제가 됩니다.

**Console**

```
target: inner / currentTarget: inner
target: inner / currentTarget: middle
target: inner / currentTarget: outer
target: inner / currentTarget: inner
→ inner에서 전파를 멈췄어요
추가: 바나나
완료 토글: 바나나
완료 토글: 우유
삭제: 계란
```

> inner 클릭 → 전파 멈추기 체크 후 inner 클릭 → "바나나" 추가 → 바나나·우유 클릭 → 계란 삭제 순서로 했을 때의 출력입니다.
