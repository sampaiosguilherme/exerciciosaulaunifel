// Lista de filmes
const filmes = [
    { nome: 'Jig Saw', ano: 2023, img: 'https://www.adorocinema.com/filmes/filme-181102/', descricao: 'Após uma série de assassinatos, todas as pistas levam a John Kramer, assassino mais conhecido como Jigsaw. À medida que a investigação avança, os policiais percebem que estão perseguindo o fantasma de um homem morto há mais de uma década.', tipo: 'Terror', magnetLink: 'magnet:?xt=urn:btih:F57D448F303FD712BE05C2E7A015CC2901A327DA&dn=Saw.X.2023.1080p.AMZN.WEBRip.DDP5.1.x265.10bit-GalaxyRG265&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce' },
    { nome: 'Indiana Jones', ano: 1981, img: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/97/58/20172484.jpg', descricao: 'O arqueólogo Indiana Jones precisa encontrar a Arca da Aliança, uma relíquia bíblica que contém os dez mandamentos. Como o portador do artefato se torna invencível, os nazistas também vão fazer de tudo para adquirir esse precioso objeto.', tipo: 'Aventura', magnetLink: 'magnet:?xt=urn:btih:00D76F58439FA2FC9889C95D98E05930A7C036A0&dn=Indiana+Jones+and+the+Raiders+of+the+Lost+Ark+%281981%29+1080p+BrRip&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce' },
    { nome: 'Missão Impossível', ano: 1986, img: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/46/03/20097427.jpg', descricao: 'O agente do governo Ethan Hunt e seu mentor, Jim Phelps, embarcam em uma missão secreta que toma um rumo desastroso: Jim é morto e Ethan torna-se o principal suspeito do assassinato. Em fuga, Hunt recruta o brilhante Luther Stickell e o piloto Franz Krieger para ajudá-lo a entrar no prédio da CIA, fortemente vigiado, a fim de pegar um arquivo de computador confidencial que pode provar a sua inocência.', tipo: 'Ação', magnetLink: 'magnet:?xt=urn:btih:6AFA38D91051E01E150C85BB63C5C6833285D523&dn=Mission+Impossible+%281996%29+720p+BrRip+x264+-+650MB+-+YIFY&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce' },
    { nome: 'Star Wars: Uma Nova Esperança', ano: 1977, img: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/98/26/20172772.jpg', descricao: 'A princesa Leia é mantida refém pelas forças imperiais comandadas por Darth Vader. Luke Skywalker e o capitão Han Solo precisam libertá-la e restaurar a liberdade e a justiça na galáxia.', tipo: 'Ficção Científica', magnetLink: 'magnet:?xt=urn:btih:FE1E1069DE410FB44157F02B4F6655DDE99621C6&dn=Star+Wars%3A+Episode+IV+-+A+New+Hope+%281977%29+1080p+BrRip+x264+-+YIF&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce' },
    { nome: 'Matrix', ano: 1999, img: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG', descricao: 'O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.', tipo: 'Ação', magnetLink: 'magnet:?xt=urn:btih:D7A46713EAEE18C746B3254B7D1492A50FD9D6CE&dn=The+Matrix+%281999%29+1080p+BrRip+x264+-+1.85GB+-+YIFY&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce' },
    { nome: 'Eu Sei O Que Vocês Fizeram no Verão Passado', ano: 1997, img: 'https://upload.wikimedia.org/wikipedia/pt/5/5b/I_Know_What_You_Did_Last_Summer_%281997%29_Poster.jpg', descricao: 'Um ano após atropelar um pescador e jogar o seu corpo na água, quatro amigos se reúnem quando Julie recebe uma carta assustadora dizendo-lhe que seu crime foi visto. Ao perseguir quem ele pensa ser responsável pela carta, Barry é atropelado por um homem com um gancho de carne. O derramamento de sangue a partir daí só aumenta, pois o assassino com o gancho continua a perseguir Julie, Helen e Ray.', tipo: 'Terror', magnetLink: 'magnet:?xt=urn:btih:A8A1AC97E00D9B9F24B248BBD5C8A4A6F19A757D&dn=I+Know+What+You+Did+Last+Summer+%281997%29+1080p+BrRip+x264+-+YIFY&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce' },
    { nome: 'Clube da Luta', ano: 1999, img: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg', descricao: 'Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.', tipo: 'Suspense', magnetLink: 'magnet:?xt=urn:btih:A086CE4AFABBD8AB949662E30134A49E22D1F0C7&dn=Fight+Club+%281999%29+1080p+BrRip+x264+-+YIFY&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce' },
    { nome: 'Garota Exemplar', ano: 2014, img: 'https://br.web.img3.acsta.net/pictures/14/08/20/21/11/442051.jpg', descricao: 'No dia de seu quinto aniversário de casamento, Amy desaparece. Quando as aparências de uma união feliz começam a desmoronar, Nick, seu marido, torna-se o principal suspeito. Com a ajuda de sua irmã gêmea, ele tenta provar sua inocência, ao mesmo tempo em que investiga o que realmente aconteceu com a mulher.', tipo: 'Suspense', magnetLink: 'magnet:?xt=urn:btih:A06130D93965BCA27A04CCB9A54CACEB1F5FBCB1&dn=Gone+Girl+%282014%29+720p+BrRip+x264+-+YIFY&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce' },
    { nome: 'Rocky Balboa', ano: 1976, img: 'https://upload.wikimedia.org/wikipedia/pt/1/18/Rocky_poster.jpg', descricao: 'Rocky Balboa, um pequeno boxeador da classe trabalhadora da Filadélfia, é arbitrariamente escolhido para lutar contra o campeão dos pesos pesados, Apollo Creed, quando o adversário do invicto lutador agendado para a luta é ferido. Durante o treinamento com o mal-humorado Mickey Goldmill, Rocky timidamente começa um relacionamento com Adrian, a invisível irmã de Paulie, seu amigo empacotador de carne.', tipo: 'Ação', magnetLink: 'magnet:?xt=urn:btih:2AB23DFCF665E241468CF6BAA8BC4EA8B9AD1C17&dn=Rocky+%281976%29+720p+BrRip+x264+-+750MB+-+YIFY&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce' },
    { nome: 'A Rede Social', ano: 2010, img: 'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/87/32/90/19874370.jpg', descricao: 'Em uma noite de outono em 2003, Mark Zuckerberg, estudante de Harvard e gênio da computação, começa a trabalhar em um novo conceito que acaba se transformando em uma rede social global conhecida como Facebook. Seis anos e 500 milhões de amigos mais tarde, Zuckerberg se torna o mais jovem bilionário da história com o sucesso de sua rede social. No entanto, a sua ascensão sem precedentes traz complicações legais e pessoais.', tipo: 'Drama', magnetLink: 'magnet:?xt=urn:btih:965554390D50F07B206115A0D6D619D5678AD5A4&dn=The+Social+Network+%282010%29+1080p+BrRip+x264+-+1.2GB+-+YIFY&tr=http%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce' },
];

// Elementos do DOM
const elementoPai = document.getElementById('filmes');
const inputFiltro = document.querySelector('input[type="text"]');
const botaoBuscar = document.getElementById('botaoBuscar');

function criarElementoFilme(filme) {
    const container = document.createElement('div');
    container.classList.add('card');

    const nomeElemento = document.createElement('p');
    nomeElemento.innerText = filme.nome;

    const imgElemento = document.createElement('img');
    imgElemento.src = filme.img;
    imgElemento.alt = filme.nome;
    imgElemento.title = `${filme.nome}\nAno: ${filme.ano}\nTipo: ${filme.tipo}\n${filme.descricao}`;

    const assistirButton = criarBotao('Assistir');
    const baixarButton = criarBotao('Baixar');

    container.appendChild(nomeElemento);
    container.appendChild(imgElemento);
    container.appendChild(assistirButton);
    container.appendChild(baixarButton);

    elementoPai.appendChild(container);
}

function criarBotao(texto, magnetLink) {
    if (texto.toLowerCase() === 'baixar') {
        const button = document.createElement('button');
        button.innerText = texto;
        button.addEventListener('click', () => window.location.href = magnetLink); // Redireciona para o link magnético
        return button;
    } else {
        const button = document.createElement('button');
        button.innerText = texto;
        button.addEventListener('click', () => alert(`${texto} ${filme.nome}`)); // Aqui você pode adicionar a lógica desejada
        return button;
    }
}


function criarElementoFilme(filme) {
    const container = document.createElement('div');
    container.classList.add('card');

    const nomeElemento = document.createElement('p');
    nomeElemento.innerText = filme.nome;

    const imgElemento = document.createElement('img');
    imgElemento.src = filme.img;
    imgElemento.alt = filme.nome;
    imgElemento.title = `${filme.nome}\nAno: ${filme.ano}\nTipo: ${filme.tipo}\n${filme.descricao}`;

    const assistirButton = criarBotao('Assistir');
    const baixarButton = criarBotao('Baixar', filme.magnetLink);

    container.appendChild(nomeElemento);
    container.appendChild(imgElemento);
    container.appendChild(assistirButton);
    container.appendChild(baixarButton);

    elementoPai.appendChild(container);
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
