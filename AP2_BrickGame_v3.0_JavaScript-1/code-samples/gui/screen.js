export function draw(squaresToDraw) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    const squareSize = 24; // Размер квадрата
    const padding = 5;     // Пробел между квадратами
    const margin = 12;     // Отступ от края канваса
    // Очищаем весь холст перед каждой отрисовкой
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Рисуем 20 на 30 квадратов с отступами
    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 13; col++) {
            const squareIndex = row * 13 + col; // Индекс текущего квадрата
            const x = margin + col * (squareSize + padding); // Координаты X с отступом
            const y = margin + row * (squareSize + padding); // Координаты Y с отступом

            // Проверяем, нужно ли отрисовать этот квадрат
            if (squaresToDraw.includes(squareIndex)) {
                // Рисуем черный квадрат без прозрачности
                ctx.fillStyle = 'rgba(0, 0, 0, 1)'; // Непрозрачный цвет
                ctx.fillRect(x, y, squareSize, squareSize);
            } else {
                // Рисуем черный квадрат с прозрачностью для остальных
                ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'; // Полупрозрачный цвет
                ctx.fillRect(x, y, squareSize, squareSize);
            }
        }
    }
}