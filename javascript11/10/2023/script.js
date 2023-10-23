const valor = [10, 8, 50, 63, 41, 71, 2]

const soma = (array) => {
    let total = 0

    for (let index = 0; index < array.length; index += 1) {
        total += array[index]
    }

    return total
}

console.log(soma(valor))
    
