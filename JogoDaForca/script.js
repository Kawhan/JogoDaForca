
var biblioteca=["javascript","curso","computador","transporte","livraria","tecnologia","controle","churrasco","brasil","impressora","xícara",
"monitor","brinquedo","youtube","portaria","escola","carnaval","teclado","guitarra","bateria","chinelo","helicoptero","arduino"];//Palavras possiveis para nosso jogo da forca , ou seja , aqui é um banco de dados de palavras que serão selecionadas de forma randomica(sortiadas) em nosso jogo.

var qtde=biblioteca.length-1;//Variavel que fala quantas palavras tem dentro da array biblioteca.Isso me permite adicionar mais palavras não se preocupando com mudanças posteriores no codigo.
var pos= Math.round(Math.random()*qtde);//Variavel que tem a função de armazenar um numero aleatorio entre 0 e quantidade de palavras que eu tenho dentro da minha biblioteca.Esse numero vai ser relacionado ao indice do array , assim demonstrando que palavra vamos selecionar dentro desse array.
var palavra = biblioteca[pos];//Palavra vai receber a palavra sortiada em nossa biblioteca de acordo com nosso numero gerado aleatoriamente.
var tam = palavra.length;//Variavel coo-relacionada ao tamanho da palavra.
var cxLetras=[];//Caixa de letras
var acertos;//Numero de acertos
var errosMax=7;//Numero maximo de erros.
var erros=0;//Numero total de erros do usuario.
var desenhos =[];//variavel ligada a mudança ou recebimento de imagens .
var acertou = false;//Variavel ligada a acertos "se acertou".
var jogando = false;//Variavel ligada para ver se o jogo está rolando.
var jog;

function defineLetras(l){//Função definir letras que recebe um parametro l , esse função está sendo chamada no inciciar. A variavel letra vai ser responsavel por disponibizar quantas letras eu tenho ou sejá quantos inputs eu vou utilizar.Ela recebe o tamanho da palavra na nossa função iniciar e de acordo com esse tamanho eu mostro o numero de letras ou escondo o numero de letras.
    var obj;
    for(var i=0;i<20;i++){
        obj=document.getElementById("letra"+i).value="";//Colocando o value em 0 meio que resetando o que estiver dentro dessas letras.
        obj=document.getElementById("letra"+i).style.display="none";//Isso aqui meio que define todas as letras com display none.O none meio que esconde essas letras ou caixas de input.
    }
    for(var i=0;i<l;i++){//Aqui vai ser responsavel por mostra apenas as letras das palavras , conforme a varial tam , que foi atribuido a l.
        obj=document.getElementById("letra"+i).style.display="inline-block";//O inline-block meio que vai mostra ou exibir novamente as letras necessarias para a palavra.
    }
}

function jogar(){//Toda a rotina de testes do jogo , quando eu clicko no botão jogar o que acontece é:
    jog=document.getElementById("letraJ");//Defino jog com elemento da letra do jogador e coloco o foco nele.
    jog.focus();
    if(jog.value==""){//Verifico se não foi digitada letra nenhuma.
        alert("Digite uma letra");
    }else{//Se foi digitado uma letra ele verifica se o jogo está rolando
        if(jogando){//O jogo ta rolando? ta jogando? ou seja a variavel jogando sejá igual true , porque se o jogador perde ou ganha ele só vai poder joga novamente quando ele clickar em jogar novamente. Se o jogando for true ele cria a rotina do jogo.
            var jog;
            var obj;//Variavel que tem como função associar alguns elementos.
            var letraTmp;//l
            var letra;
            var pesq;
            letra=jog.value;//Letra vai receber o valor que foi digitado no campo de input de escolha de letra do usuario.Eu peguei a letra que o usuario escolheu e armazenei na variavel letra.
            jog.value="";//Depois de eu armazenar na variavel eu limpo o conteudo do campo do input que é digitado as letras.
            acertou=false;//Defininindo a variavel acertou como false já que eu ainda vou fazer a validação depois.
            pesq=palavra.match(letra);//Na variavel pesq eu pesquisei a na palavra sortiada , a letra que o jogador escolheu , então eu verifico se a letra que o jogador escolheu tem alguma ocorrencia nessa palavra que foi sortiada.
            while(pesq!=null){//Se pesq for diferente de null , significa que ele encontrou uma ocorrendia dessa letra na palavra escolhida.Ou sejá foram encontradas ocorrencia da letra na palavra.
                letraTmp=palavra.search(letra);//Aramazenando uma pesquisa(search) da letra na palavra.
                obj=document.getElementById("letra"+letraTmp).value=letra;//Eu armazeno na posição dessa letra que foi pesquisada a letra que foi digitada , tem de está dentro de um while porque se tiver mais de uma ocorrencia da letra ele meio que vai selecionar todos os campos que assim correspondem a ela.
                palavra=palavra.replace(letra,'0');//Na palavra eu tive de substituir o caracter letra pelo 0 , para ele não da como ocorrencia essa letra , porque enquanto pesquisa estiver encontrando a letra ele vai está dentro do while , ou sejá quando for encontrado a primeira ocorrencia ele ignore essa ocorrencia e passa para proxima letra quando for marcado no quadrante onde a letra está.
                acertos++;//Se ele chegou nessa rotina ele incrementa acertos = 1, já que ele está acertando.
                pesq=palavra.match(letra);//Faz a pesquisa novamente da letra.Ou sejá ele reefez a pesquisa até não achar a letra assim retornando a letra saindo do while.
                acertou=true;//Define o valor de acertou como true.
            }
            if(!acertou){//Saindo do while ele verifica se houve acerto , aqui no caso !acertou(se não acertou).
                document.getElementById("dvletrasdigitadas").innerHTML+=letra.toUpperCase()+ " ";//E nas letras digitadas ele vai coloca a letra que foi escolhida em maiuscula.
                erros++;//Ele vai incremenetar o erros .
                if(erros<7){//O numero de erros é menor do que 7? Se for ele mostra uma peça do desenho.
                    desenhos[erros].style.display="block";
                }else{//Caso o numero de erros não for menor que 7 , então o jogador perdeu então ele mostra na nossa div relacionada a ganhou e perdeu , a mensagem perdeu e muda a imagem que estáva antes ou seja do erro 6 por a imagem de game over.
                    document.getElementById("dvmsg").innerHTML="PERDEU";
                    alert("Você perdeu , tente novamente!")
                    jogando=false;//Para o jogo.
                    document.getElementById("pernaD").src="cabeca2.png";
                }
            }
            if(acertos==tam){//Se nossa rotina não entra na de erro ele verifica se acertos é igual o tamanaho da palavra , se for igual o tamanho da palavra significa que ele acertou todas as letras e ganhou.
                document.getElementById("dvmsg").innerHTML="";//apaga o conteudo da dvmsg
                document.getElementById("dvmsg").innerHTML="GANHOU";//Seleciona a mensagem de ganhou.
                alert("Você ganhou!")
                jogando=false;//Para o jogo.
            }
        }
    }
}

