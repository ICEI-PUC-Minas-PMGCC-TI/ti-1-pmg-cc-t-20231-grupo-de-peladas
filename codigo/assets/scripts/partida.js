const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
    
    
    var objPessoas = {
        pessoas:
        [
            {
                id: '0',
                nome: 'Joaquim',
                fav_esporte: 'peteca',
                descricao: 'Gosto de jogar peteca'
            },
            {
                id: '1',
                nome: 'Ana',
                fav_esporte: 'futebol',
                descricao: 'Gosto de jogar futebol'
            },
            {
                id: '2',
                nome: 'Rouanet',
                fav_esporte: 'futebol',
                descricao: 'Gosto de jogar futebol'
            }
        ]

    }
    
    
    function leDados() {
        let strDados = localStorage.getItem('db');
        let objDados = {};
    
    
        if (strDados) {
            objDados = JSON.parse(strDados);
        }//fim if
        else {
            objDados =
            {
                peladas:
                    [
                        {
                            id: '0',
                            nome: 'Peladeiro_Puc',
                            esporte: 'volei',
                            quantidade: '15',
                            cidade:'BH',
                            bairro: 'Coração Eucaristico',
                            logradouo: 'Rua Dom Jose Gaspar',
                            numero: '500',
                            inicio: '14:00',
                            fim: '16:00',
                            data:'20/12/2023',
                            users: ['0','1','2']
                        }
                    ]
            }
    
        }//fim else
    
        return objDados;
    }//fim ler dados

    function leMensagem() {
        let strDados = localStorage.getItem('mensagem');
        let objDados = {};
    
        if (strDados) {
            objDados = JSON.parse(strDados);
        }//fim if
        else {
            objDados =
            {
                mensagens:
                    [
                        {
                            texto: ''
                        }
                    ]
            }
    
        }//fim else
    
        return objDados;
    }//fim ler dados
    
    
    function salvaDados(dados) {
        localStorage.setItem('db', JSON.stringify(dados));
    }//fim salvaDados
    
    function salvaMensagens(dados) {
        localStorage.setItem('mensagem', JSON.stringify(dados));
    }//fim salvaDados

    function imprimeDados() 
    {
        let tela = document.getElementById('nome_partida_apresentar');
        let strHtml = '';
        let objDados = leDados();
    
   
            strHtml = `<h3>${objDados.peladas[productId].nome}</h3>`

    
        tela.innerHTML = strHtml;
     
    }//fim imprimeDados()
    

    function imprimeMensagem() 
    {
        let tela = document.getElementById('mensagens');
        let strHtml = '';
        let objDados = leMensagem();
    
   
            strHtml = `<h6>${objDados.mensagens[(objDados.mensagens.length)-1].texto}</h6>`

    
        tela.innerHTML = strHtml;
     
    }//fim imprimeDados()


     function incluirMensagem() 
    {
     // ler os dados do localStorage
        let objDados = leMensagem();
    
     // incluir uma nova pelada
        let strMensagem  = document.getElementById('escrever_mensagens' ).value;
        
        let novaMensagem = {
                text :strMensagem
        };
    
        objDados.mensagens.push(novaMensagem);
     // Salvar os dados no localStorage novamente
        salvaMensagens(objDados);
    
     // imprimir dados
        imprimeMensagem();
    
    }//fim incluirPeladas()
    
    
    //botao de enviar
        document.getElementById(' BTNenviar_mensagens').addEventListener('click', incluirMensagem);
    
    
   

