function isInfiniteProcess(a, b) {
  if (a === b) {
    return false;
  }
  while (a !== b) {
    a++
    b--
    if (a === b) {
      return false;
    } else if (a > b) {
      return true;
    }
  }
}

let answer = isInfiniteProcess(2, 6);

console.log(answer)

