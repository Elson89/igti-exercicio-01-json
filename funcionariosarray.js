var Administrativo ={
    
    nome: ["Joao Cardoso Barbosa","Otávio Souza Cardoso","Matheus Ribeiro Rocha","Carlos Oliveira Rodrigues",
    "Mateus Pinto Pereira","Gabriela Souza Pereira","Gabrielle Araujo Souza","Rodrigo Correia Souza",
    "Nicole Costa Pinto", "Emilly Gomes Araujo", "Vitor Oliveira Sousa","Giovanna Barros Santos",
    "Bruna Lima Azevedo","Breno Sousa Rocha","Vitória Castro Almeida"],

    salario:[ 3000, 3500, 4500, 7000, 5500, 2500, 7500, 3500, 2000, 3000, 5500, 3000, 3000, 6000, 5000 ]
}; 

//Soma da Area administrativo//
var somaAdministraivo = 0
for (var i = 0; i < Administrativo.nome.length; i++){
    somaAdministraivo += Administrativo.salario[i];
}
//Media da Area administrativo//
var media = 0
media = somaAdministraivo / Administrativo.salario.length;

console.log("Soma administrativo: " +somaAdministraivo);
console.log("Media administrativo: " +media);
 
// Maior Salario do Setor//
var nomeMaiorSalarioAdministrativo = Administrativo.nome[0]
var valorMaiorSalarioAdministrativo = Administrativo.salario[0]

for (var j = 0; j < Administrativo.nome.length; j++){

if (valorMaiorSalarioAdministrativo < Administrativo.salario[j]){
    valorMaiorSalarioAdministrativo = Administrativo.salario[j];
    nomeMaiorSalarioAdministrativo = Administrativo.nome[j];

}
}
console.log("Maior Salario administrativo: " + nomeMaiorSalarioAdministrativo);
console.log("Maior Salario administrativo: " + valorMaiorSalarioAdministrativo);


// Menor Salario do Setor//

var nomeMenorSalarioAdministrativo = Administrativo.nome[0]
var valorMenorSalarioAdministrativo = Administrativo.salario[0]

for (var k = 0; k < Administrativo.nome.length; k++){

if (valorMenorSalarioAdministrativo > Administrativo.salario[k]){
    valorMenorSalarioAdministrativo = Administrativo.salario[k];
    nomeMenorSalarioAdministrativo = Administrativo.nome[k];

}
}
console.log("Menor Salario Administrativo: " + nomeMenorSalarioAdministrativo);
console.log("Menor Salario Administrativo: " + valorMenorSalarioAdministrativo);


var Producao = {

    nome: ["Rebeca Costa Oliveira","Marisa Dias Barbosa","Giovanna Santos Araujo","Leonardo Souza Lima",
    "Vitor Ribeiro Barbosa","Emily Melo Cavalcanti","José Melo Araujo","Anna Sousa Goncalves",
    "Maria Cavalcanti Rocha","Guilherme Silva Cavalcanti","José Sousa Lima","Júlio Cavalcanti Martins",
    "Rafaela Cunha Santos","Gabrielly Martins Alves","Rebeca Ferreira Oliveira",],


    salario: [2000,6500,2500,1500,3500,2000,4000,5000,3000,5500,7500,5000,2000,4000,2500,]
}
//Soma da Area Producao//
var somaProducao = 0
for (var i = 0; i < Producao.nome.length; i++){
    somaProducao += Producao.salario[i];
}
//Media da Area Producao//
var media = 0
media = somaProducao / Producao.salario.length;

console.log("Soma Producao: " +somaProducao);
console.log("Media Producao: " +media);
 
// Maior Salario do Setor//
var nomeMaiorSalarioProducao = Producao.nome[0]
var valorMaiorSalarioProducao = Producao.salario[0]

for (var j = 0; j < Producao.nome.length; j++){

if (valorMaiorSalarioProducao < Producao.salario[j]){
    valorMaiorSalarioProducao = Producao.salario[j];
    nomeMaiorSalarioProducao = Producao.nome[j];

}
}
console.log("Maior Salario: " + nomeMaiorSalarioProducao);
console.log("Maior Salario: " + valorMaiorSalarioProducao);

// Menor Salario do Setor//

var nomeMenorSalarioProducao = Producao.nome[0]
var valorMenorSalarioProducao = Producao.salario[0]

for (var k = 0; k < Producao.nome.length; k++){

if (valorMenorSalarioProducao > Producao.salario[k]){
    valorMenorSalarioProducao = Producao.salario[k];
    nomeMenorSalarioProducao = Producao.nome[k];

}
}
console.log("Menor Salario Producao: " + nomeMenorSalarioProducao);
console.log("Menor Salario Producao: " + valorMenorSalarioProducao);



