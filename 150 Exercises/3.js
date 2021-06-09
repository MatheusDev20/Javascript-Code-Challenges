const date = new Date()

let dia = date.getDate()
let mes = date.getMonth() + 1 // o js é doente e começa contar os meses do 0
let ano = date.getFullYear()

if(dia<10){
  dia = '0'+ dia
}

if(mes<10) {
  mes = '0'+mes
}

console.log(`${dia}/${mes}/${ano}`)