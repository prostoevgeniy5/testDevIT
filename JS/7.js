//      7. Сделать функцию поиска значений в массиве.

// Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
// Пример: 
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];

let resultfind = array_find(testData, '/^raf.*/i') // ["Rafshan"]
let resultfind2 = array_find(testData, "Rafshan") // ["Rafshan"]
function array_find(arr, search) {
    let result;
    if(search.indexOf('/') === 0) {
        let regexp = new RegExp(search);

        result = arr.filter((el, ind) => {
                if(typeof el === 'string'){
                return el.match(regexp);
            }

        })

    } else {
        result = arr.filter((el, ind) => {
            return search === el;
        });
    }

    return result;
}

console.log(resultfind);
console.log(resultfind2);