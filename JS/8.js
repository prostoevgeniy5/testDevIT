//      8. Сделать функцию которая обрезает массив до указанного значения.

// Синтаксис: array_skip_until(arr: array, value: any): any[]
// Пример: 
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

let resultskip = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
let resultskip2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
let resultskip3 = array_skip_until(testData, "asd") // []
function array_skip_until(arr, elementValue) {
    let index = arr.indexOf(elementValue);
    if(index === -1) {
        return [];
    }
    const resultArray = arr.slice(index)

    return resultArray;
}

console.log(resultskip);
console.log(resultskip2);
console.log(resultskip3);