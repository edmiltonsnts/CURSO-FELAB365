let cidade = "São Paulo";

switch (cidade) {
  case "São Paulo":
    console.log("Você está na maior cidade do Brasil!");
    break;
  case "Rio de Janeiro":
      console.log("Você está na cidade mais bonita do Brasil!");
      break;
  case "Florianopolis":
      console.log("Você está na cidade mais linda do Brasil!");
      break;
}


const array1 = [11,2,3,5,8,1,9];
const array2 = ["JavaScript", "back-end", "node"];
const array3 = [[1,2,3], [1,4,5], [5,8,3]];



/*for(let i = 0; i < array1.length ; i++){
  console.log(array1[i] +1);
}*/

for(let item of array1){
  if (item > 10) {
    break;
    //continue;
  }
  console.log(item +1);
}

//array1.pop(); //pop remove no final
//console.log(array1); 

//array1.shift(); //shift remove no inicio
//console.log(array1);

//array1.unshift(15);
//array1.sort((a,b)=> a- b);
//array1.push(10);
//console.log(array1);

//let num1 = 10;
//let num2 = 5;
//let num1Maior;

//num1Maior = num1 > num2 ? true : false;
//console.log(num1Maior);


  
  //if (num1 > num2) {
  //o codigo que vai ser executado se a condição do IF for satisfeita
  // console.log("Condição satisfeita, Número 1 e maior que o número 2.");
  //} //else if (num1 === num2) {
  //o codigo que vai ser executado se a condição do IF não for satisfeita
  //console.log("Condição não satisfeita,  Número 1 e igual ao número 2.");
  //} else if (num1 < num2) {
  //o codigo que vai ser executado se a condição do IF não for satisfeita
  //console.log("Condição não satisfeita,  Número 1 e menor que o número 2.");
  //} 
