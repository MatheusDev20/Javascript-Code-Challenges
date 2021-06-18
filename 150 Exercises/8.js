const input = document.getElementById('my-input')
const goBtn = document.querySelector('.fodase')

console.log(goBtn)
const verifyResult = () => {
  if (input.value > 10 || input < 1) alert('Number should between 1 and 10')

  const random = randomizeNumber(1, 10)
  console.log(input.value, random)
  if (random !== input.value) {
    alert('Congratz, for nothing i Guess')
    return
  }
  alert('Sry, U didnt make it')
}
const randomizeNumber = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

goBtn.addEventListener('click', () => {
  verifyResult()
})

 // const test = prompt('Teste') // Tipo um Alert pra pegar Info do usuario