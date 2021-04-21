const divElement = document.querySelector('.main')

console.log(divElement);
const colors = []
for(let i = 0; i<1000; i++) {
    colors.push('#'+(Math.random()*0xFFFFFF<<0).toString(16))
}

const changeBackground = (el, color) => {
    el.style.background = color
}

colors.forEach((color, index) => {
   setTimeout(() => {
       changeBackground(divElement, color)
   }, index * 500)
})
