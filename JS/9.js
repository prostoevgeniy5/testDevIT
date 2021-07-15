//      9. Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.

// Доступные шаблоны: 
// 'string' => строки, 
// 'number' => числа, 
// 'int' => целые числа, 
// 'float' => числа с плавающей точкой, 
// 'bool' => true | false, 
// 'function' => функция, 
// 'array' => массив, 
// Object => объект {name: 'string'}
// Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
// Пример: 
let testData4 = [{"name":"Vasya","email":"vasya@example.com","age":20},{"name":"Dima","email":"dima@example.com","age":34},{"name":"Colya","email":"colya@example.com","age":46},{"name":"Misha","email":"misha@example.com","age":16},{"name":"Ashan","email":"ashan@example.com","age":99},{"name":"Rafshan","email":"rafshan@example.com","age":11},1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[[[[1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[{"name":"Rafshan","email":"rafshan@example.com","age":11}]]]]]]

let resultnorm = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let resultnorm2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
let resultnorm3 = array_normalize(testData4, {age: 'float'}) // []
let resultnorm4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]
function array_normalize(arr, schema, transform = false) {
    let newArray = [];
    if(typeof schema === 'string' && transform === false) {
        newArray = arr.filter((el, ind) => {
            return typeof el === 'string'
        })
    } else if (typeof schema === 'string' && transform === true) {
            newArray = arr.filter((el, ind) => {
                return typeof el !== 'object' && typeof el !== 'boolean'
        }).map((el, ind) => {
            return el.toString();
        })
    } else if( typeof schema === 'object' && transform === false) {
            newArray = arr.filter((el, ind) => {
                 
                return typeof el === 'object'
            })
        } else if (typeof schema === 'object' && transform === true) {
            newArray = arr.filter((el, ind) => {
                return typeof el === 'object'
        }).map((el, ind) => {
            let keys = Object.keys(el);
            let keySchema = Object.keys(schema);
            let keyForTransform = keys.filter((el, ind) => {
                return el === keySchema[0]
            })
            return {[keyForTransform[0]]:el[keyForTransform[0]]}
        })
    }
    return newArray;
}

console.log('resultnorm', resultnorm);
console.log('resultnorm', resultnorm2);
console.log('resultnorm', resultnorm3);
console.log('resultnorm', resultnorm4);
