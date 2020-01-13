//杨辉三角

// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

  let rows = [];
  for (let i = 1; i <= numRows; i++) {
    let column = [];
    for (let j = 0; j < i; j++) {
      if (j == 0 || j == i - 1) {
        column.push(1)
      } else {
        column.push(rows[i - 2][j - 1] + rows[i - 2][j])
      }
    }
    rows.push(column)
  }
  return rows

};

console.log('====================================');
console.log(generate(5));
console.log('====================================');