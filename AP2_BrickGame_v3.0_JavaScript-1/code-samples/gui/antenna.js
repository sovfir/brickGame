import { draw } from './screen.js';

export async function getCoordinates() {
    try {
        const response = await fetch('http://localhost:3010/coordinates'); // Укажите URL вашего сервера
        if (!response.ok) {
            throw new Error('Сеть не отвечает');
        }
        const coordinates = await response.json();
        draw(coordinates); // Вызов функции для рисования с полученными координатами
    } catch (error) {
        console.error('Ошибка при получении координат:', error);
    }
}

