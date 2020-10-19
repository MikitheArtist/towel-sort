
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(typeof(matrix) == 'undefined') return [];
    let result = [];

    for (let elem of matrix) {
      if(matrix.indexOf(elem) % 2 !== 0) {
         elem.reverse();
 
      }
      result = matrix.flat();
      
    }
    return result;
}
