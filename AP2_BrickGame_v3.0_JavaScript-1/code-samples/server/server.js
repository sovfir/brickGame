const express = require("express");
const cors = require("cors");

const app = express();
const port = 3017;
app.use(express.json()); 
app.use(cors());

function getRandomCoordinates(count) {
  const coordinates = Array.from({ length: 260 }, (_, i) => i); // Создаем массив от 0 до 259
  for (let i = coordinates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Генерируем случайный индекс
    [coordinates[i], coordinates[j]] = [coordinates[j], coordinates[i]]; // Меняем местами
  }
  return coordinates.slice(0, count); // Возвращаем нужное количество уникальных координат
}

app.get("/coordinates", (req, res) => {
  const randomCoordinates = getRandomCoordinates(10); // Генерируем 10 случайных координат
  const signal = {
    coordinates: randomCoordinates,
    score: 120,
    highScore: 789234,
    level: 7,
    lives: 3,
  };
  res.json(signal); // Отправляем координаты клиенту
});

app.post('/key-press', (req, res) => {
    const { key } = req.body; // Получаем нажатую клавишу из тела запроса
    console.log(`Received key press: ${key}`);
    
    // Отправляем ответ обратно клиенту
    res.json({ message: `Server received key: ${key}` });
  });

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
