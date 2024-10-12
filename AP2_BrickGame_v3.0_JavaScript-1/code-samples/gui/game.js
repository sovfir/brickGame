
import { getCoordinates } from './antenna.js';

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    setInterval(getCoordinates, 1000);
});

// Ждем загрузки DOM, чтобы вызвать функцию рисования
// document.addEventListener('DOMContentLoaded', draw);