//Variável com escopo de bloco
//Declaração de variável - LET OU CONST
if(true){
    let blocoEscopo = "Eu fico só nesse if";
    let numero = 10;
}

//System.out.println
console.log("I'm a print");
console.log(numero);

//Declaração de um objeto
const meuObjeto = {name: "Danilo"};
//Alterando dado salvo dentro de uma propriedade do objeto
meuObjeto.name = "Carlos";

//Função que era feita antes
function hello(name){
    return "Olá, " + name + "!";
}

//Funções atuais "Arrow Function"
//Função com parametro
const hello = nome => "Olá, " + nome + "!";
//Função sem parametro
const hello = () => "Olá, " + nome + "!";

//Exemplo 

//Desestruturando objetos
const pessoa = {
    firstName : "João",
    lastName : "da Silva",
    age : 20
};

//Declarar que as constates firstName e age são referente a uma pessoa
const {firstName, lastName, age} = pessoa;
console.log(firstName); //Exemplo de impressão: João
console.log(lastName);//Exemplo de impressão: da Silva
console.log(age); //Exemplo de impressão: 20
console.log(pessoa);//Exemplo de impressão: João da Silva 20

//Criando um Array
const colors = ['Vermelho', 'Azul', 'Verde', 'Amarelo'];
//Atribuição de valores, colocando o que cada um recebe dentro de "[]"
const [firstColor, secondColor] = colors //Exemplo: firstColor vai pegar Vermelho e secondColor pega Azul
console.log(firstColor); //Vermelho
console.log(secondColor); //Azul
//Se fosse pegar somente a teceira cor:
const [,,thirdColor] = colors; //As vírgulas é para ignorar os valores que vem antes do terceiro!
console.log(thirdColor);

//Desestruturando as funções
function displayInfo ({firstName, lastName, age}){
    //Utilizando ('') pode-se utilizar texto junto de variáveis
    console.log(`${firstName} tem ${age} anos!`);
}

const pessoaInfo = {
    firstName : 'Maria',
    lastName : 'Fernandes',
    age : 25
};
displayInfo(pessoaInfo); //Imprime: Maria tem 25 anos!

//Componente Funcional em React
function displayInfo({firstName, lastName, age}){
    return
    <div>
        Bem Vindo, {firstName}, você tem {age} anos!
    </div>
};

//Conceito Promisses - Uma promessa a ser cumprida
//Estados das Promisses:
//Pending (Pendente) é o estado inicial
//Fullfilled (Realizada) operação concluída
//Rejected (Rejeitada) operação que falhou
// async e await

async function fetchData(){
    try{
        let response = await fetch('https://sc.senai.br/alunos/1');
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log("Houve um erro na sua aplicação.", error);
    }
};

fetchData();

//Exercícios:
//1. Declare duas variáveis: nome com valor "React" e versao com valor "1.0.0" em seguida,
//exiba uma mensagem que diz
//'Estudando [Nome] na versão [1.0.0]'

//2. Crie um arrow function que receba dois números e retorne a soma deles.


//Exerc. 1.
const aula = {
    aulaName : "React",
    aulaVersao : "1.0.0"
};

const {name, valor} = aula;
console.log(`Atualmente você está estudando ${aulaName} na versão ${aulaVersao}`);
console.log(name); 
console.log(valor);
//End Exerc. 1.

console.log();

//Exerc. 2.
const soma = {
    valor1 : 10,
    valor2 : 50,
};

const {valor1, valor2} = soma;
console.log(`Primeiro valor somado ${valor1}, segundo valor somado ${valor2}`);
console.log("O resultado da soma é: " + (valor1 + valor2));

console.log();

const valor3 = 6;
const valor4 = 15;

const sum = (valor3, valor4) => valor3 + valor4;
console.log(`Os valores somados foram: ${valor3} e ${valor4}, o resultado foi: ${sum(valor3, valor4)}`);
//End Exerc. 2.