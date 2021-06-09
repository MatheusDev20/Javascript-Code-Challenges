

const animatedString = (s) => {
  for(c of s) {
    console.log(s.length-1)
    s = s[s.length-1] + s.substring(1)
    console.log(s)
  }
}

setTimeout(() => {
  animatedString('Matheus')
}, 100)