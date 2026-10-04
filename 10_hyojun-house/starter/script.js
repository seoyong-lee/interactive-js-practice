const house = document.querySelector('#house');
const statusEl = document.querySelector('#status');
const pathEl = document.querySelector('#path');

// 이동 기록을 화면과 콘솔에 남기는 함수예요. (수정하지 않아도 돼요)
function addLog(text) {
    const li = document.createElement('li');
    li.textContent = text;
    pathEl.append(li);
    console.log(text);
}

// 요소가 들어 있는 방의 이름을 알려 주는 함수예요. 방 밖이면 '밖'을 돌려줘요.
function getRoomName(element) {
    const room = element ? element.closest('.room') : null;
    return room ? room.dataset.name : '밖';
}

// 1. 집 전체에 들어오고 나갈 때 (mouseenter / mouseleave: 버블링 X, 집에서 한 번씩만 발생)
// TODO: (1) house에 mouseenter / mouseleave 핸들러를 등록해 상태 문구를 바꾸세요.
//       나갈 때(mouseleave)는 모든 방에서 here 클래스도 떼요.

// 2. 방과 방 사이를 이동할 때 (mouseover: 버블링 O → 부모 하나에 등록해 위임)
house.addEventListener('mouseover', function (event) {
    // TODO: (2) target(들어온 곳)과 relatedTarget(직전에 있던 곳)의 방 이름을 구하세요.

    // TODO: (3) 같은 방 안에서 가구(.item)와 방 사이를 오간 경우(to === from)는 무시하고 방이 바뀌었을 때만 addLog로 기록하세요.
    //       to가 '밖'인 경우(집 테두리 위)도 기록하지 않아요.

    // TODO: (4) 지금 들어온 방에만 here 클래스를 붙이세요.

});
