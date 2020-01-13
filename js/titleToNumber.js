

// 给定一个Excel表格中的列名称，返回其相应的列序号。

// 例如，

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let res = 0

  for (let i = s.length - 1; i >= 0; i--) {
    let code = s[i].charCodeAt() - 64
    res += Math.pow(26, s.length - i - 1) * code
    console.log(res);
  }

  return res
};

console.log('====================================');
console.log(titleToNumber('AB'));
console.log('====================================');