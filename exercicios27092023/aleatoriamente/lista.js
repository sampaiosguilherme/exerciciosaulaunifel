const alimentos = ['Banana', 'Abacate', 'Arroz', 'Feijão', 'Batata', 'Uva', 'Maca']


const elementoPai = document.querySelector('.lista')


for (let index = 0; index < alimentos.length; index += 1) {

    const criandoElemento = document.createElement('li')


    criandoElemento.innerText = alimentos[index]


    criandoElemento.className = 'item-list'


    elementoPai.appendChild(criandoElemento)

}


const allItens = document.querySelectorAll('.item-list')


for (let index = 0; index < alimentos.length; index += 1) {
    if (allItens[index].innerText.includes('Abacate')) {

        elementoPai.removeChild(allItens[index])
    }
}