const numbers = [10, 4, 7, 11, 68, 102]

let maiorNumero = 0

for (let index = 0; index <numbers.length; index +=1) {
    if (maiorNumero < numbers [index]) {
    maiorNumero = numbers[index]
    }

}

console.log(maiorNumero)