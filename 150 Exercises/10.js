const input1 = document.querySelector("div.first input[name='1']")
const input2 = document.querySelector("div.second input[name='2']")
const multButton = document.querySelector("div.buttons button[name='mult']")
const divButton = document.querySelector("div.buttons button[name='divisao']")
const clearBUtton = document.querySelector("div.buttons button[name='clear']")

const result = document.getElementById('span-result')

multButton.addEventListener('click', () => {
  console.log(typeof (input1.value * input1.value))
  (input1.value * input2.value) == NaN ? result.innerText = 'Invalid Numbers' : result.innerText = input1.value * input2.value
})
divButton.addEventListener('click', () => {
  result.innerText = (input1.value / input2.value)
})
clearBUtton.addEventListener('click', () => {
  if (result.innerText == '') alert('Limpar o que mano não tem nada kk')
  clear()
})
const clear = () => {
  result.innerText = ' '
}
