const countEl = document.querySelector('#count');
const plusClicksEl = document.querySelector('#plus-clicks');
const plusBtn = document.querySelector('#btn-plus');
const minusBtn = document.querySelector('#btn-minus');
const resetBtn = document.querySelector('#btn-reset');

let count = 0;
let plusClicks = 0;

// count 값을 화면에 다시 그리는 함수예요. (수정하지 않아도 돼요)
function render() {
    countEl.textContent = count;
}

// 1. 카운터
// TODO: (1) addEventListener로 +1, -1, 초기화 버튼에 click 이벤트 핸들러를 등록하세요.
//       count를 바꾼 뒤 render()를 부르고 '카운트: (count)'를 출력해요. 초기화는 '초기화!'를 출력해요.

// TODO: (2) +1 버튼에 핸들러를 하나 더 등록해, 클릭 횟수(plusClicks)를 세어 화면에 보여 주세요.

// 2. 한 번만 받는 쿠폰
const couponBtn = document.querySelector('#btn-coupon');
const couponMessage = document.querySelector('#coupon-message');

function handleCoupon() {
    couponMessage.textContent = '쿠폰이 발급되었어요! (CODEIT-2026)';
    couponMessage.classList.add('done');
    console.log('쿠폰 발급!');

    // TODO: (3) 두 번째 클릭부터는 아무 일도 일어나지 않도록, 이 핸들러를 제거하세요.

}

// TODO: (4) couponBtn에 handleCoupon을 click 이벤트 핸들러로 등록하세요. (소괄호 주의!)

