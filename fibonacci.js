// calculates the highest fibonacci number
// less that 100 (or a stated max)

var findMaxFib = function(max) {
  var max;
  var fibonacci = function(old, sum) {
    var old, sum, add;
    while (sum < max) {
      add = old + sum;
      old = sum;
      sum = add;
    }
    return old;
  };
  return fibonacci(1,1);
};

console.log(findMaxFib(100));



