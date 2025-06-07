import * as funcoes from './function.js';

let escolha;
let nome = funcoes.Nome();
funcoes.Apresentacao();

escolha = funcoes.PedirEscolha(nome);

while( escolha =! 0){
    if(escolha == 1){
        console.log('Certo, ' + nome + '! Você escolheu fazer um orçamento!')
        console.log('Aqui está nosso cardápio:\n')
        funcoes.Cardapio();

        let escolha2 = funcoes.PedirEscolha2(nome);
    }
}