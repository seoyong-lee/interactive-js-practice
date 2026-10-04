const messages = document.querySelector('#messages');
const textarea = document.querySelector('#message');
const sendButton = document.querySelector('#btn-send');

const REPLIES = ['오 좋다! 👍', '나도 방금 끝냈어', 'Enter키 똑똑하네 ㅋㅋ', '내일 같이 복습하자!'];
let replyIndex = 0;

// 말풍선 하나를 화면에 추가하는 함수예요. (수정하지 않아도 돼요)
function addBubble(text, who) {
    const li = document.createElement('li');
    li.classList.add('bubble', who);
    li.textContent = text;
    messages.append(li);
    messages.scrollTop = messages.scrollHeight;
}

// 친구가 답장을 보내는 함수예요. (수정하지 않아도 돼요)
function reply() {
    setTimeout(function () {
        addBubble(REPLIES[replyIndex % REPLIES.length], 'friend');
        replyIndex += 1;
    }, 700);
}

function sendMessage() {
    // TODO: (1) 입력값의 앞뒤 공백을 지운 값(trim)이 비어 있으면 아무것도 하지 않아요.
    //       아니면 addBubble(text, 'me')로 내 말풍선을 추가하고 console.log('전송:', JSON.stringify(text))로 출력한 뒤 입력창을 비우세요.
    //       (JSON.stringify는 줄바꿈을 \n으로 보여 줘요)

    reply();
}

// 전송 버튼을 클릭해도 보낼 수 있어요.
sendButton.addEventListener('click', sendMessage);

textarea.addEventListener('keydown', function (event) {
    // 한글을 조합하는 중(예: 'ㅎ' → '하' → '한')에 누른 Enter는 무시해요.
    // 이 줄이 없으면 한글 메시지가 두 번 전송될 수 있어요.
    if (event.isComposing) {
        return;
    }

    // TODO: (2) Shift 없이 Enter만 눌렀다면 줄바꿈(기본 동작)을 막고 sendMessage()를 호출하세요.

});
