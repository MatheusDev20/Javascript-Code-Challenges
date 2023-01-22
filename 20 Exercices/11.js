const input = document.getElementById('temp')
const to = document.getElementById('to')
const from = document.getElementById('from')
const result = document.getElementById('result')
const btn = document.querySelector('button')

const convertTemperature = (temp, from, to) => {
  switch(from) {
    case 'K':
      to == 'F' ? temp -= 273 : temp +=273;
      return temp;

    case 'C':
      to == 'F' ? temp = (1.8 * temp) + 32 : temp += 273
      return temp;

    case 'F':
      to == 'C' ? temp = (temp -32) / 1.8 : temp = (temp -32) / (5/9) + 273
      return temp;

    default:
      return 'Not valid Scale'
    
    
  }
}
let inputTemp = input.value
let escfrom = from.value
let escto = to.value

btn.addEventListener('click', () => {
  result.innerText = convertTemperature(45, escfrom, escto)
})
