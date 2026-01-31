
// script.js
const sosSelect = document.getElementById('sos-select');
const sosDisplay = document.getElementById('sos-display');
const sosMessage = document.getElementById('sos-message');
const thankYouMessage = document.getElementById('thank-you-message');
const thankYouP = document.querySelector('#thank-you-message p');
const sosButtons = document.querySelectorAll('.sos-buttons button');
const clearButton = document.querySelector('[data-clear]');
const resetButton = document.querySelector('[data-reset]');

sosDisplay.classList.add('card-hidden');
thankYouMessage.classList.add('card-hidden');


// SOSカード選択時
sosButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const message = button.getAttribute('data-sos');
        // メッセージを表示画面に設定
        sosMessage.textContent = message;
        // sos-selectを隠して、sos-displayを表示
        sosSelect.classList.add('card-hidden');
        sosDisplay.classList.remove('card-hidden');
        // ふわっとアニメーション
        const balloon = document.querySelector('.balloon1-left');
        balloon.classList.remove('fade-up'); // リセット
        void balloon.offsetWidth;            // 再描画
        balloon.classList.add('fade-up');    // ふわっと
    });
});

// クリアボタンを押した時
if (clearButton) {
    clearButton.addEventListener('click', () => {
        // sos-displayを隠して、thank-you-messageを表示
        sosMessage.textContent = '';
        sosDisplay.classList.add('card-hidden');
        thankYouMessage.classList.remove('card-hidden');
    });
}
// リセットボタンを押した時
if (resetButton) {
    resetButton.addEventListener('click', () => {
        // 全ての画面をリセット
        sosSelect.classList.remove('card-hidden');
        sosDisplay.classList.add('card-hidden');
        thankYouMessage.classList.add('card-hidden');
        sosMessage.textContent = '';
    });
}

