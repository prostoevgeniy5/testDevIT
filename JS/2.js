//     Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.

let arrays = [[1, 2, 3], [4, 5], [6]];
// // Ваш код 
// // → [1, 2, 3, 4, 5, 6]
const arr = arrays.reduce((ac, el, ind) => {
    if(Array.isArray(el)) {
        return ac.concat(el);
    } else {
        let array = [el]
        return ac.concat(array);
    }
}, []);

console.log(arr);