//camelCase - Compra de Ingressos - ***OBS

//Passo 1: Comprar a quantidade de ingressos ao clicar - ok
//Passo 2: Diminuir a quantidade de ingressos comprados - Não sabia mudar no layout

let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar(){
    let quantidade = parseInt(document.getElementById('qtd').value);
    let ingresso = document.getElementById('tipo-ingresso').value;

    //vamos separar os laços em funçoes diferentes
    //1 - isso mantem esse função menos lotada de informação
    //2 - evita que a quantidade seja descontada de todos tipos
    if(ingresso == 'pista'){
        comprarPista(quantidade);
    }else if(ingresso == 'superior'){
        comprarSuperior(quantidade);
    }else if(ingresso == 'inferior'){
        comprarInferior(quantidade);
    }
}

    //Ja declarei todas as quantidades la em cima ***
function comprarPista(quantidade){
    if (qtdPista - quantidade < 0){
        alert(`Temos ${qtdPista} ingressos disponíveis`);
        return;
    }else{
        alert('Compra realizada');
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;            //Vai aparecer no site
    }
}

function comprarSuperior(quantidade){
    if (qtdSuperior - quantidade < 0){
        alert(`Temos ${qtdSuperior} ingressos disponíveis`);
        return;
    }else{
        alert('Compra realizada');
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;           
    }
}
    
function comprarInferior(quantidade){
    if (qtdInferior - quantidade < 0){
        alert(`Temos ${qtdInferior} ingressos disponíveis`);
        return;
    }else{
        alert('Compra realizada');
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;            
    }
}

//Terminamos com 3 funções fazendo a mesma coisa para cada tipo de ingresso
//Como todas se comportam iguais, poderiamos fazer de alguma maneira que apenas 1 função fizesse todas