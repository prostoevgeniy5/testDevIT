//      12. Создать функцию которая создает объект на основании двух представленных массивов используя один как ключи, а другой как значения. Не подходящие ключи массивов должны быть исключены.

// Синтаксис: array_combine(keys: array, values: array): Object
// Пример: 
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

// let result = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}


function array_combine(keyData, valueData) {
    let entries;
    let newObj;
    let temparray = testData.map((el, ind) => {
        let ar = [];
        ar.push(el)
        if(testData2[ind]) {
            ar.push(testData2[ind])
            
            return ar;
        } else {
            ar.push('')
            return ar
        }
    })

    entries = new Map(temparray);

    newObj = Object.fromEntries(entries)
    return newObj;
}

console.log(array_combine(testData, testData2))