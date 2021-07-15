//      4. Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.

Array.prototype.append = function (n) {
    if(!isNaN(n)) {
        let array = [+n, ...this];
        return array;
    } else {
        throw new Error("function argument is not number")
    }
}
var arr2 = [1, 2, 3];
console.log(arr2.append(0));
//[0, 1, 2, 3]