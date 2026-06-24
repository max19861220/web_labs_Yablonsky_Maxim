// Завдання 1: Вивід імені
alert("Максим Яблонський");

// Завдання 5: Перевірка повноліття
let isAdult = confirm("Чи є вам 18 років?");
console.log("Чи є повнолітнім:", isAdult);

// Завдання 6: Типи даних
let name = "Максим";       // String
let surname = "Яблонський"; // String
let group = "КН-323";       // String
let year = 2005;            // Number
let isMarried = false;      // Boolean

// Вивід в консоль в порядку: Number, Boolean, String
console.log("Number:", year, typeof year);
console.log("Boolean:", isMarried, typeof isMarried);
console.log("String:", name, typeof name);

// Null та Undefined
let nullVar = null;
let undefVar;
console.log("Тип null:", typeof nullVar);
console.log("Тип undefined:", typeof undefVar);

// Завдання 7: Збір даних
let login = prompt("Введіть ваш логін:");
let email = prompt("Введіть ваш email:");
let password = prompt("Введіть ваш пароль:");
alert("Dear User, your email is " + email + ", your password is " + password);

// Завдання 8: Кількість секунд в годині
let secondsInHour = 60 * 60;
console.log("Секунд в годині:", secondsInHour);