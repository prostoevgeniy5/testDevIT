//      10. Сделать функцию которая возвращает уникальные элементы массива.

// Синтаксис: array_unique(arr: array): any[]
// Пример:
let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];

let result4 = array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]

function array_unique (arr) {
    let tempArray = new Array(arr.length);
    const arrCopy = [...arr];
    for(let i = 0; i < tempArray.length; i++) {
        tempArray[i] = 1;
    }
    arrCopy.forEach((el, ind) => {
        
        arrCopy.forEach((item, i) => {
            if( i != ind && item === el){
                tempArray[i] += 1;
            }
        })
    })
    
    return arrCopy.filter((el, ind) => {
        return tempArray[ind] === 1;
    })

}

console.log('task 10',result4)
