import './App.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const PaginaOla = () => {
  //a página recebe os dados enviados e mostra uma mensagem de boas vindas
  const { data } = useParams();
  
  return (
    <div>
      <>
        {/* Definição da cor de fundo */}
        <Helmet>
          <style>{'body { background-color: black; }'}</style>
        </Helmet>
        {/* Elementos na tela */}
        <p className="textos" id="textoOla">Olá {data}!</p>
      </>
    </div>
  );
};

export default PaginaOla;
