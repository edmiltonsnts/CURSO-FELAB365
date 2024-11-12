/*let count = 0;

while(count < 10) {
  console.log(count);
  count++;
}

do {
 console.log(count);
 count++;
} while(count < 11)
*/
class carro {
  constructor(marca) {
    this.marca = marca; //propriedade da classe
  }
  mostraMarca()
  {
    console.log(`A marca do carro é ${this.marca}.`);
  }
}
  
const meuCarro = new carro("FORD");
meuCarro.mostraMarca();