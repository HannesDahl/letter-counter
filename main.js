const letterInfo = document.querySelector('#letter-info'),
    textarea = document.querySelector('#letters-area'),
    copyButton = document.querySelector('#copy-button');

document.addEventListener('DOMContentLoaded', () => {
    textarea.textContent = localStorage.getItem('text');

    let value = textarea.value;
    value = value.split(" ");
    value = value.length

    characterCounter(textarea.textLength, value);
});

textarea.addEventListener('input', (e) => {
    let value = e.target.value;
    value = value.split(" ");
    value = value.length

    localStorage.setItem('text', e.target.value);
    characterCounter(e.target.textLength, value);
});

copyButton.addEventListener('click', () => {
    copyToClipboard(textarea);
});

function characterCounter(num, words) {
    letterInfo.textContent = `${words} words, ${num} characters`;
}

function copyToClipboard(el) {
    el.select();
    document.execCommand('copy');
}