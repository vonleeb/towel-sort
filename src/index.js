
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix)) {
    return matrix.reduce((result, current, i) => {
      return result.concat((!(i % 2) ? current : current.reverse()));
    }, [])
  }
  return [];
}
