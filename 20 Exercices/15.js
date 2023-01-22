const getDiff = (n) => {
  return n > 13 ? 13 - n : (n - 13) * 2
}

console.log(getDiff(27));
