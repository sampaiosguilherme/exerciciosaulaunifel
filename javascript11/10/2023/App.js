document.addEventListener("DOMContentLoaded", function () {
    const saudacao = document.getElementById("saudacao");
    const agora = new Date();
    const hora = agora.getHours();
  
    let mensagem;
  
    if (hora >= 5 && hora < 12) {
      mensagem = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
      mensagem = "Boa tarde!";
    } else {
      mensagem = "Boa noite!";
    }
  
    saudacao.textContent = mensagem;
  });

// App.js

document.addEventListener('DOMContentLoaded', function() {
    // Elemento onde será exibida a saudação
    var saudacaoElemento = document.getElementById('saudacao');

    // Obtém a hora atual
    var horaAtual = new Date().getHours();

    // Define a saudação com base na hora do dia
    var saudacao;
    if (horaAtual >= 5 && horaAtual < 12) {
        saudacao = 'Bom dia!';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = 'Boa tarde!';
    } else {
        saudacao = 'Boa noite!';
    }

    // Adiciona a saudação ao elemento
    saudacaoElemento.textContent = saudacao;
});
