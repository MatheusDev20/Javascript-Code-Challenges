const checkSignal = (x, y) => {
  let resultX;
  let resultY;
  if (x < 0) {
    resultX = 'Negative'
  }
  else {
    resultX = 'Positive'
  }
  if (y < 0) {
    resultY = 'Negative'
  }
  else {
    resultY = 'Positive'
  }

  return `${x} is ${resultX} and ${y} is ${resultY}`

}
console.log(checkSignal(3, -5))