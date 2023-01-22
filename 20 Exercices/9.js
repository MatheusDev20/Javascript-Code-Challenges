const currentDate = new Date();
const cmas = new Date(currentDate.getFullYear(), 11, 25)

if (currentDate.getMonth() == 11 && currentDate.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1)
} // Verificando se já passou o Natal, lebrando que getMonth() retorna os meses
// Sendo 0 Janeiro e 11 Dezembro

// Se já passou usa a função setFullYear() pra passar pro proximo ano a data do Natal
const oneDayInMiliseconds = 1000 * 60 * 60 * 24;

const remainingDays = Math.ceil(
  (cmas.getTime() - currentDate.getTime()) / (oneDayInMiliseconds)
)
console.log(cmas, currentDate.getTime())

console.log(`There is ${remainingDays} left to christmas`)