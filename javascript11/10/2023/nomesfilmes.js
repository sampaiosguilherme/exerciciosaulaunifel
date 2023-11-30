// Lista de filmes
const filmes = [
    { nome: 'Jig Saw', ano: 2023, img: 'https://www.adorocinema.com/filmes/filme-181102/', tipo: 'Terror' },
    { nome: 'Indiana Jones', ano: 1981, img: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/97/58/20172484.jpg', tipo: 'Aventura' },
    { nome: 'Missão Impossível', ano: 1986, img: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/46/03/20097427.jpg', tipo: 'Ação' },
    { nome: 'Star Wars: Uma Nova Esperança', ano: 1977, img: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/98/26/20172772.jpg', tipo: 'Ficção Científica' },
    { nome: 'Matrix', ano: 1999, img: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG', tipo: 'Ação' },
    { nome: 'Eu Sei O Que Vocês Fizeram no Verão Passado', ano: 1997, img: 'https://upload.wikimedia.org/wikipedia/pt/5/5b/I_Know_What_You_Did_Last_Summer_%281997%29_Poster.jpg', tipo: 'Terror' },
    { nome: 'Clube da Luta', ano: 1999, img: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg', tipo: 'Suspense' },
    { nome: 'Garota Exemplar', ano: 2014, img: 'https://br.web.img3.acsta.net/pictures/14/08/20/21/11/442051.jpg', tipo: 'Suspense' },
    { nome: 'Rocky Balboa', ano: 1976, img: 'https://upload.wikimedia.org/wikipedia/pt/1/18/Rocky_poster.jpg', tipo: 'Ação' },
    { nome: 'A Rede Social', ano: 2010, img: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/32/90/19874370.jpg', tipo: 'Drama' },
];

// Elementos do DOM
const elementoPai = document.getElementById('filmes');
const inputFiltro = document.querySelector('input[type="text"]');
const botaoBuscar = document.getElementById('botaoBuscar');

function criarElementoFilme(filme) {
    const novoElementoP = document.createElement('p');
    novoElementoP.innerText = filme.nome;

    const novoElementoImg = document.createElement('img');
    novoElementoImg.src = filme.img;
    novoElementoImg.alt = filme.nome; // Altura para acessibilidade
    novoElementoImg.title = `Ano: ${filme.ano}\nTipo: ${filme.tipo}`; // Descrição ao passar o mouse

    // Adiciona um evento de clique para exibir mais detalhes (opcional)
    novoElementoImg.addEventListener('click', () => alert(`Detalhes do filme:\n${filme.nome}\nAno: ${filme.ano}\nTipo: ${filme.tipo}`));

    elementoPai.appendChild(novoElementoP);
    elementoPai.appendChild(novoElementoImg);
}

function filtrarFilmes() {
    const filtro = inputFiltro.value.toLowerCase();

    // Limpa os elementos antigos antes de adicionar os novos
    elementoPai.innerHTML = '';

    filmes.filter(filme => filme.nome.toLowerCase().includes(filtro))
        .forEach(criarElementoFilme);
}

inputFiltro.addEventListener('input', filtrarFilmes);
botaoBuscar.addEventListener('click', filtrarFilmes);

// Inicializa a exibição de todos os filmes
filmes.forEach(criarElementoFilme);
