/** Coé seu feeeio, fiz umas pequenas alterações aqui, não fiz muita coisa não, da para melhorar muiito ainda. Mas já da para pegar uma ideia do que falei sobre otimização de código. Vou deixar uns comments para te ajudar tb. */

/** Uma boa pratica é, toda vez que for buscar um elemento, usar ID e não classe. Também atente-se ao padrão de nomenclatura, se vai criar variaveis com o nome em português, crie todas com o nome em português, se vai ser em inglês, todas em ingles. Deixar uma variável/função em português, depois outra em inglês ou ainda mesclar português/inglês deixa seu código feio e com baixa legibilidade. */

const answer = document.querySelector('#game__answer'); // Sempre pelo ID
const teclado = document.querySelector('#teclado'); 
const question = document.querySelector('.game__question'); // Não mexi daqui pra baixo, foquei só no "core" do game
const ntentativas = document.getElementById('tentativas'); 
const forca = document.querySelector('.forca__img'); 
const backloser = document.querySelector('.main__maxwindow'); 
const loser = document.querySelector('.maxwindow__end'); 
const menu = document.querySelector('.main__menu'); 
const backmenu = document.querySelector('.maxwindow--menu'); 
const closenmenu = document.querySelector('.right__icon__closemenu'); 
const openmenu = document.querySelector('.right__icon__menu'); 
const backwin = document.querySelector('.main__maxwindow--win'); 
const winner = document.querySelector('.maxwindow__win'); 

/** Aqui basta adicionar uma nova palavra e ela vai estar no jogo. Uma outra coisa que você pode fazer é adicionar um input na tela para que o jogador possa adicionar novas palavras. */
const wordsList = ['bonita', 'orelhinha', 'akamaru', 'beethoven']; 

const randomIndex = Math.floor(Math.random() * wordsList.length); /** Perceba que ao invés de usar apenas "rand", eu especifiquei que essa variável guarda um Index randomico, pois é como ela será utilizada, como um Index para um array. */

const chosenWord = wordsList[randomIndex]; // Guardo a palavra escolhida já aqui para utilizar durante todo o game;
const correctLetters = []; // Todas as letras corretas serão salvas aqui;
const pressedKeys = new Set(); // Todas as teclas pressionadas serão salvas aqui e como é um "Set", ele guarda sem repetição. Vale ler sobre;
let attempts = 6; // Repare que usei 'let' somente aqui. Nunca use var, use 'const' para praticamente TUDO e let só para as que irão ter seus valores alterados. Existem outras formas de limpar Arrays e Set's, que você vai ver abaixo, por isso até eles estão com 'const'.

// Criei uma mini função apenas para resetar os valores principais;
const resetGame = () => {
    attempts = 6; 
    correctLetters.length = 0; // Quando você atribui 0 ao tamanho de um array, você "limpa" ele sem precisar reatribuir, ex.: correctLetters = [];
    pressedKeys.clear(); // Um Set tem uma função própria para limpar seus valores;
    teclado.replaceChildren(''); // Como disse Marco Bruno: Nunca use innerHTML, NUNCA.
};

// Não mexi, tava com preguiça e é isso. Mudaria esse nome, já que na função de perder vc n colocou só "lose". Padrão, sempre siga um padrão.
const win = function () { 
    backwin.classList.add('active');
    setTimeout(() => {
        winner.classList.add('active');
    }, 1);
};

/** 
 * Sempre opte por um dos padrões adotados ao nomear funções e variáveis com nomes compostos para facilitar a legibilidade (leitura) do seu código, lembre-se, a gente escreve códigos para outras pessoas lerem, a máquina só executa. Vou deixar uma lista com os exemplos:
 * camelCase
 * PascalCase
 * snake_case
 * Existe também o kebab-case, mas é recomendado usar ele mais no CSS, ele nem vai funcionar no JS mesmo kkkk
*/
const youlose = function () { // Aqui o correto seria algum desses: youLose, YouLose ou you_lose
    backloser.classList.add('active');
    setTimeout(() => {
        loser.classList.add('active');
    }, 1);
};