function inicia(){//O iniciar vai fazer a inicialização das variaveis e vai preparar os elementos para um novo jogo , então por sua vez o incia inicializa algumas variaveis.Lembrando que o inicia é chamado a todo momento que eu quero iniciar outro jogo.É chamada sempre que colocar uma nova palavra ou carregar a imagem.


    jogando=true;//jogo está rolando está ativo.
    jog=document.getElementById("letraJ");//A variavel jog recebe a letra do jogador.
    jog.value="";//O valor dela inicial vai ser zero ou sejá não vai ter nada dentro do nosso input responsavel por passar letras no começo.
    jog.focus();//Selecionando o focus para demostra que o cursor vai está nela.
    acertos=0;//Numeros de acertos iniciais vai ser zero , ou sejá quando o jogo iniciar ele vai está zerado.
    erros=0;//Numero de erros no inicio também setado para 0.
    acertou=false;//Variavel acertou ligada a questão de acetos de letra vai ser setada em false , já que não foi digitada nenhuma letra no inicio ainda.Ligada a função jogar.
    document.getElementById("dvletrasdigitadas").innerHTML="Letras Digitadas:";//Gerenciar em sí as letras digitadas.Para incialmente receber somente o texto letras digitadas.Ele foi setado aqui porque eu não vou querer iniciar apenas a primeira vez , o jogador pode jogar varias vezes , então afim de evitar que tenha um monte de letras digitadas antes do jogador começar novamente , eu meio que defino aqui dentro.
    pos= Math.round(Math.random()*qtde);//Sortiando a questão da posição da palavra.
    palavra=biblioteca[pos];//Atribuindo essa posição da palavra sortiada a nosso indice de bliblioteca , selecionando a palavra apartir disso.
    tam=palavra.length;//Tamanho da palavra
    defineLetras(tam);//CHamando definir letras apartir do tamanho da palavra que foi chamado
    document.getElementById("dvmsg").innerHTML="";//Definir nada na nossa div dvmsg que vai receber o valor ganhou ou perdeu , assim no inicio isso não aparece.
    desenhos[1]=document.getElementById("cabeca");//Definindo todos os desenhos nas variaveis , atibuindo cada posição no array desenhos.
    desenhos[2]=document.getElementById("corpo");
    desenhos[3]=document.getElementById("bracoE");
    desenhos[4]=document.getElementById("bracoD");
    desenhos[5]=document.getElementById("pernaE");
    desenhos[6]=document.getElementById("pernaD");

    document.getElementById("cabeca").src="cabeca1.png";//Definindo para o cabeça a primeira imagem inicial , já que eu tenho duas imagens que vai ser carregada em cabeça um para primeira e outra para quando morrer.
    for(var i=1;i<7;i++){//Ocultar todas as peças ou sejá se for um novo jogo eu oculto as imagens que já foram mostradas.
        desenhos[i].style.display="none";//Então aqui eu coloco o display de todas as peças como none.
    }
}

function dica(){//Dica relativo a questão de mostra uma dica da palavra.
    alert(palavra);
    jog.focus();
}

window.addEventListener("load",inicia);//Chamando a função inicia