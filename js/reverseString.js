

// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

//  

// 示例 1：

// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

  let mSize = Math.round((s.length) / 2)
  for (let index = 0; index < mSize; index++) {
    let str = s[index]
    s[index] = s[s.length - 1 - index]
    s[s.length - 1 - index] = str
  }
  return s

};

console.log('====================================');
console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));
console.log('====================================');