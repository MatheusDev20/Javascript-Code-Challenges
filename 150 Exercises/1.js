const date = new Date()
const daysOfWeek = {
  1: 'Domingo',
  2: 'Segunda',
  3: 'Terça',
  4: 'Quarta',
  5: 'Quinta',
  6: 'Sexta',
  7: 'Sabado'
}
let currentDay = daysOfWeek[`${Number(date.getDay())}`]
console.log(`Hoje é ${currentDay}, e são ${date.getHours()} Horas ${date.getMinutes()} Minutos e ${date.getSeconds()} Segundos `)
