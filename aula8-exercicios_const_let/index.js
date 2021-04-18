/**
 * Antônio Carlos Sandoque tem 42 anos, pesa 90 kg
 * tem 1.73 de altura e seu IMC é de 30.071168431955627
 * Antônio carlos nasceu em 1977
 */

const nome = 'Antônio Carlos';
const sobrenome = 'Sandoque';
let idade = 42;
let peso = 90;
const altura = 1.73;
let imc = peso / (altura * altura);
let anoNascimento = (2021-idade);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);