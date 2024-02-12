
let wins = 100; 
let defeats = 7;
let nivel;

if (wins <= 10) {
     nivel = "Ferro";
} else if (wins >= 11 && wins <= 20) {
    nivel = "Prata";
} else if (wins >= 21 && wins <= 50) {
    nivel = "Ouro";
} else if (wins >= 81 && wins <= 90) {
    nivel = "Diamante";
} else if (wins >= 91 && wins <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal"
}

function saldo(wins, defeats) {
    return wins - defeats;
} 
let saldoRanked = saldo(100, 7);

console.log(`O herói tem saldo de ${saldoRanked} está no nível ${nivel}`) 