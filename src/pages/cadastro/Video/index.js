import React from 'react';
import BaseLayout from '../../../components/BaseLayout';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <BaseLayout>
      <h1>Cadastrar vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </BaseLayout>
  )
}

export default CadastroVideo;