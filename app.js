import * as funcoes from './function.js';

let escolha;
let nome = funcoes.Nome();
funcoes.Apresentacao();

escolha = funcoes.PedirEscolha(nome);

while( escolha =! 0){
    if(escolha == 1){
        console.log('Certo, ' + nome + '! Você escolheu fazer um orçamento!')
        funcoes.Cardapio();

        let escolha2 = funcoes.PedirEscolha2(nome);
        let qtd = funcoes.Perguntar(nome);
        let preco = [0, 8, 4, 6, 10, 6, 8, 6, 4, 2, 4];

        total = funcoes.Soma(escolha2, qtd, preco);
    }

    else if(escolha == 2){
        console.log('Certo, ' + nome + '! Você escolheu saber mais sobre nossas sobremesas!');
        funcoes.Cardapio();
        escolha = funcoes.PedirEscolha;
    }
}