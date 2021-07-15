//      5. Выведите все элементы массива используя рекурсию.

var arr3 = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']; 
function recuseLog( arr, i = 0 ) { 
    
    if( i < arr.length) {
        console.log(arr[i]);
        return recuseLog( arr, i + 1 );
    }
} 
recuseLog(arr3);