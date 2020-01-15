/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {

  let result = 0
  for (let index = 0; index < nums.length; index++) {
    result = result ^ nums[index]
  }
  return result

};

singleNumber([4,1,2,1,2])