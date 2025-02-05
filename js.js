const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

// Відкрити модальне вікно
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Закрити модальне вікно
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрити модальне вікно при кліку поза ним
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});