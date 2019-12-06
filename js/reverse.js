
// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21

var reverse = function (x) {
  var max = Math.pow(2, 31) - 1
  var min = -Math.pow(2, 31)
  var y = 0
  while (x !== 0) {
    y = y * 10 + x % 10;
    console.log(`之前:${x}`);
    x = ~~(x / 10)
    console.log(`之后:${x}`);
  }
  if(y>max)return 0;
  if(y<min)return 0;
  return y
}

console.log(reverse(21));
console.log(reverse(-123));