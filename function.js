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
    if(escolha2 == 1){
        return 'Massa de baunilha, Corante rosa para dar a cor de bubblegum, Cobertura de chantilly, Confeitos coloridos, Chocolate meio amargo picado para o toque final';
    }
    else if(escolha2 == 2){
        return 'Frutas vermelhas (morango e framboesa) para o rubi, Frutas azuis (mirtilo ou amoras) para a safira, Açúcar, Gelatina em pó';
    }
    else if(escolha2 == 3){
        return 'Gelatina (de diversos sabores roxos, como uva e amora), Açúcar, Amido de milho, Corante roxo';
    }
    else if(escolha2 == 4){
        return 'Biscoitos de graham ou bolo de bolacha para a base, Cream cheese, Creme de leite, Gelatina rosa (ou corante rosa), Frutas do bosque (como framboesa) para decoração';
    }
    else if(escolha2 == 5){
        return 'Chocolate meio amargo, Manteiga, Ovos, Farinha, Nozes (opcional)';
    }
    else if(escolha2 == 6){
        return 'Chocolate branco (para o coating), Pistaches triturados, Palitos de pirulito, Corante verde (opcional, para intensificar a cor)';
    }
    else if(escolha2 == 7){
        return 'Bolo de baunilha, Cobertura de manteiga azul, Confeitos em formato de gota, Geléia de blueberry para um toque a mais';
    }
    else if(escolha2 == 8){
        return 'Chocolate chip cookies, Fondant rosa (para criar a forma de espada), Confeitos prateados (para detalhes), Açúcar de confeiteiro (para polvilhar)';
    }
    else if(escolha2 == 9){
        return 'Marshmallows, Corante rosa e preto, Açúcar de confeiteiro, Palitos de churrasco (para as "twists")';
    }
    else if(escolha2 == 10){
        return 'Farinha de amêndoa, Açúcar de confeiteiro, Clara de ovo, Corante azul (para combinar com a Pérola), Recheio de creme de manteiga de baunilha ou ganache de chocolate branco';
    }
    else{
        return 'escolha inválida';
    }
}

export function Personagens(){
    console.log('\n - Personagens:');
    console.log('1 - Steven');
    console.log('2 - Pérola');
    console.log('3 - Garnet');
    console.log('4 - Ametista');
    console.log('5 - Rose');
    console.log('6 - Greg');
    console.log('7 - Peridot');
    console.log('8 - Lapis');
    console.log('9 - Connie');
    console.log('10 - Espinela');
}

export function Curiosidades(escolha2){
    if(escolha2 == 1){
        return 'Você sabia que Steven é baseado em uma pessoa real: O personagem foi inspirado no irmão mais novo da criadora da série, Steven Sugar. Ele também trabalhou na produção da série como designer de cenários';
 }
    else if(escolha2 == 2){
        return 'Apesar de ser uma Gem “de apoio”, Pérola demonstra grande conhecimento técnico, engenharia de naves e habilidades de pilotagem. Ela frequentemente conserta dispositivos, ativa portais e entende a tecnologia das Gems melhor que muitas guerreiras.';
 }
 else if(escolha2 == 3){
     return 'Ela geralmente usa óculos futuristas, mas quando tira, revela três olhos — resultado da fusão de Ruby e Sapphire. Cada olho representa a perspectiva individual das duas Gemas, e o terceiro representa sua visão compartilhada como Garnet';
}
else if(escolha == 4){
    return 'Ametista foi formada no planeta Terra, mas saiu menor e menos poderosa do que o esperado para uma Gema da sua espécie. Isso faz com que ela, às vezes, se sinta inferior às outras Crystal Gems, principalmente à Garnet e à Pérola';
}
else if (escolha2 == 5){
    return 'Rose era fascinada pelos humanos e pelo livre-arbítrio, o que a fez se apaixonar pelo planeta Terra. Ela acreditava no valor da imperfeição, da mudança e da liberdade — o que motivou sua rebelião contra o sistema das Gemas.';
}
else if(escolha2 == 6){
    return 
}