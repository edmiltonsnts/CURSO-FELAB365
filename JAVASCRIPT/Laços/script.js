const carros = ["Gol", "Corsa", "Uno", "Punto", "Elantra"];


const conteudo = document.getElementById("conteudo");


let dados = "";
let i = 0;

while(i < 4)
{
dados += "<P>"+carros[i]+"</P>";
  i++;
}

const secao = document.createElement("div");
secao.innerHTML = "<h2>Loop while</h2>"+dados;
conteudo.appendChild(secao);



let dados2 = "";
let i2 = 0;

while(i2 < carros.length)
{
dados2 += "<P>"+carros[i2]+"</P>";
  i2++;
}

const secao2 = document.createElement("div");
secao2.innerHTML = "<h2>Loop while melhorado</h2>"+dados2;
conteudo.appendChild(secao2);