const computeDifference = (n) => {
  if(n > 19) return 3*(n-19)

  return Math.abs(n-19)
}

console.log(computeDifference(13))