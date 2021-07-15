//      11. Сделать функцию которая сможет делать срез данных с ассоциативного массива.

// Синтаксис: array_pluck(arr: array, path: string): any[]
// Пример:
let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]

let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]
function array_pluck(data, key) {
    let resultArray, index, firstPartKey, lastPartKey;
    
    function returnElement(obj, k) {
        let d = obj[k];
        return d;
    }

    if(key.indexOf('.') === -1){

        resultArray = data.map((el, ind) => {
            let res =  returnElement(el, key)
            return res;
        })
    } else {
        index = key.indexOf('.');
        firstPartKey = key.slice(0, index);
        lastPartKey = key.slice(index + 1);
 
        resultArray = data.map((el, ind) => {
            let res = returnElement(el[firstPartKey], lastPartKey)
            return res;
        })
    }
    return resultArray;
}

console.log(result);
console.log(result2);