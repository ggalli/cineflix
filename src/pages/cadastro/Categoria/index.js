import React from 'react';
import BaseLayout from '../../../components/BaseLayout';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <BaseLayout>
      <h1>Cadastrar categoria</h1>

      <form>
        <label>
          Nome da categoria
          <input type="text"/>
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Ir para a home
      </Link>
    </BaseLayout>
  )
}

export default CadastroCategoria;