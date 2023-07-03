

function leDados() {
    let strDados = localStorage.getItem('feedback');
    let objDados = {};


    if (strDados) {
        objDados = JSON.parse(strDados);
    }//fim if
    else {
        objDados =
        {
            feedbacks:
                [
                    {
                        protocolo: '0',
                        email: 'anonimo',
                        avaliacao: '5',
                        feedback: 'muito bom.'
                    },
                    {
                        protocolo: '1',
                        email: 'anonimo',
                        avaliacao: '5',
                        feedback: 'muito bom.'
                    },
                    {
                        protocolo: '2',
                        email: 'anonimo',
                        avaliacao: '5',
                        feedback: 'muito bom.'
                    },
                ]
        }

    }//fim else

    return objDados;
}//fim ler dados


function salvaDados(dados) {
    localStorage.setItem('feedback', JSON.stringify(dados));
}//fim salvaDados


function imprimeDados() 
{


    let tela = document.getElementById('tela_feedback');
    let strHtml = '';
    let objDados = leDados();
    let protocolo = (objDados.feedbacks.length) -1;

    strHtml += `<p>protocolo: ${objDados.feedbacks[protocolo].protocolo}</p> <p>email: ${objDados.feedbacks[protocolo].email}</p> <p> nota: ${objDados.feedbacks[protocolo].avaliacao}</p> <p>feedback: ${objDados.feedbacks[protocolo].feedback}</p>`

    tela.innerHTML = strHtml;
 
}//fim imprimeDados()



 function incluirFeedback() 
{
    let avaliacao = document.getElementById('avaliacao_feedback').value;
    let email     = document.getElementById('email_feedback').value;
    let anonimo   = document.getElementById('anonimo').value;


// atribur valor para a variavel email
if(anonimo == "Sim")
{
    email = "Anonimo";
}// fim if

// atribuir valor para a variavel avaliacao
if(avaliacao == "0")
{
    avaliacao = 1;
}//fim if
else
{
    if(avaliacao == "25")
    {
        avaliacao = 2;
    }// fim if
    else
    {
        if(avaliacao == "50")
        {
            avaliacao = 3
        }// fim if
        else
        {
            if(avaliacao == "75")
            {
                avaliacao = 4;
            }// fim if
            else
            {
                avaliacao = 5 ;
            }// fim else
        }// fim else
    }// fim else
}// fim else


 // ler os dados do localStorage
    let objDados = leDados();

 // incluir uma nova pelada
    let strProtocolo     = String(objDados.feedbacks.length) ;
    let strAvaliacao     = String(avaliacao);
    let strEmailfeedback = email; 
    let strFeedback      = document.getElementById('texto_feedback').value; 


    let novoFeedback = {
        protocolo: strProtocolo,
        email: strEmailfeedback,
        avaliacao: strAvaliacao,
        feedback: strFeedback
    };

    objDados.feedbacks.push(novoFeedback);
 // Salvar os dados no localStorage novamente
    salvaDados(objDados);

    imprimeDados()

}//fim incluirPeladas()



//botao de enviar
    document.getElementById('btnIncluirFeedback').addEventListener ('click', incluirFeedback);


    

