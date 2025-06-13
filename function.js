import prompt from 'prompt-sync'
let ler = prompt();

export function Nome(){
    console.log('Olá, diamante! Sou a assistente virtual da Doceria Universo, Pérola Lilás!');
    console.log('\nComo posso te chamar?');
    let nome = ler();
    return nome;
}

export function Apresentacao(){
    console.log('\n---MENU---');
    console.log('\n #1 - Orçamento');
    console.log(' #2 - Informações sobre pratos');
    console.log(' #3 - Curiosidades');
    console.log(' #0 - Sair')
}

export function PedirEscolha(nome){
    console.log('\n - Faça a sua escolha, ' + nome +'!')
     let escolha = Number(ler());
     return escolha;
}

export function Cardapio(){
    console.log('Aqui está nosso cardápio:\n')
        console.log('---Cardápio---');
    console.log('\n #1 - Steven Bubblegum Cupcake - R$8');
    console.log(' #2 - Geleia de Rubi e Safira - R$4');
    console.log(' #3 - Amethyst Cake - R$6');
    console.log(' #4 - Rose Quartz Cheesecake - R$10')
    console.log(' #5 - Greg Universe Brownie Bar - R$6')
    console.log(' #6 - Peridot Pistache Cake - R$8')
    console.log(' #7 - Lapis Lago Azul - R$6')
    console.log(' #8 - Connie Cookie Sword - R$4')
    console.log(' #9 - Spinel Marshmallow Twists - R$2')
    console.log(' #10 - Pérola Macaron - R$4')
}

export function PedirEscolha2(nome){
    console.log('\n - Faça a sua escolha, ' + nome +'!')
     let escolha2 = Number(ler());
     return escolha2;
}

export function Perguntar(nome){
    console.log('\n - Quantos você quer, ' + nome +'?')
     let qtd = Number(ler());
     return qtd;
}

export function Soma(escolha2, qtd, preco){
    let soma = preco[escolha2] * qtd;
    return soma;
}

export function Ingredientes(escolha2){
    if(escolha == 1){
        console.log('- Massa de baunilha');
        console.log('- Corante rosa para dar a cor de bubblegum');
        console.log('- Cobertura de chantilly');
        console.log('- Confeitos coloridos');
        console.log('- Chocolate meio amargo picado para o toque final');
    }
    else if(escolha == 2){}
}