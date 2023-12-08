import './App.css';
import React, { useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PaginaLogin = () => {
  const navigate = useNavigate();

  //método que enviará os dados inseridos para a próxima página e redirecionará o usuário
  const redirecionar = (nomeRecebido) => {
    navigate(`/ola/${[nomeRecebido]}`);
  };
  
  //método que definirá oque acontecerá após o usuário tentar fazer o login, de acordo com os dados inseridos (se foi um login bem sucedido ou não). Mostra uma mensagem indicando qual o erro ocorrido caso a tentativa de login tenha sido mal sucedida
  //caso o login tenha sido executado com sucesso, o usuário será redirecionado para uma página de "olá"
  function resultadoLogin(resultado, nomeInserido){
    if(resultado === 0){
      redirecionar(nomeInserido);
    }
    else if(resultado === 1){window.alert("usuário não encontrado");}
    else{window.alert("senha não encontrada");
    }
  }
  
  //variáveis que salvam os dados no banco de dados e o nome e a senha inseridos
  const [data, setData] = useState([]);
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState(''); 
  

  useEffect(() => {
    //buscar dados salvos no banco de dados (é necessário executar o comando "node conexaoBD.js" no cmd antes)
    axios.get('http://localhost:3001/7xRgYpK2tL')
      .then(response => setData(response.data))
      .catch(error => console.error('Erro:', error));
  }, []);

  //após inserir o nome e a senha, verificar se o usuário existe no banco de dados, se ele existe, checar se a senha foi inserida corretamente.
  //para cada tipo de erro há um código, 0 = nenhum erro, 1 = usuário não encontrado, 2 = senha incorreta.
  const tentarLogin = () => {
    let tipoErro = 1;
    for (let i = 0; i < data.length; i++){
      if(data[i]["nome"] === nome){
        tipoErro = 2
        if(data[i]["senha"] === senha){
          tipoErro = 0
        }
        break;
      }
    }
    resultadoLogin(tipoErro, nome);
  };

  return (
    <div>
      <>
        {/* Definição da cor de fundo */}
        <Helmet>
          <style>{'body { background-color: black; }'}</style>
        </Helmet>
        {/* Elementos na tela */}
        <input className="campos" id="inserirNome" type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
        <input className="campos" id="inserirSenha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
        <p className="textos" id="textoNome">Nome:</p>
        <p className="textos" id="textoSenha">Senha:</p>
        <button id="botao" onClick={tentarLogin}>Fazer Login</button>
       </>
    </div>
  );
}

export default PaginaLogin;