var Comercial = {
    
    nome: ["Ana Azevedo Alves","Igor Cunha Lima","Sarah Sousa Costa","Nicolash Cavalcanti Fernandes",
    "Vinícius Pereira Castro","Luís Carvalho Silva","Manuela Ferreira Cardoso","Anna Gomes Rodrigues",
    "Luis Lima Rocha","Thaís Sousa Carvalho","Mateus Barros Carvalho","Antônio Almeida Goncalves",
    "Ana Castro Dias","Otávio Araujo Costa","Marina Goncalves Rodrigues",],

    salario: [5000,1200,1500,4000,3500,1500,6000,7000,2000,4000,8000,2000, 9500,3500,4000]
}

//Soma da Area Comercial//
var somaComercial = 0
for (var i = 0; i < Comercial.nome.length; i++){
    somaComercial += Comercial.salario[i];
}
//Media da Area Comercial//
var media = 0
media = somaComercial / Comercial.salario.length;

console.log("Soma Comercial: " +somaComercial);
console.log("Media Comercial: " +media);
 
// Maior Salario do Setor//
var nomeMaiorSalarioComercial = Comercial.nome[0]
var valorMaiorSalarioComercial = Comercial.salario[0]

for (var j = 0; j < Comercial.nome.length; j++){

if (valorMaiorSalarioComercial < Comercial.salario[j]){
    valorMaiorSalarioComercial = Comercial.salario[j];
    nomeMaiorSalarioComercial = Comercial.nome[j];

}
}
console.log("Maior Salario Comercial: " + nomeMaiorSalarioComercial);
console.log("Maior Salario Comercial: " + valorMaiorSalarioComercial);


// Menor Salario do Setor//

var nomeMenorSalarioComercial = Comercial.nome[0]
var valorMenorSalarioComercial = Comercial.salario[0]

for (var k = 0; k < Comercial.nome.length; k++){

if (valorMenorSalarioComercial > Comercial.salario[k]){
    valorMenorSalarioComercial = Comercial.salario[k];
    nomeMenorSalarioComercial = Comercial.nome[k];

}
}
console.log("Menor Salario Comercial: " + nomeMenorSalarioComercial);
console.log("Menor Salario Comercial: " + valorMenorSalarioComercial);

//Maior Salario Empresa//

var arrayNomeMaiorSalario = [nomeMaiorSalarioProducao, nomeMaiorSalarioComercial, 
    nomeMaiorSalarioAdministrativo]
var nomeMaiorSalariorioEmpresa = arrayNomeMaiorSalario[0]   
var arrayMaiorSalario = [valorMaiorSalarioProducao, valorMaiorSalarioComercial, 
    valorMaiorSalarioAdministrativo]
var maiorSalarioEmpresa = arrayMaiorSalario[0]

for (var i = 0; i < arrayMaiorSalario.length; i++){

    if (maiorSalarioEmpresa < arrayMaiorSalario[i]){
        maiorSalarioEmpresa = arrayMaiorSalario[i];
        nomeMaiorSalariorioEmpresa = arrayNomeMaiorSalario[i];
    }
    
}

console.log("Maior Salario Empresa: " +  nomeMaiorSalariorioEmpresa);
console.log("Maior Salario Empresa: " + maiorSalarioEmpresa);

// Menor Salario Empresa//

var arrayNomeMenorSalario = [nomeMenorSalarioProducao, nomeMenorSalarioComercial, 
    nomeMenorSalarioAdministrativo]
var nomeMenorSalariorioEmpresa = arrayNomeMenorSalario[0]   
var arrayMenorSalario = [valorMenorSalarioProducao, valorMenorSalarioComercial, 
    valorMenorSalarioAdministrativo]
var menorSalarioEmpresa = arrayMaiorSalario[0]

for (var i = 0; i < arrayMaiorSalario.length; i++){

    if (menorSalarioEmpresa > arrayMenorSalario[i]){
        menorSalarioEmpresa = arrayMenorSalario[i];
        nomeMenorSalariorioEmpresa = arrayNomeMenorSalario[i];
    }
    
}

console.log("Maior Salario Empresa: " +  nomeMenorSalariorioEmpresa);
console.log("Maior Salario Empresa: " + menorSalarioEmpresa);

//Soma Geral Empresa//
var arrayNomeGeral = [Administrativo.nome, Comercial.nome, Producao.nome];
var arraySomaGeral = [somaAdministraivo, somaComercial, somaProducao];
var somaGeral = 0

for (var i = 0; i < arrayNomeGeral.length; i++){
    somaGeral+= arraySomaGeral[i];
}

//Media Geral Empresa//
 
var mediaGeral = 0

mediaGeral = somaGeral / 45;


console.log("Soma Geral Empresa: " +somaGeral);
console.log("Media Geral Empresa: " + mediaGeral);