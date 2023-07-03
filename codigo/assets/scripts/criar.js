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
    
    
    function salvaDados(dados) {
        localStorage.setItem('db', JSON.stringify(dados));
    }//fim salvaDados
    
    
    function imprimeDados() 
    {
        let tela = document.getElementById('apresentar_jogos');
        let strHtml = '';
        let objDados = leDados();
    
        for (let i = 0; i < objDados.peladas.length; i++)
        {
            strHtml += `<div class="apresentar_partida"><a href="../modulos/partida.html?id=${objDados.peladas[i].id}"> 
            <div class="apresentar_nome">${objDados.peladas[i].nome}</div>
            <div class="apresentar_esporte">Esporte:${objDados.peladas[i].esporte}</div>
            <div class="apresentar_cidade">cidade:${objDados.peladas[i].cidade}</div>
            <div class="apresentar_bairro">bairro: ${objDados.peladas[i].bairro}</div>
            <div class="apresentar_horario"> horario: ${objDados.peladas[i].inicio} às ${objDados.peladas[i].fim}</div>
            <div class="apresentar_data">${objDados.peladas[i].data}</div>
            <div class="apresentar_qntd">${objDados.peladas[i].quantidade}</div></a></div>`

        }//fim for
    
        tela.innerHTML = strHtml;
     
    }//fim imprimeDados()
    
     function incluirPeladas() 
    {
     // ler os dados do localStorage
        let objDados = leDados();
    
     // incluir uma nova pelada
        let strId = objDados.peladas.length;
        let strNome     = document.getElementById('nome_pelada'  ).value;
        let strEsporte  = document.getElementById('esporte_pelada' ).value;
        let strQntd  = document.getElementById('tamanho_pelada'  ).value;
        let strCidade = document.getElementById('cidade_pelada').value;
        let strBairro = document.getElementById('bairro_pelada').value;
        let strLogr = document.getElementById('logradouro_pelada').value;
        let strNumero = document.getElementById('numero_pelada').value;
        let strInicio   = document.getElementById('horario_inicio' ).value;
        let strFim      = document.getElementById('horario_fim'   ).value;
        let strData = document.getElementById('data_pelada').value;
    
    
    
        let novaPelada = {
                id :strId,
                nome: strNome,
                esporte: strEsporte,
                quantidade: strQntd,
                cidade: strCidade,
                bairro: strBairro,
                logradouo: strLogr,
                numero: strNumero,
                inicio: strInicio,
                fim: strFim,
                data: strData
        };
    
        objDados.peladas.push(novaPelada);
     // Salvar os dados no localStorage novamente
        salvaDados(objDados);
    
     // imprimir dados
        imprimeDados();
    
    }//fim incluirPeladas()
    
    
    //botao de enviar
        document.getElementById('btnIncluirPelada').addEventListener('click', incluirPeladas);
