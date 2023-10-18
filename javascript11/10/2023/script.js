let numero1 = 10;
let numero2 = 20;
let numero3 = 15;

let maior;

if (numero1 >= numero2 && numero1 >= numero3) {
    maior = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    maior = numero2;
} else {
    maior = numero3;
}
    
console.log("O maior numero é:", maior);
