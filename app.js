const array = [10, 21, 30, 42, 55, 60, 73, 80, 90];

const evenElements = array.filter(number => number % 2 === 0);
console.log(`Четные элементы: ${evenElements}`);

const elementsEndingWithZero = array.filter(number => number % 10 === 0);
console.log(`Элементы, оканчивающиеся нулем: ${elementsEndingWithZero}`);

const evenIndicesElements = array.filter((_, index) => index % 2 !== 0);
console.log("Второй, четвертый и т.д. элементы:");
console.log(evenIndicesElements);

const specificIndicesElements = array.filter((_, index) => (index + 1) % 3 === 0);
console.log("Третий, шестой и т.д. элементы:");
console.log(specificIndicesElements);

// а) Все элементы, оканчивающиеся цифрой 4, уменьшить вдвое
const modifiedArrayA = array.map(number => (number % 10 === 4) ? number / 2 : number);

// б) Все четные элементы заменить на их квадраты, а нечетные удвоить
const modifiedArrayB = array.map(number => (number % 2 === 0) ? number ** 2 : number * 2);

// в) Четные элементы увеличить на a, а из элементов с четными номерами вычесть b
const a = 5; // Замените на нужное значение
const b = 3; // Замените на нужное значение
const modifiedArrayC = array.map((number, index) => 
  (number % 2 === 0) ? number + a : (index % 2 === 0) ? number - b : number
);

// Вывод результатов
console.log("Массив после выполнения задачи а:", modifiedArrayA);
console.log("Массив после выполнения задачи б:", modifiedArrayB);
console.log("Массив после выполнения задачи в:", modifiedArrayC);

// а) Все элементы, кратные числу 10, заменить нулем
const modifiedArrayD = array.map(number => (number % 10 === 0) ? 0 : number);

// б) Все нечетные элементы удвоить, а четные уменьшить вдвое
const modifiedArrayE = array.map(number => (number % 2 !== 0) ? number * 2 : number / 2);

// в) Нечетные элементы уменьшить на m, а элементы с нечетными номерами увеличить на n.
const m = 3; // Замените на нужное значение
const n = 5; // Замените на нужное значение
const modifiedArrayF = array.map((number, index) =>
  (number % 2 !== 0) ? number - m : (index % 2 !== 0) ? number + n : number
);

// Вывод результатов
console.log("Массив после выполнения задачи а:", modifiedArrayD);
console.log("Массив после выполнения задачи б:", modifiedArrayE);
console.log("Массив после выполнения задачи в:", modifiedArrayF);