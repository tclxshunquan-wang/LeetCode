/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let count = 0
  for (let i = 0; i < points.length; i++) {
    if(i+1<points.length){
      let x = Math.abs((points[i+1][0])-(points[i][0]));//坐标X的差值
      let y = Math.abs((points[i+1][1])-(points[i][1]));//坐标Y的差值
      if (y > x) {
        count += y
      } else {
        count += x
      }
    }
 
  }
  return count
};

console.log('====================================');
console.log(minTimeToVisitAllPoints([[3,2],[-2,2]]));
console.log('====================================');