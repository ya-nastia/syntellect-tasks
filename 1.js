// Черепашке нужно забраться на вершину холма. Расстояние от подножия холма до его вершины - 100м.
// Черепашка за день залезает вверх по холму на 50м. Ночью она спит и скатывается на 30м вниз.
// На какие сутки черепашка залезет на столб? Требуется написать код на JS для решения задачи и дать отве

const calculateDays = (pathLength, amountPerDay, slipPerNight) => {
  let currentPoint = 0;
  let days = 0;

  while (currentPoint < pathLength) {
    days++;
  
    currentPoint += amountPerDay;
  
    if (currentPoint >= pathLength) {
      break;
    }
  
    currentPoint -= slipPerNight;
  }

  return days;
}

const daysAmount = calculateDays(100, 50, 30);

console.log(`Черепашка залезет на вершину холма на ${daysAmount} сутки.`); // Ответ: 4