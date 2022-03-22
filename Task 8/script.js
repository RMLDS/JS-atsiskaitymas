/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    sum (x, y) {
        return x + y;
    };
    subtraction (x, y) {
        return x - y;
    };
    multiplication (x, y) {
        return x * y;
    };
    division (x, y) {
        return Number((x / y).toFixed(3));
    };
};

const paskaiciavimas = new Calculator;

const sk1 = 5;
const sk2 = 10;

console.log("Sudėtis", paskaiciavimas.sum(sk1, sk2));
console.log("Atimtis", paskaiciavimas.subtraction(sk1, sk2));
console.log("Daugyba", paskaiciavimas.multiplication(sk1, sk2));
console.log("Dalyba", paskaiciavimas.division(sk1, sk2));
