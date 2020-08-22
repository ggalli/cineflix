import React, { useState, useEffect } from 'react';
import BaseLayout from '../../../components/BaseLayout';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import serviceCategories from '../../../services/categories';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const { handleChange, values, clearForm } = useForm(valoresIniciais)

  const [categories, setCategories] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCategorias([
    //   ...categorias,
    //   values
    // ]);

    // clearForm();
  }

  useEffect(() => {
    (async function getCategories() {
      const categories = await serviceCategories.getAll();
      setCategories(categories);
    })();
  }, [])

  return (
    <BaseLayout>
      <h1>
        Cadastrar categoria
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label='Nome da categoria'
          name='nome'
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label='Descriçao'
          type='textarea'
          name='descricao'
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label='Cor'
          type='color'
          name='cor'
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categories.map((categoria) => (
          <li key={`${categoria.id}`}>
            {categoria.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </BaseLayout>
  )
}

export default CadastroCategoria;