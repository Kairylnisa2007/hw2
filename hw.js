//1
function areArraysEqual(num1, num2){
    return num1.every ((value, index) => value === num2[index]);  
}
// every - это метод массивы, которому можно задавать условия и он проверяет каждый элемент массива на выполнение заданного условия.
// index - числа от 0, value - в этом примере "содержания" массива

let x = [55, 2007, 100]
let y = [2007, 55, 100]

function equal(x, y) {
  if (x == y) {
    console.log(true)
    return true;
  } else if (x !== y) {
    console.log(false)
    return false;
  }
}

equal() 


//2
function nums(chislo, stepen){
    return Math.pow(chislo, stepen); // math.pow - встроенная функция объекта, для возведения числа в степень. работает с 2 аргументами: 1) основное (число), 2) показатель степени (на которое возводится число).
}

const chislo = 3
const stepen = 3
const result = nums(chislo, stepen); 

console.log(result); // 27 выведет 

//3 
function countChar(str){
    const length = str.length; // ну, тут все ясно
    console.log(length);
}

const text = 'Что-нибудь'
countChar(text);

//Доп 1 

function removeDuplicatesAndSort(arr) {
    const uniqueArray = Array.from(new Set(arr));
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
}

const inputArray = [1, 1, 1, 2, 3, 5, 5, 7, 8, 3];
const resultArray = removeDuplicatesAndSort(inputArray);

console.log(resultArray); // ответ: [1, 2, 3, 5, 7, 8] 

// доп 1

const inputArray2 = [1, 1, 1, 2, 3, 5, 5, 7, 8, 3];


const uniqueSet = new Set(inputArray2);


const uniqueArray2 = Array.from(uniqueSet);


uniqueArray2.sort((a, b) => a - b);

console.log(uniqueArray2); // Выведет: [1, 2, 3, 5, 7, 8]

//Доп 2

function sendSMS(phoneNumber, message) {
    alert(`Отправлено SMS на номер ${phoneNumber}: ${message}`);
}

const phoneNumber = "+996 703 411 709";
const message = "что-нибудь";

sendSMS(phoneNumber, message); // Выведет "Отправлено SMS на номер +996 703 411 709: что-нибудь"