/** Perceba que criei pequenas funções que "compõe" o resultado final que eu preciso, essa aqui por exemplo, gera apenas os espaços para cada letra da palavra escolhida. 
 * Fiz isso porque na aplicação vc estava reduzindo a fonte, porém se eu apertasse F12 eu via a palavra escrita lá no HTML kkkk Dessa forma aqui só vai ter espaços em branco. 
 * Aqui eu fiz um "split" para transformar cada letra da palavra em um item num array. Se vc tentar fazer algo como 'feio'.split('') no navegador, verá que o resultado será um array assim: ['f', 'e', 'i', 'o']. O valor que você passar no "split" é o que será utilizado para dividir/separar(split) os itens, por exemplo. Se eu tiver uma palavra tipo, 'c.a.b.e.ç.ã.o'.split('.'), repare que dentro do 'split' eu passei o '.'(ponto), assim o resultado será: ['c', 'a', 'b', 'e', 'ç', 'ã', 'o']. Vale a pena brincar com ele e ver os resultados. Pratique.
 * Depois, em cima do resultado do "split" eu fiz um "map", vale pesquisar sobre ele tb. Essa função "mapeia" uma lista e retorna o que você quiser no lugar de cada valor que ele fizer o loop. Nesse caso eu só quis retornar um espaço vazio no lugar de cada letra da palavra. Faz uns exprimentos e pesquisas com o map, vale muiiito a pena.
*/ 
const getSpaces = (word) => {
    return word
        .split('')
        .map(() => ' ')
        .join('');
};

/** Criei outra função que o papel dela é apenas escrever a palavra na tela. Dava pra melhorar e não colocar a limpeza do "answer" aqui dentro, mas não é esse o foco. Mais pra frente tu vai aprender sobre clean code. 
 * O interessante aqui é notar que com uma função e poucas linhas eu consigo escrever todas as letras na tela.
*/ 
const writeWord = (word) => {
    const htmlWord = word.split('').map((char) => `<p class="answer__letra">${char}</p>`);
    answer.innerHTML = '';
    answer.insertAdjacentHTML('afterbegin', htmlWord.join('')); // Sem innerHTML, visse?
};

// Uma função que escreve na tela cada letra que foi digitada
const writePressedKey = (char) => {
    teclado.insertAdjacentHTML('beforeend', `<button class="teclado__tecla">${char}</button>`);
};

// Essa aqui só atualiza as tentativas na variável e na tela
const updateAttempts = () => {
    attempts -= 1;
    ntentativas.textContent = attempts;
};

// Aqui eu atualizo o valor das teclas pressionadas e também as escrevo na tela. Coloquei pra escrever na tela aqui para evitar a fadiga, são 18:25 e estou cansado. Melhore esse código;
const updatePressedKeys = (value) => {
    pressedKeys.add(value);
    teclado.innerHTML = '';
    Array.from(pressedKeys).forEach((key) => writePressedKey(key));
};

// Criei uma função para atualizar a imagem da forca, perceba que ela recebe um texto e passa ele como valor para o atributo, assim você vai ver que lá na frente não vai precisar de 15 "if's" para renderizar cada uma delas. Veja que eu também coloquei 'init' como um valor inicial, bem como alterei os nomes das imagens, assim, caso eu não passa nenhum argumento nessa função, ela vai por padrão renderizar a imagem da forca vazia.
const updateGallowImg = (text = 'init') => forca.setAttribute('src', `assets/img/${text}.png`);

// Inicia o game e executa algumas das funções que expliquei acima, volte e leia.
const startgame = function () {
    resetGame();
    updateGallowImg();
    ntentativas.textContent = attempts;
    const spaces = getSpaces(chosenWord);
    writeWord(spaces);
};

