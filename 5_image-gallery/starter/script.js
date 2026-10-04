const mainImage = document.querySelector('#main-image');
const caption = document.querySelector('#caption');
const thumbs = document.querySelectorAll('.thumb');

// 썸네일을 클릭하면 큰 이미지를 바꿔요.
thumbs.forEach(function (thumb) {
    thumb.onclick = function () {
        // TODO: (1) getAttribute로 썸네일의 src, alt 값을 꺼내고 setAttribute로 큰 이미지에 그대로 넣으세요.
        //       그리고 `선택: ${alt} (${src})`를 출력해요.

        // TODO: (2) 캡션 글자를 alt 값으로 바꾸세요.

        // TODO: (3) 모든 썸네일에서 selected 클래스를 빼고 클릭한 썸네일에만 추가하세요. (classList)

    };
});

// 흑백 보기
document.querySelector('#btn-gray').onclick = function () {
    // TODO: classList.toggle로 큰 이미지에 grayscale 클래스를 붙였다 뗐다 하세요.
    //       toggle은 클래스를 붙였으면 true, 뗐으면 false를 돌려줘요. 그 값을 '흑백 모드:'와 함께 출력하세요.

};

// 작게 보기 / 크게 보기
const sizeButton = document.querySelector('#btn-size');
sizeButton.onclick = function () {
    // TODO: style.width로 큰 이미지 너비를 '60%' ↔ '100%'로 바꾸고 버튼 글자도 '크게 보기' ↔ '작게 보기'로 바꾸세요.
    //       처음 style.width는 빈 문자열('')이니 '60%'인지로 비교하세요. 바꾼 뒤 '이미지 너비:'와 함께 출력해요.

};
