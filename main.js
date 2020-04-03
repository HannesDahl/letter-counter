const letterInfo = document.querySelector('#letter-info'),
    textarea = document.querySelector('#letters-area'),
    copyButton = document.querySelector('#copy-button');

document.addEventListener('DOMContentLoaded', () => {
    textarea.textContent = localStorage.getItem('text');
    lettersLength(textarea.textLength);
});

textarea.addEventListener('input', (e) => {
    localStorage.setItem('text', e.target.value);
    lettersLength(e.target.textLength);
});

copyButton.addEventListener('click', () => {
    copyToClipboard(textarea);
});

function lettersLength(num) {
    letterInfo.textContent = `${num} characters`;
}

function copyToClipboard(el) {
    el.select();
    document.execCommand('copy');
}