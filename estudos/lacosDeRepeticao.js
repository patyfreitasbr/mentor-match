// //laços de repetição
// let notas = [1,8.9,7.3,8.5]
// console.log(notas[0])
// console.log(notas[1])
// console.log(notas[2])
// console.log(notas[3])

let notas = [10, 8.9, 7.3, 8.5]

//for tradicional
//i=index i posicao  i++ incrementado
for (let i = 0; i < 4; i++) {
    console.log(notas[i])
}

console.log("Terminou o for")

//for of
for (let nota of notas) {
    console.log(nota);
}

console.log("Terminou o for")



