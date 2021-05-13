const buttons = document.querySelectorAll('.btn');
const storeColors = document.querySelectorAll('.store-color');
const resetButton = document.getElementById('btn-reset')




buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault()
        console.log(event.target)
        const filtered = event.target.dataset.filter
        storeColors.forEach((color) => {
            if (color.classList.contains(filtered)) {
                color.style.display = 'block';
            }
            else {
                color.style.display = 'none';
            }

        })
    })
})
resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    storeColors.forEach((color) => {
        color.style.display = 'block';

    })

})


