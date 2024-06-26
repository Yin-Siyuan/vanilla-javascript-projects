// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector('.modal-btn');
const closelBtn = document.querySelector('.close-btn');
const modalContent = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click', function () {
	modalContent.classList.add('open-modal');
});

closelBtn.addEventListener('click', function () {
	modalContent.classList.remove('open-modal');
});
