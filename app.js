import * as funcoes from './function.js';

let escolha;
let escolha2;
let nome = funcoes.Nome();
funcoes.Apresentacao();

escolha = funcoes.PedirEscolha(nome);

while( escolha != 0){
    if(escolha == 1){
        console.log('Certo, ' + nome + '! Você escolheu fazer um orçamento!')
        funcoes.Cardapio();

        escolha2 = funcoes.PedirEscolha2(nome);
        let qtd = funcoes.Perguntar(nome);
        let preco = [0, 8, 4, 6, 10, 6, 8, 6, 4, 2, 4];

        let total = funcoes.Soma(escolha2, qtd, preco);

        console.log('Seu pedido deu R$' + total);

    }

    else if(escolha == 2){
        console.log('Certo, ' + nome + '! Você escolheu saber mais sobre nossas sobremesas!');
        funcoes.Cardapio();
        escolha2 = funcoes.PedirEscolha2(nome);
        let resul= funcoes.Ingredientes(escolha2);

        console.log(resul);
    }

    else if(escolha == 3){
        console.log('Certo, ' + nome + '! Você escolheu saber mais sobre os personagens!');
        funcoes.Personagens();
        escolha2 = funcoes.PedirEscolha2(nome);
        let resul = funcoes.Curiosidades(escolha2);

        console.log(resul);
    }
    
    funcoes.Apresentacao();
    escolha = funcoes.PedirEscolha(nome);
}