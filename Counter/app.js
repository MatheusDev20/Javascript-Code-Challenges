const buttons = document.querySelectorAll('.btn');
const spanCounter = document.getElementById('counter')
let counter = 0;



buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.classList.contains('lower')) {
            counter --;
        } else {
            counter = counter *2
        }
        spanCounter.textContent = counter;
    })
})
