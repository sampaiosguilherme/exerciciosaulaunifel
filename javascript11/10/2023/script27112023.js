const musicas = [
    { nome: 'Faroeste Caboclo', duracao: 9 },
    { nome: 'Thriller, Michael Jackson', duracao: 6 },
    { nome: 'Obvious, Blink182', duracao: 3 },
    { nome: 'Um Nordestino', duracao: 7 },
    { nome: 'the spectre', duracao: 3 },
    { nome: 'Eterno - Catedral', duracao: 4 },
]
const array = [9, 6, 3, 7, 3, 4]

function callback(acumulador, posicaoatual) {
}

const soma = array.reduce(callback,[])

console.log(soma);