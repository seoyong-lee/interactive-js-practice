# [실습-11] 똑Talk한 Enter키!

> 노션 [4] 다양한 이벤트 알아보기 › 8번 · 권장 시간 16분

## 목표

keydown에서 key와 shiftKey를 확인해 Enter는 전송, Shift+Enter는 줄바꿈이 되도록 만듭니다.

## 진행 방법

1. `starter/index.html`을 브라우저로 엽니다. (VS Code Live Server 권장)
2. 개발자 도구(F12)의 Console 탭을 열어 둡니다.
3. `starter/script.js`의 `// TODO:` 주석을 위에서부터 하나씩 채웁니다.
4. 다 채웠으면 아래 **예상 결과**와 화면 · 콘솔 출력을 비교해 보세요. 풀이는 수업 시간에 함께 봅니다.

## 요구사항

1. 입력값이 비어 있으면 무시하고 아니면 말풍선 추가 후 입력창 비우기
2. Shift 없이 Enter만 누르면 preventDefault로 줄바꿈을 막고 sendMessage() 호출하기

## 예상 결과

**화면** — "실습 다 했어!" 입력 → Shift+Enter → "Enter키 똑똑하다" 입력 → Enter를 누르면 두 줄짜리 노란 말풍선이 전송되고 잠시 뒤 친구 답장이 옵니다.

**Console**

```
전송: "실습 다 했어!\nEnter키 똑똑하다"
```

> 한글 입력 중 Enter가 두 번 처리되는 문제는 event.isComposing으로 막아 두었어요. (코드에 이미 들어 있음)
