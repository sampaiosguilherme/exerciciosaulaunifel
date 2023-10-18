let angulo1 = 60;
let angulo2 = 70;
let angulo3 = 50;

if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
    console.log("Erro: Os angulos devem ser positivos.");
} else {

    if (angulo1 + angulo2 + angulo3 === 180) {
        console.log("É um triangulo valido.");

    } else {
        console.log("Não é um triangulo valido.");

    }
}