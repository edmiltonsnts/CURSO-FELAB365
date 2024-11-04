const carros = ["Gol", "Corsa", "Uno", "Punto", "Elantra"];

const conteudo = document.getElementById("conteudo");
 var dados;
 var i;

function criaSecao(titulo, dados) 
{
  let secao = document.createElement("div");
  secao.innerHTML = "<h2>"+ titulo +"</h2>"+dados;
  conteudo.appendChild(secao);

}

dados = "";
i = 0;

while(i < 4)
{
dados += "<P>"+carros[i]+"</P>";
  i++;
}
criaSecao("Loop while",dados)

dados = "";
i = 0;

while(i < carros.length)
{
dados += "<P>"+carros[i]+"</P>";
  i++;
}

criaSecao("Loop while melhorado",dados);

dados = "";
i = 0;

do{
  dados += "<P>"+carros[i]+"</P>";
  i++;

} while(i < carros.length)
  criaSecao("Loop while invertido",dados);

dados = "";


for (i = 0; i < carros.length; i++) {
  dados += "<P>"+carros[i]+"</P>";
}
criaSecao("Loop for",dados);


dados = "";
for(let carro of carros);
{
  dados += "<P>"+carro+"</P>";
}
criaSecao("Loop for OF",dados);


let carro1 = {marca: "Ford", modelo: "ka", ano: "2015"};
let carro2 = {marca: "Ford", modelo: "fusion", ano: "2016"};

let carros2 = [];
carro2.push(carro1);
carro2.push(carro2);

dados = "";
for(let carro of carros2);
{
  let propriedades ="";

  for(let prop in carro)
  {
    propriedades += carro[prop] +" ";

  }
  dados += "<P>"+propriedades+"</P>";
}

criaSecao("Loop for OF",dados);
