//      6. Написать функцию для выполнения параллельных вычислений без использования Promise.

var a = function(one, two) {
    return one + two
  }
  var b = function() {
    return false;
  }
  paralell([[a, [1, 2]], [b]], function(results) {
      console.log(results); // [3, false]
  });
  
  function paralell(data, callback) {
      let param1 = data[0][0];
      let param2 = data[0][1];
      let param3 = data[1][0];
      console.log("param1 param2", param1, param2, data[1][0])
      let arr = [];
      setTimeout(() => {
          let res = param1(param2[0], param2[1]);
          arr.push(res)
      }, 0);
  
      setTimeout(() => {
          let res = param3();
          arr.push(res)
      }, 0);
  
      setTimeout(() => {
          callback(arr)
          }, 0)
  }