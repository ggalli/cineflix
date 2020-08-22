import React, { useState, useEffect } from 'react';
import BaseLayout from '../../../components/BaseLayout';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import serviceVideos from '../../../services/videos';
import serviceCategories from '../../../services/categories';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values, clearForm } = useForm({});
  const [categories, setCategories] = useState([]);

  const categoryTitles = categories.map(({ name }) => name);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const selectedCategory = categories.find((category) => {
      return category.name === values.categoria;
    });
    
    try {
      await serviceVideos.create({
        titulo: values.titulo,
        url: values.url,
        categoriaId: selectedCategory.id
      })
      history.push('/');
      
    } catch (error) {
      alert('Não foi possível cadastrar o vídeo.')
    }

  }

  useEffect(() => {
    (async function getCategories() {
      const categories = await serviceCategories.getAll();
      setCategories(categories);
    })();
  }, [])

  return (
    <BaseLayout>
      <h1>Cadastrar vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label='Título do vídeo'
          name='titulo'
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label='URL do vídeo' 
          name='url'
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label='Categoria' 
          name='categoria'
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </BaseLayout>
  )
}

export default CadastroVideo;