// Criei uma função que guarda "tudo" relacionado ao controle do game em si.
const gameControl = (event) => { // Esse 'event' quem passa é o eventListener, vc vai ver mais a frente.
    if (attempts <= 0) return youlose(); // Primeiro eu verifico se a pessoa chegou na última tentativa, se sim, ele nem executa nada depois disso.

    const pressedKey = event.key; // Esse evento tem a tecla que foi digitada. Não fiz validação de maiúscula e minúscula, se vire HAHAHAHA

    updatePressedKeys(pressedKey); // Atualizo a lista de teclas pressionadas no Set

     // Outro split e aqui a função da vez é um 'some', vale pesquisar. Ela faz um loop por todos os valores do array e assim que encontrar a primeira letra que seja igual a condição, nesse caso char === pressedKey, ela para o loop. Então utilizei ela apenas para adicionar na lista de letras corretas o tecla que foi pressionada.
    chosenWord.split('').some((char) => {
        if (char === pressedKey) correctLetters.push(char);
    });

    // Aqui eu utilizo as funções que já expliquei mais acima e mapeio as letras para que a palavra retornada na variável 'mappedWord' tenha apenas as letras corretas. Qualquer letra errada simplesmente retorna um espaço vazio.
    const mappedWord = chosenWord
        .split('')
        .map((char) => {
            if (correctLetters.includes(char)) return char; // O 'includes' aqui faz uma validação se alguma letra da palavra escolhida, 'chosenWord', existe dentro da lista das letras corretas, se existir ele vai retornar a letra.
            return ' '; // Se não existir ele retorna um espaço vazio. Ficaria algo como, ex.: A palavra é "teste", apertei 't', mappedWord vai ter uma string assim: 't  t '
        })
        .join('');

    if (!mappedWord.includes(pressedKey)) { // Aqui eu vejo se a tecla pressionada não está (!), veja que tem a exclamação, na palavra mapeada e ai eu atualizo as tentativas e a forca. Vale ler sobre negação (!)
        updateAttempts();
        updateGallowImg(attempts); // Perceba que a única coisa que fiz para mudar a imagem da forca foi passar a quantidade de tentativas para essa função. Como alterei os nomes das imagens, essa função vai renderizar cada imagem baseada na quantidade de tentativas que faltam.
    }

    writeWord(mappedWord); // Aqui eu só escrevo na tela a palavra conforme ela vai sendo "montada"

    if (mappedWord === chosenWord) return win(); // Quando a palavra digitada estiver igual a palavra escolhida, WIN !
};

// Nem mexi
function close_window() {
    if (confirm('Deseja fechar esta página?')) {
        window.close();
    }
}

// Só coloquei a função para renderizar a forca em vez dos 12312541354364356 de If's
function restart() {
    updateGallowImg();
    
    winner.classList.remove('active');
    setTimeout(() => {
        backwin.classList.remove('active');
    }, 2000);

    loser.classList.remove('active');
    setTimeout(() => {
        backloser.classList.remove('active');
    }, 2000);
    
    startgame();
}

// Não mexi
function menutoggle() {
    closenmenu.classList.toggle('active');
    openmenu.classList.toggle('active');
    if (backmenu.classList.contains('active')) {
        setTimeout(() => {
            backmenu.classList.toggle('active');
        }, 500);
        menu.classList.toggle('active');
    } else {
        backmenu.classList.toggle('active');
        setTimeout(() => {
            menu.classList.toggle('active');
        }, 1);
    }
}

window.onload = startgame();
window.addEventListener('keypress', gameControl); // E aqui passei a função de controle para o listener que vai "escutar" toda tecla pressionada (keypress). Toda vez que uma tecla é pressionada, o navegador vai chamar a função gameControl e passar para ela o 'event', que falei lá em cima.

// É isso, estude esse código, melhore mais as outras partes, pense em como deixar esse código ainda mais otimizado, estude JS e Algoritmos. Veja que reduzi seu código de 1000 linhas para 187 com os comentários e sem mexer em tudo kkk
// Fora que agora para adicionar uma nova palavra basta colocar no array lá e funciona pressionando teclas. FUIIIIII, vou comprar pão antes que Mari me mate \oooo
