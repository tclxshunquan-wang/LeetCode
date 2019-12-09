/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {

  let index = 0
  let result = ""
  let stack = []

  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) == "(") {
      stack.push("(")
    } else {
      stack.pop()
      if (stack.length == 0) {
        result = result + S.substring(index + 1, i)
        index = i + 1
      }
    }
  }
  return result
};

console.log('====================================');
console.log(removeOuterParentheses("()()"));
console.log('====================================');