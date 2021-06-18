const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const makeWord = () => {
  let randomWorldLenght = getRandomLen(3, 5)
  let word = ''
  for (let i = 0; i < randomWorldLenght; i++) {
    word += possibleChars.charAt(getRandomLen(0, possibleChars.length))
  }
  return word;
}
const getRandomLen = (min, max) => {
  min = Math.ceil(min) // Retorna o menor numero mais proximo de min
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const fillArray = (arr) => {
  for (let i = 0; i < 10000; i++) {
    arr.push(makeWord())
  }
  return arr;
}
const checkIfIsPalindrome = (word) => {
  if (word.split("").reverse().join("") != word) return

  return true;
}
function init() {
  let counter = 0;
  console.log(counter)
  const wordArray = fillArray([])
  for (let i = 0; i < wordArray.length; i++) {
    if (checkIfIsPalindrome(wordArray[i])) counter++
  }

  return counter;
}
const counter = init()
console.log(counter)
console.log(checkIfIsPalindrome('pablo'))