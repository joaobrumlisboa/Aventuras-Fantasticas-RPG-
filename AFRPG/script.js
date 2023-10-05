let x = 0;
let y = 0;
let linha = "A";
let coluna = 1;
let variavel = linha.charCodeAt(0);
let jogo = [ 
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
        ]
let mochila = [] 
let turno = 0;
function mostrarnav(){
    nav = document.getElementById("navegacao")
    nav.innerHTML = linha + coluna
    }   
function checknav(direcao){
    if (direcao == 'N') {
        if (variavel == 65){
            alert("testeNorte")    
        }
        else {
            variavel -= 1
            x -= 1
            linha = String.fromCharCode(variavel)
            mostrarnav()
            checkbotao(x, y) 
        }   
    }
    else if (direcao == 'S') {
        if (variavel == 69){
            alert("testeSul")    
        }
        else {
            variavel += 1
            x += 1
            linha = String.fromCharCode(variavel)
            mostrarnav()
            checkbotao(x, y) 
        }   
    }
    else if (direcao == 'L') {
        if (coluna == 5){
            alert("testeLeste")    
        }
        else {
            y+= 1
            coluna += 1
            mostrarnav()
            checkbotao(x, y) 
        }   
    }
    else if (direcao == 'O') {
        if (coluna == 1){
            alert("testeOeste")    
        }
        else {
            y -= 1
            coluna -= 1
            mostrarnav()
            checkbotao(x, y) 
        }   
    }    
}
function resetar(){
    window.location.reload();
}
function acabar(){
    {document.getElementById("norte").style.display="none";}
    {document.getElementById("sul").style.display="none";}
    {document.getElementById("leste").style.display="none";}
    {document.getElementById("oeste").style.display="none";}
    let btnreset = document.createElement("button");
    btnreset.innerHTML = "Tentar Novamente";
    btnreset.name = "btnreset"
    btnreset.onclick = resetar
    document.body.appendChild(btnreset); 
}
function checkbotao(x, y){
    {document.getElementById("norte").style.display="block";}
    {document.getElementById("sul").style.display="block";}
    {document.getElementById("leste").style.display="block";}
    {document.getElementById("oeste").style.display="block";}
    if (x == 0){
        {document.getElementById("norte").style.display="none";}
    }   
    if (x == 4){
        {document.getElementById("sul").style.display="none";}
    }
    if (y == 0){
        {document.getElementById("oeste").style.display="none";}
    }
    if (y == 4){
        {document.getElementById("leste").style.display="none";}
    }
}
function jogada(x, y){
    const imagemQuadro = document.getElementById("quadro");
    checkbotao(x, y)
    atualizarPosicaoJogador(x, y);
    if (jogo[x][y] == 1){
        texto = document.getElementById("texto")
        texto.innerHTML = "Após um longo caminhar sob o sol escaldante, o seu grupo de Piratas chega ao local indicado no mapa que lhes foi dado. Você, como o capitão deve guiar a expedição nesse naufrágio do grande navio Maré de Sereia."
        imagemQuadro.src = "imagens/Inicio.jpg"
    }
    else if (jogo[x][y] == 2){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você anda pelos corredores do navio, mas nada lhe chama atenção."
        imagemQuadro.src = "imagens/Interior.jpg"
    }
    else if (jogo[x][y] == 3){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você anda pelos corredores do navio, mas nada lhe chama atenção."
        imagemQuadro.src = "imagens/Interior.jpg"
    }
    else if (jogo[x][y] == 4){
        texto = document.getElementById("texto")
        texto.innerHTML = "Ao fim dessa ala Leste uma escada parece guiar à parte traseira do convés, mas está difícil enxergar o que tem na parte de fora."
        imagemQuadro.src = "imagens/Escada.jpg"
    }
    else if (jogo[x][y] == 5){
        texto = document.getElementById("texto")
        texto.innerHTML = "Antes de poder reagir, você e sua tripulação são surpreendidos criaturas assustoras que pulam dos mares que circulam o navio para dentro do convés! Não há escapatória, vocês terão de lutar."
        imagemQuadro.src = "imagens/Merfolk.jpg"
        document.getElementById("norte").disabled = true;
        document.getElementById("sul").disabled = true;
        document.getElementById("leste").disabled = true;
        document.getElementById("oeste").disabled = true;
        document.getElementById("iniciarBatalha").disabled = false;
        document.getElementById("iniciarBatalha").style.display = "block";
    }
    else if (jogo[x][y] == 6){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você anda pelos corredores do navio, mas nada lhe chama atenção."
        imagemQuadro.src = "imagens/Interior.jpg"
    }
    else if (jogo[x][y] == 7){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você está nos aposentos principais do navio, é uma sala grande. O báu deve estar em algum lugar por aqui."
        imagemQuadro.src = "imagens/Aposentos.jpg"
    }
    else if (jogo[x][y] == 8){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você está nos aposentos principais do navio, é uma sala grande. O báu deve estar em algum lugar por aqui."
        imagemQuadro.src = "imagens/Aposentos.jpg"
    }
    else if (jogo[x][y] == 9){
        texto = document.getElementById("texto")
        texto.innerHTML = "Na sua busca descontralada pelo tesouro, você deixou de olhar seus arredores com cuidado. Você tropeçou numa armadilha e lanças foram disparadas contra você. É o fim..."
        imagemQuadro.src = "imagens/Trap.png"
        texto.style.color = "red"
        acabar();
    }
    else if (jogo[x][y] == 10){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você anda pelos corredores do navio, mas nada lhe chama atenção."
        imagemQuadro.src = "imagens/Interior.jpg"
    }
    else if (jogo[x][y] == 11){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você anda pelos corredores do navio, mas nada lhe chama atenção."
        imagemQuadro.src = "imagens/Interior.jpg"
    }
    else if (jogo[x][y] == 12){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você está nos aposentos principais do navio, é uma sala grande. O báu deve estar em algum lugar por aqui."
        imagemQuadro.src = "imagens/Aposentos.jpg"
    }
    else if (jogo[x][y] == 13){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você está nos aposentos principais do navio, é uma sala grande. O báu deve estar em algum lugar por aqui."
        imagemQuadro.src = "imagens/Aposentos.jpg"
    }
    else if (jogo[x][y] == 14){
        texto = document.getElementById("texto")
        if(mochila.includes("Chave Mestra")){
            texto.innerHTML = "Você abre o báu! Ouro, ouro e mais ouro. Você e sua tripulação estão ricos! Você prometeu uma rodada de Rum caso o tesouro fosse verdadeiro, então todos se dirigem à taverna mais próxima."
            imagemQuadro.src = "imagens/Opened.jpg"
            texto.style.color = "green"
            acabar();
        }else{
            texto.innerHTML = "Aqui está, o báu mais desejado de todos os piratas. Mas... você não possui a chave, deve estar em algum lugar desse navio!"
            imagemQuadro.src = "imagens/Locked.jpg"
        }  
    }
    else if (jogo[x][y] == 15){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você anda pelos corredores do navio, mas nada lhe chama atenção."
        imagemQuadro.src = "imagens/Interior.jpg"
    }
    else if (jogo[x][y] == 16){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você anda pelos corredores do navio, mas nada lhe chama atenção."
        imagemQuadro.src = "imagens/Interior.jpg"
    }
    else if (jogo[x][y] == 17){
        texto = document.getElementById("texto")
        texto.innerHTML = "Na sua busca descontralada pelo tesouro, você deixou de olhar seus arredores com cuidado. Você tropeçou numa armadilha e lanças foram disparadas contra você. É o fim..."
        imagemQuadro.src = "imagens/Trap.png"
        texto.style.color = "red"
        acabar();
    }   
    else if (jogo[x][y] == 18){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você está nos aposentos principais do navio, é uma sala grande. O báu deve estar em algum lugar por aqui."
        imagemQuadro.src = "imagens/Aposentos.jpg"
    }
    else if (jogo[x][y] == 19){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você está nos aposentos principais do navio, é uma sala grande. O báu deve estar em algum lugar por aqui."
        imagemQuadro.src = "imagens/Aposentos.jpg"
    }
    else if (jogo[x][y] == 20){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você anda pelos corredores do navio, mas nada lhe chama atenção."
        imagemQuadro.src = "imagens/Interior.jpg"
    }
    else if (jogo[x][y] == 21){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você encontrou o fim desse corredor, à sua direita há uma nota num pequeno pedaço de papel."
        imagemQuadro.src = "imagens/Parede.jpg"
    }
    else if (jogo[x][y] == 22){
        texto = document.getElementById("texto")
        texto.innerHTML = "Na nota: Aquele doido do Capitão me pediu para mover a chave mestra ainda mais pra fundo desse corredor, acho estranho ele desconfiar de sua própria tripulação. Às vezes me pergunto o que ele guarda naquele bendito báu. Terei sua cabeça se dizer à ele que te contei isso, e jogue fora essa nota depois de ler."
        imagemQuadro.src = "imagens/Nota.jpg"
    }
    else if (jogo[x][y] == 23){
        texto.innerHTML = "Você anda pelos corredores do navio, mas nada lhe chama atenção."
        imagemQuadro.src = "imagens/Interior.jpg"
    }
    else if (jogo[x][y] == 24){
        texto = document.getElementById("texto")
        texto.innerHTML = "Uma chave tampouco brilhante se encontra sobre uma das mesas mais adiantes. Você rapidamente pega-a e coloca-a no seu inventário!"
        mochila.push("Chave Mestra")
        imagemQuadro.src = "imagens/Chave.jpg"
        chave = document.getElementById("item1")
        chave.innerHTML = mochila[0]
    }
    else if (jogo[x][y] == 25){
        texto = document.getElementById("texto")
        texto.innerHTML = "Você encontrou o fim desse corredor."
        imagemQuadro.src = "imagens/Parede.jpg"
    } 
}
function atualizarPosicaoJogador(x, y) {
    const todasCelulas = document.querySelectorAll("td");
    todasCelulas.forEach(celula => {
        celula.classList.remove("jogador");
    });
    const celulaJogador = document.getElementById(`${String.fromCharCode(65 + x)}${y + 1}`);
    celulaJogador.classList.add("jogador");
}
function iniciarBatalha(){
    document.getElementById("Atacar").disabled = false;
    document.getElementById("Esquivar").disabled = false;
    document.getElementById("Atacar").style.display = "block";
    document.getElementById("Esquivar").style.display = "block";
    document.getElementById("iniciarBatalha").style.display = "none";
    texto = document.getElementById("texto")
    texto.innerHTML = "Os monstros saltam em sua direção com seus tridentes afiados!"
    }
    function atacar(){
        if(turno == 0){
                texto = document.getElementById("texto");
                texto.innerHTML = "A sua tentativa de ataque foi falha, os monstros desviam de seu sabre e lhe desferem um golpe fatal.";
                document.getElementById("Atacar").disabled = true;
                document.getElementById("Esquivar").disabled = true;
                texto.style.color = "red"
                acabar();
                turno++;
                return false
        }
        if(turno == 1){
                
                texto = document.getElementById("texto");
                texto.innerHTML = "O golpe certeiro desestabiliza os monstros, porém um deles te surpreende arremesando um dos tridentes!";
                turno++;
                return false
        }
        if(turno == 2){
                texto = document.getElementById("texto");
                texto.innerHTML = "Você mal consegue puxar seu sabre quando o tridente lhe acerta em cheio no peito.";
                document.getElementById("Atacar").disabled = true;
                document.getElementById("Esquivar").disabled = true;
                texto.style.color = "red"
                acabar()
                turno++;
                return false
        }
        if(turno == 3){
                texto = document.getElementById("texto");
                texto = document.getElementById("texto");
                texto.innerHTML = "Você desferiu o golpe final, que bela exibição de combate.";
                turno++;
                document.getElementById("Atacar").disabled = true;
                document.getElementById("Esquivar").disabled = true;
                encerrarBatalha();
                return false
        }
    }
    function esquivar(){
        if(turno == 0){
                texto = document.getElementById("texto");
                texto.innerHTML = "Parece que sua esquiva foi efetiva, os monstros estão abertos para um ataque certeiro!";
                turno++;
                return false
        }
        if(turno == 1){
                texto = document.getElementById("texto");
                texto.innerHTML = "Você desperdiçou uma oportunidade de ouro para revidar o ataque, os monstros desferem golpes fatais.";
                document.getElementById("Atacar").disabled = true;
                document.getElementById("Esquivar").disabled = true;
                texto.style.color = "red"
                acabar()
                turno++;
                return false
        }
        if(turno == 2){
                texto = document.getElementById("texto");
                texto.innerHTML = "Uau! Que movimentos ágeis. Agora é a hora do golpe final!";
                turno++;
                return false
        }
        if(turno == 3){
                texto = document.getElementById("texto");
                texto.innerHTML = "Você desperdicou a chance de ouro, os monstros partem pra cima da tripulação! É o fim!";
                document.getElementById("Atacar").disabled = true;
                document.getElementById("Esquivar").disabled = true;
                texto.style.color = "red"
                acabar()
                turno++;
                return false
        }
    }
    function encerrarBatalha(){
        const imagemQuadro = document.getElementById("quadro");
        document.getElementById("Atacar").style.display = "none";
        document.getElementById("Esquivar").style.display = "none";
        document.getElementById("norte").disabled = false;
        document.getElementById("sul").disabled = false;
        document.getElementById("leste").disabled = false;
        document.getElementById("oeste").disabled = false;
        texto = document.getElementById("texto")
        texto.innerHTML = "Parece que ninguém consegue parar você e sua tripulação! Vitória!!"
        imagemQuadro.src = "imagens/Victory.jpg"
    }
