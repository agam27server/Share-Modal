const modalGet = document.querySelector('.modal');
const overlayGet = document.querySelector('.overlay');

function openModal() {
    modalGet.style.cssText = 'scale: 1;'
    overlayGet.style.cssText = 'display: block; scale:1;'
}

function closeModal() {
    modalGet.style.cssText = 'scale: 0;'
    overlayGet.style.cssText = 'display: none; scale:0'
}