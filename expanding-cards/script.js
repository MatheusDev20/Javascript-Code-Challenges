const cards = document.querySelectorAll('.panel');


cards.forEach((card) => {
  card.addEventListener('click', () => {
    removeActiveClass()
    card.classList.add('active') // Metodo pra adicionar uma classe a um elemento da DOM
  })
})

function removeActiveClass() {
  cards.forEach((card) => {
    card.classList.remove('active') // Metodo pra adicionar uma classe a um elemento da DOM
  })
}
